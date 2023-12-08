import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from '../../services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  template: `
  <h2>{{ title }}</h2>
  <h4>{{ subtitle }}</h4>
    @for (product of products; track product.id) {
      <li class="product-item" [routerLink]="['/product', product.id]" >
          <div class="product-image">
            <img [src]="product.image" [alt]="product.title">
          </div>
          <div class="product-info">
            <h3>{{ product.title }}</h3>
            <p class="hint">{{ product.text }}</p>
            <p class="hint">{{ product.time }}</p>
          </div>
      </li>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;
  @Input({ required: true }) products: IProduct[] = [];
}
