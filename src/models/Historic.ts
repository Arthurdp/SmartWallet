import { DayEntry } from "./DayEntry";
import { Entry } from "./Entry";

export class Historic {

    balance: number;
    income: number;
    expense: number;
    dayEntryes: DayEntry[];

    constructor(balance: number, income: number, expense: number, dayEntryes: DayEntry[]) {
        this.balance = balance;
        this.income = income;
        this.expense = expense;
        this.dayEntryes = dayEntryes;
    }

    calculateResume() {
        this.balance = 0;
        this.income = 0;
        this.expense = 0;
        this.dayEntryes.forEach(dayEntrye => {
            this.income += dayEntrye.income;
            this.expense += dayEntrye.expense;
        });
        this.balance = this.income - this.expense;

        return this;
    }

    orderDayEntriesByDate() {
        this.dayEntryes.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        return this;
    }

    removeEmptyDayEntries() {
        for (let dayEntry of this.dayEntryes) {
            if (dayEntry.entryes.length == 0) {
                this.removeDayEntry(dayEntry);
            }
        }
        return this;
    }

    updateHistoricData() {
        this.calculateResume();
        this.orderDayEntriesByDate();
        this.removeEmptyDayEntries();
        return this;
    }

    addDayEntry(dayEntry: DayEntry) {
        this.dayEntryes.push(dayEntry);
        this.updateHistoricData();
        return this;
    }

    removeDayEntry(dayEntry: DayEntry) {
        this.dayEntryes.splice(this.dayEntryes.indexOf(dayEntry), 1);
        this.balance -= dayEntry.balance;
        this.income -= dayEntry.income;
        this.expense -= dayEntry.expense;
        this.updateHistoricData();
        return this;
    }

    deleteEntry(entry: Entry) {
        let verifyDay: DayEntry;
        verifyDay = this.dayEntryes.find(dayEntry => {
            if (dayEntry.date.toDateString() == entry.time.toDateString()) {
                dayEntry.removeEntry(entry.index);

                return dayEntry;
            }
        });
        if (verifyDay !== undefined) {
            this.updateHistoricData();
        }
        return this;
    }
}