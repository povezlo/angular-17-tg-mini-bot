import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { IProduct, ProductsService, TelegramService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  template: `
    <div class="centered">
      @if (product) {
        <h2 class="mb">{{ product.title }}</h2>
        <br />
        <img [src]="product.image" [alt]="product.title">
        <p>{{ product.text }}</p>
        <p>{{ product.time }}</p>
        <a [href]="product.link" target="_blank">Посмотреть курс</a>
      } @else {
          <h2 class="mb">Product out of stock</h2>
      }

    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  product: IProduct | null = null;

  private productsService = inject(ProductsService);
  private telegram = inject(TelegramService);
  private router = inject(Router);

  constructor() {
    this.goBack = this.goBack.bind(this);
  }

  ngOnInit(): void {
    this.telegram.BackButton?.show();
    this.telegram.BackButton?.onClick(this.goBack);

    this.product = this.productsService.getById(this.id);
  }

  goBack(): void {
    this.router.navigate(['/'])
  }

  ngOnDestroy(): void {
    this.telegram.BackButton?.offClick(this.goBack);
  }
}
