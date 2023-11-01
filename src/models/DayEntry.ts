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

    calculateResume() {
        this.balance = 0;
        this.income = 0;
        this.expense = 0;
        this.entryes.forEach(entrye => {
            if (entrye.type === "despesa") {
                this.expense += entrye.value;
            } else {
                this.income += entrye.value;
            }
            this.balance = this.income - this.expense;
        });
        return this;
    }

    updateData() {
        this.calculateResume();
        this.orderEntriesByDate();
        return this;
    }

    addEntry(entry: Entry) {
        this.entryes.push(entry);
        if (entry.type === "despesa") {
            this.expense += entry.value;
        } else {
            this.income += entry.value;
        }
        this.balance = this.income - this.expense;

        return this
    }

    removeEntry(id: number) {
        let entry: Entry = this.entryes.splice(id, 1)[0];
        if (entry.type === "despesa") {
            this.expense -= entry.value;
        } else {
            this.income -= entry.value;
        }
        this.balance = this.income - this.expense;
        this.resetIndex();
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
        return this;
    }
}