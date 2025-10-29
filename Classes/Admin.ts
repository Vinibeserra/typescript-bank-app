import { Account } from "./Account"

export class Admin extends Account{

    constructor(name:string, accountNumber: number){
        super(name, accountNumber)
    }

    depositPlus = (valorDeposit: number) => {
        this.depositAdmin(valorDeposit)

        console.log(`Admin Depositou ${valorDeposit} e o saldo atual é de ${this.getBalance()}`)
    }

}