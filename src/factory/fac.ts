import * as mongoose from 'mongoose';

export class Connection {

    public _connection: string = 'mongodb://localhost/EnergyControl';

    constructor() {
        mongoose.connect(this._connection, {useNewUrlParser: true});
    }
}