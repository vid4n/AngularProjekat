import Phone from './phone.model'

export default class Shop {
    constructor(
        public id: number,
        public city: string,
        public phones: Phone[]
    ){}
}