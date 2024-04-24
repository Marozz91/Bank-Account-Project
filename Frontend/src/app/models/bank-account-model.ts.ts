export enum ActionType {
    "withdrawal",
    "deposit",
    "loan"
}

export class BankAccountModel {

    _id: string
    accountNumber: string;
    typeOfAction: ActionType;
    amount: number;
    date: Date;
    interest: number;
    payments: number;
}