import { Account } from "./Account"

export class companyAccount extends Account {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (valorEmprestimo: number): void => {

        this.addBalanceLoan(valorEmprestimo)
        console.log(`Empréstimo de R$ ${valorEmprestimo} realizado com sucesso! Saldo atual: R$ ${this.getBalance()}`)
        
    }

     deposit = (valor: number): void => {
        if (valor <= 0) {
            throw new Error('Valor de depósito inválido')
        }
        this.addBalanceLoan(valor)
        console.log(`A empresa depositou R$ ${valor}. Saldo atual: R$ ${this.getBalance()}`)
    }

}