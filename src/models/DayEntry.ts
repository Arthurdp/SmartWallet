import { Entry } from "./Entry";

export class DayEntry {

    date : Date;
    balance : number;
    income : number;
    expense : number;
    entryes : Entry[];

    constructor( date: Date, balance : number, income : number, expense : number , entryes : Entry[] ) {
        this.date = date;
        this.balance = balance;
        this.income = income;
        this.expense = expense;
        this.entryes = entryes;
    }

    calculateDayResume() {
        this.balance = 0;
        this.income = 0;
        this.expense = 0;
        this.entryes.forEach(entrye => {
            if (entrye.type == "despesa") {
                this.expense += entrye.value;
            } else {
                this.income += entrye.value;
            }
            this.balance = this.income - this.expense;
        });
        return this;
    }

    updateDayData() {
        this.calculateDayResume();
        this.orderEntriesByDate();
        return this;
    }

    addEntry(entry: Entry) {
        this.entryes.push(entry);
        this.updateDayData();
        return this
    }

    removeEntry(id: number) {
        this.entryes.splice(id, 1)[0];
        this.updateDayData();
        return this;
    }

    resetIndex() {
        this.entryes.forEach((entry, index) => {
            entry.index = index;
        });
        return this;
    }

    orderEntriesByDate() {
        this.entryes.sort((a, b) => {
            return new Date(b.time).getTime() - new Date(a.time).getTime();
        });
        this.resetIndex();
        return this;
    }
}