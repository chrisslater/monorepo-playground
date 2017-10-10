import Low = require('lowdb');
export interface IUser {
    id: string;
    name: string;
    nationality: string;
}
export interface IDbContext {
    get<TResult>(str: string): this;
    value<TResult>(): TResult;
}
export interface IDb {
    getUsers(): IUser[];
}
export declare class Db implements IDb {
    protected context: IDbContext;
    constructor(context: IDbContext);
    getUsers(): IUser[];
}
declare const dbFactory: (context?: Low) => Db;
export default dbFactory;
