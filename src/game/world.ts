
export class World {
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    constructor() {
        this._name = 'Test World';
    }

    turn():void {
        this._name = 'Next turn';
    }
}