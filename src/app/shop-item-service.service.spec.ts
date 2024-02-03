import { TestBed } from '@angular/core/testing';

import { ShopItemServiceService } from './shop-item-service.service';

describe('ShopItemServiceService', () => {
  let service: ShopItemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopItemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
