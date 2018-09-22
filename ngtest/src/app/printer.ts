import {Type, plainToClass, Transform, deserialize} from "class-transformer";

export interface IPrinter {
    name: string;
    type: PrinterType;
    numbers: number[];
    childs: IPrinter[];
    desc: Description;

    print(): string;
    calc(): number;
}

export interface Description {
    text: string;
    type: number;
}

export enum PrinterType {
    A,
    B
}

export class PrinterTypeDict {
    static getDict() {
        let di = {};

        di[PrinterType.A] = APrinter;
        di[PrinterType.B] = BPrinter;

        return di;
    }
}

export abstract class Printer implements IPrinter {
    desc: Description;
    @Type(() => Printer)
    @Transform((value: IPrinter[]) => {
        console.log("me transforming...");
        console.log(value);
        return value.map(function(v) {
            //return deserialize<IPrinter>(PrinterTypeDict[v.type], JSON.stringify(v));
            return deserialize<IPrinter>(PrinterTypeDict.getDict()[v.type], JSON.stringify(v));
        });
    }, { toClassOnly: true })
    childs: IPrinter[];

    numbers: number[];
    type: PrinterType;

    @Transform((value: any) => {
        return value + "";
    }, { toClassOnly: true })
    name: string;

    abstract print(): string;

    calc(): number {
        return this.numbers.reduce(function(a, b) {
            return a + b;
        });
    }    
}

export class APrinter extends Printer implements IPrinter {
    print(): string {
        return this.childs.map(function(c) {
            return c.print();
        }).reduce(function(s1, s2) {
            return s1 + s2;
        }, "") + "AAAAAAAAAAAAAAAAAAAAAAAAA";
    }

    constructor(name: string, childs: IPrinter[]) {
        super();

        this.name = name;
        this.type = PrinterType.A;
        this.childs = childs;

        this.numbers = [1,2,3];

        this.desc = {
            type: 1,
            text: 'desc for printer a'
        };
    }
}

export class BPrinter extends Printer implements IPrinter {
    print(): string {
        return this.childs.map(function(c) {
            return c.print();
        }).reduce(function(s1, s2) {
            return s1 + s2;
        }, "") + "BBBBBBBBBBBBBBBBBBBBBBBBB";
    }

    constructor(name: string, childs: IPrinter[]) {
        super();

        this.name = name;
        this.type = PrinterType.B;
        this.childs = childs;

        this.numbers = [43,293,289];

        this.desc = {
            type: 1,
            text: 'desc for printer b'
        };
    }
}