import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ProductsService, TelegramService } from '../../services';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <div>
      <app-product-list
        title="Интенсивы"
        subtitle="Экспресс программы, где за короткий период вы получаете максимум пользы"
        [products]="products.byGroup['Intensive']"
      />
      <app-product-list
        title="Отдельный навык"
        subtitle="Изучите восстребованные технологии, чтоб расширить свой стек и добавить заветную галочку в резюме"
        [products]="products.byGroup['Skill']"
      />
      <app-product-list
        title="Бесплатные курсы"
        subtitle="Необходимые навыки и проекты в портфолио за ваши старания"
        [products]="products.byGroup['Course']"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopComponent implements OnInit {
  private readonly telegram = inject(TelegramService);
  readonly products = inject(ProductsService);

  ngOnInit(): void {
    this.telegram.BackButton?.hide();
  }
}
