import { AbstractControl, ValidatorFn } from '@angular/forms';

export class OwnerValidators {
  static domainLimit(notAllowedDomains: string[]): ValidatorFn {
    return (formControl: AbstractControl) => {
      if (!formControl.value) return null;
      const isDomainAccepted = notAllowedDomains.every(notAllowedDomain => !formControl.value.endsWith(notAllowedDomain));
      return isDomainAccepted ? null : { domainLimit: { massage: 'You have typed not allowed domain'} }
    }
  }
}