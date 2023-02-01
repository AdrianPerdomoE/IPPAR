export class Store {
    constructor(
        public _id: string,
        public name: string,
        public image: string,
        public tag: string,
        public points: number,
        public waitTime: string
    ) { }
}