import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ShoppingCartStatisticsComponent} from './shopping-cart-statistics.component';

describe('ShoppingCartStatisticsComponent', () => {
  let component: ShoppingCartStatisticsComponent;
  let fixture: ComponentFixture<ShoppingCartStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartStatisticsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
