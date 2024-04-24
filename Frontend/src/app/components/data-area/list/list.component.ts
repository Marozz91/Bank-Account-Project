import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BankAccountModel } from '../../../models/bank-account-model.ts';
import { AccountService } from '../../../services/account-service';
import { NotifyService } from '../../../services/notify-service';
import { AccountCardComponent } from '../account-card/account-card.component.js';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, AccountCardComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public accountNumber: string;
  public account: BankAccountModel[];
  public initSearch = false;


  public constructor(private accountService: AccountService, private notifyService: NotifyService) { }

  public async search() {
    try {
      this.initSearch = true;
      this.account = await this.accountService.getAllActionsByAccountNumber(this.accountNumber);
    } catch (error) {
      this.notifyService.error("Can't get information");
    }
  }

}
