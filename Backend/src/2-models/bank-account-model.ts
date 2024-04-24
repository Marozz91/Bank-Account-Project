import mongoose from "mongoose";

enum ActionType {
    "withdrawal",
    "deposit",
    "loan"
}

// 1. Interface representing our nodel:
export interface IBankAccountsModel extends mongoose.Document {
    // Dont need to the declere _id:
    accountNumber: string;
    typeOfAction: ActionType;
    amount: number;
    date: Date;
    interest: number;
    payments: number;
}

// 2. Schema build on the interface, containing more settings:
export const BankAccountsSchema = new mongoose.Schema<IBankAccountsModel>({
    accountNumber: {
        type: String, // JavaScript 'String' object
        trim: true,
        unique: true,
        required: [true, "Missing Account Number"]
    },
    typeOfAction: String,
    amount: Number,
    date: {
        type: Date,
        default: Date.now
    },
    interest: Number,
    payments: Number,
}, {
    versionKey: false,
    id: false
});

// 3. Model - The finel class:
export const BankAccountsModel = mongoose.model<IBankAccountsModel>("BankAccounts", BankAccountsSchema, "AccountOperations"); // Model name, Scema, Collaction name:

