import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActionType, BankAccountModel } from '../../../models/bank-account-model.ts';
import { NotifyService } from '../../../services/notify-service';
import { AccountService } from '../../../services/account-service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  public account = new BankAccountModel();

  public constructor(private accountService: AccountService, private notifyService: NotifyService, private router: Router) { }

  public async save() {
    try {
      await this.accountService.addAccount(this.account);
      this.notifyService.success("Account has been Added");
      this.router.navigateByUrl("/list");
    } catch (error) {
      this.notifyService.error("Can't add Account");
    }
  }

}
