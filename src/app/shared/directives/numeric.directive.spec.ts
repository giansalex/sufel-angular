import { NumericDirective } from './numeric.directive';
import { ElementRef } from '@angular/core';

const elRef: ElementRef = null;

describe('NumericDirective', () => {
  it('should create an instance', () => {
    const directive = new NumericDirective(elRef);
    expect(directive).toBeTruthy();
  });
});
