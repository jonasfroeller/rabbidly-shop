import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemsWrapperComponent } from './shop-items-wrapper.component';

describe('ShopItemsWrapperComponent', () => {
  let component: ShopItemsWrapperComponent;
  let fixture: ComponentFixture<ShopItemsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopItemsWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopItemsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
