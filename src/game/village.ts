import { Resources } from './resources';

export class Village {

    private _name: string;
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    
    private _resources : {[id:number]:number} = {};
    public get resources() : {[id:number]:number} {
        return this._resources;
    }

    
    private _income : {[id:number]:number} = {};
    public get income() : {[id:number]:number} {
        return this._income;
    }
    

    constructor() {
        this._name = 'Test World';

        for(let res in Resources) {
            this.resources[res] = 0;
            this.income[res] = 1;
        }
    }

    turn(): void {
        for(let res in Resources) {
            this.resources[res] += this.income[res];
        }
    }
}