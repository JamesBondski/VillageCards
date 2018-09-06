import { Village } from "./village";

export class World {    
    
    private _village : Village = new Village();
    public get village() : Village {
        return this._village;
    }
    public set village(v : Village) {
        this._village = v;
    }
    
    turn():void {
        this.village.turn();
    }
}