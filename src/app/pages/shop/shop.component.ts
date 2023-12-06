import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  template: `<h1>Hi World!</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopComponent implements OnInit {
  private readonly telegram = inject(TelegramService);

  ngOnInit(): void {
    this.telegram.MainButton?.show();
  }
}
