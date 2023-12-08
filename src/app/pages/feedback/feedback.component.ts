import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  template: `Feedback Page`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackComponent {

}
