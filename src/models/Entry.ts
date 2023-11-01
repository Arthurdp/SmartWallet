export class Entry {

    index : number;
    description: string;
    value: number;
    local: string;
    payment: string;
    time: Date;
    tag: string;
    type: string;

    constructor( index : number, description : string, value : number, local : string, payment : string, time : Date, tag : string, type : string) {
        this.index = index;
        this.description = description;
        this.value = value;
        this.local = local;
        this.payment = payment;
        this.time = time;
        this.tag = tag;
        this.type = type;
    }

    edit( description : string, value : number, local : string, payment : string, time : Date, tag : string, type : string) {
        this.description = description;
        this.value = value;
        this.local = local;
        this.payment = payment;
        this.time = time;
        this.tag = tag;
        this.type = type;
    }
}