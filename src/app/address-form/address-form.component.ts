import {Component} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {ShoppingCartService} from "../shopping-cart.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss'
})
export class AddressFormComponent {
  constructor(protected shoppingCartService: ShoppingCartService) {
  }

  saveForm = new FormGroup({
    name: new FormControl('Jonas Fröller', Validators.required),
    card: new FormControl('378282246310005', Validators.required),
    expirationDate: new FormControl('12/2026', Validators.required),
    street: new FormControl('Limesstraße', Validators.required),
    houseNumber: new FormControl("12-14", Validators.required),
    city: new FormControl('Leonding', Validators.required),
    zipCode: new FormControl('420', Validators.required),
    countryCode: new FormControl('AT', Validators.required),
    promoCode: new FormControl('propromo20', promoCodeValidator)
  })

  onSend() {
    if (this.saveForm.valid) {
      console.log(this.saveForm.value);
    }
  }
}

/**
 * Returns null if valid.
 */
export function promoCodeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const input = control.value;
    let result: ValidationErrors | null;

    const promoCodeRegex = /^[a-zA-Z0-9]*$/;
    const valid = promoCodeRegex.test(input);

    if (valid) {
      const promoCodes = ["propromo20"]
      if (promoCodes.includes(input)) {
        result = null;
      }
      result = {
        invalidPromoCode: {
          value: control.value,
          error: "invalid or expired promo code"
        }
      };
    } else {
      result = {
        invalidPromoCode: {
          value: control.value,
          error: "invalid code format"
        }
      };
    }

    return result;
  }
}
