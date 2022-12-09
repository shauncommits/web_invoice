class Invoice{

    
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format(){
        return `${this.client} owes R${this.amount} for ${this.details}`;
    }
}