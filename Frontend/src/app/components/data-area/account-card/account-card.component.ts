import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BankAccountModel } from '../../../models/bank-account-model.ts';

@Component({
  selector: 'app-account-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.css'
})
export class AccountCardComponent {

  @Input()
  public account: BankAccountModel

}
