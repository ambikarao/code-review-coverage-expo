import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Wishlist } from '../../models/wishlist-item.model';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html'
})
export class WishlistComponent implements OnInit {
  wishlist$: Observable<Wishlist | null>;

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService
  ) {
    this.wishlist$ = this.wishlistService.wishlist$;
  }

  ngOnInit(): void {}

  removeFromWishlist(productId: string): void {
    this.wishlistService.removeFromWishlist(productId);
  }

  addToCart(wishlistItem: any): void {
    this.cartService.addToCart(wishlistItem.product);
    // Optionally remove from wishlist after adding to cart
    // this.wishlistService.removeFromWishlist(wishlistItem.product.id);
  }

  clearWishlist(): void {
    if (confirm('Are you sure you want to clear your wishlist?')) {
      this.wishlistService.clearWishlist();
    }
  }
}