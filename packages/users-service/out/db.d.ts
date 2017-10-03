import Lowdb = require('lowdb');
export interface IDbContext {
    users: Lowdb.Lowdb;
}
export declare class DbContext implements IDbContext {
    protected context: Lowdb.Lowdb;
    constructor();
    readonly users: Lowdb;
}
declare const dbFactory: () => DbContext;
export default dbFactory;
