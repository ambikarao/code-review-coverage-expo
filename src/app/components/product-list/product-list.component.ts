import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductFilter } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  categories$: Observable<string[]>;
  currentFilter: ProductFilter = {};
  searchTerm = '';
  selectedCategory = '';
  sortBy = 'name';
  isLoading = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {
    this.products$ = this.productService.products$;
    this.categories$ = this.productService.getCategories();
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.products$ = this.productService.getProducts(this.currentFilter);
    setTimeout(() => this.isLoading = false, 500);
  }

  onSearch(): void {
    this.currentFilter = {
      ...this.currentFilter,
      searchTerm: this.searchTerm
    };
    this.loadProducts();
  }

  onCategoryChange(): void {
    this.currentFilter = {
      ...this.currentFilter,
      category: this.selectedCategory || undefined
    };
    this.loadProducts();
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
    // You could add a toast notification here
  }

  onToggleWishlist(product: Product): void {
    if (this.wishlistService.isInWishlist(product.id)) {
      this.wishlistService.removeFromWishlist(product.id);
    } else {
      this.wishlistService.addToWishlist(product);
    }
  }

  isInWishlist(productId: string): boolean {
    return this.wishlistService.isInWishlist(productId);
  }

  getDisplayPrice(product: Product): number {
    return product.discountPrice || product.price;
  }

  hasDiscount(product: Product): boolean {
    return !!product.discountPrice;
  }
}