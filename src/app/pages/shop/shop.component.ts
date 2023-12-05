import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  template: `Hi World!`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopComponent {

}
