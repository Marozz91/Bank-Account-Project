import { ValidationError } from "../2-models/client-errors";
import { BankAccountsModel, IBankAccountsModel } from "../2-models/bank-account-model";


// Get all from database:
function getAllActionsByAccountNumber(accountNumber: string): Promise<IBankAccountsModel[]> {
    return BankAccountsModel.find({ accountNumber }).exec();
}

// Add:
function addAccount(account: IBankAccountsModel): Promise<IBankAccountsModel> {
    const errors = account.validateSync();
    if (errors) throw new ValidationError(errors.message);
    return account.save();
}

export default {
    getAllActionsByAccountNumber,
    addAccount,

}