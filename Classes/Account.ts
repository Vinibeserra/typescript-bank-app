export abstract class Account {
   private readonly name: string
    private readonly accountNumber: number
   private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name,
        this.accountNumber = accountNumber
    }

    protected getName = (): string => {
       return this.name
    }

    protected deposit = (value: number): void => {
        if (this.validateStatus()){
            this.balance += value
            console.log(`Você depositou R$ ${value}. Saldo atual: R$ ${this.balance}`)
        }
    }

    protected withdraw = (valueWithdraw: number): void => {
        if (this.validateWithdraw(valueWithdraw)){
            this.balance -= valueWithdraw

            console.log(`Você sacou R$ ${valueWithdraw}. Saldo atual: R$ ${this.balance}`)
        }
    }

    protected getBalance = (): number => {
        return this.balance
    }

    
    protected addBalanceLoan = (value:number):void => {
         if (this.validateStatus()){
             this.balance += value
         }

    }

    protected depositAdmin = (value: number):void => {
        this.balance += value + 10
    }

    private validateStatus = (): boolean => {
        if (this.status){
            return this.status
        }

        throw new Error('Conta Inválida')
    }

    private validateWithdraw = (valueWithdraw: number): boolean => {
        if (this.balance < valueWithdraw){
            throw new Error ('Impossível sacar, saldo menor que value solicitado')
        }
        
        return true
    }
}