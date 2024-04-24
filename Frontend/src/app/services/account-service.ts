import { HttpClient } from "@angular/common/http";
import { BankAccountModel } from "../models/bank-account-model.ts.js";
import { appConfig } from "../utils/config.js";
import { firstValueFrom } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AccountService {

    // DI:
    public constructor(private httpClient: HttpClient) { }

    // Get All products:
    public async getAllActionsByAccountNumber(accountNumber: string): Promise<BankAccountModel[]> {

        // Create an observable that cen fetch products from the server:
        const observable = this.httpClient.get<BankAccountModel[]>(appConfig.actionsByAccountNumber + accountNumber);

        // Convert that Observable to an Promise that we can wait for it:
        const actions = await firstValueFrom(observable);

        // Return the products:
        return actions;

    }



    // Add product:
    public async addAccount(account: BankAccountModel): Promise<void> {

        // Create an observable that cen send product to the server:
        const observable = this.httpClient.post<BankAccountModel>(appConfig.accountsUrl, account);

        // Convert that Observable to an Promise that we can wait for it:
        await firstValueFrom(observable);

    }

}