import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { WishlistComponent } from './wishlist.component';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;
  let wishlistService: jasmine.SpyObj<WishlistService>;
  let cartService: jasmine.SpyObj<CartService>;

  beforeEach(async () => {
    const wishlistSpy = jasmine.createSpyObj('WishlistService', ['removeFromWishlist', 'clearWishlist'], {
      wishlist$: of(null)
    });
    const cartSpy = jasmine.createSpyObj('CartService', ['addToCart']);

    await TestBed.configureTestingModule({
      declarations: [WishlistComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: WishlistService, useValue: wishlistSpy },
        { provide: CartService, useValue: cartSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    wishlistService = TestBed.inject(WishlistService) as jasmine.SpyObj<WishlistService>;
    cartService = TestBed.inject(CartService) as jasmine.SpyObj<CartService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call wishlistService.removeFromWishlist when removing item', () => {
    component.removeFromWishlist('1');
    expect(wishlistService.removeFromWishlist).toHaveBeenCalledWith('1');
  });
});