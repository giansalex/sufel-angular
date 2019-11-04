import { NumericDirective } from './numeric.directive';
import { ElementRef } from '@angular/core';

let elRef: ElementRef;

describe('NumericDirective', () => {
  it('should create an instance', () => {
    const directive = new NumericDirective(elRef);
    expect(directive).toBeTruthy();
  });
});
