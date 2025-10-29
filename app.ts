// Dio Banking

import { Admin } from "./Classes/Admin"
import { companyAccount } from "./Classes/Company"
import { PeopleAccount } from "./Classes/People"

// name, accountNumber
// depositar, sacar



// const peopleAccount: PeopleAccount = new PeopleAccount(2,'Vinicius', 1)
// console.log(peopleAccount)

// MÉTODO DEPÓSITO
    //  peopleAccount.deposit(25)
    // peopleAccount.deposit(25)
// -----------------------------

//MÉTODO SAQUE
    // peopleAccount.deposit(50)
    // peopleAccount.withdraw(25)
// -----------------------------


// console.log(peopleAccount)

//--------------------------------------------

//MÉTODO EMPRÉSTIMO
// const companyaccount: companyAccount = new companyAccount('Mariana', 2)
// companyaccount.deposit(20)
// companyaccount.getLoan(500)
// companyaccount.getBalance()
//------------------------------------

// console.log(companyaccount)

//--------------------------------------

//MÉTODO ADMIN DEPOSITA RECEBE + 10

const admin: Admin = new Admin('Vinicius', 2)

admin.depositPlus(10)
console.log(admin)