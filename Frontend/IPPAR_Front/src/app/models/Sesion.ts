import { User } from "./User";

export class Sesion {
    static GENERAL='GENERAL'
    static INSIDE = 'INSIDE'
    constructor(
        public CurrentUser:User,
        public searchLevel: string,
    ) { }
}