import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github-copilot-demo';

  //validate chinese phone number function
  validatePhone(phone: string): boolean {
    const reg = /^1[3456789]\d{9}$/;
    return reg.test(phone);
  }

  //validate swedish phone number function
  validateSwedishPhone(phone: string): boolean {
    const reg = /^07[02369]\d{7}$/;
    return reg.test(phone);
  }

  //validate chinese currency function
  validateCurrency(currency: string): boolean {
    const reg = /^¥[0-9]+(.[0-9]{1,2})?$/;
    return reg.test(currency);
  }

  //validate french currency function
  validateFrenchCurrency(currency: string): boolean {
    const reg = /^[0-9]+(,[0-9]{1,2})?€$/;
    return reg.test(currency);
  }
}
