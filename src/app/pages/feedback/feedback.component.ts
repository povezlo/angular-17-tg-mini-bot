import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { TelegramService } from '../../services';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  styles: `
  .form {
    heigth: 70vh;
    justify-content: center;
  }`,
  template: `
      <form class="centered form">
        <h2 class="mb">Обратная связь</h2>
        <textarea [value]="feedback()" (input)="handleChange($event)" class="form-control"></textarea>
      </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackComponent implements OnInit, OnDestroy {
  feedback = signal('');

  private telegram = inject(TelegramService);

  constructor() {
    this.sendData = this.sendData.bind(this);
  }

  ngOnInit(): void {
    this.telegram.MainButton?.setText('Отправить сообщение');
    this.telegram.MainButton?.show();
    this.telegram.MainButton?.disable();
    this.telegram.MainButton?.onClick(this.sendData);
  }

  handleChange(e: Event): void {
    this.feedback.set((e.target as HTMLInputElement).value);
    if (this.feedback().trim()) {
      this.telegram.MainButton?.enable();
    } else {
      this.telegram.MainButton?.disable();
    }
  }

  sendData(): void {
    this.telegram.sendData({ feedback: this.feedback() })
  }

  ngOnDestroy(): void {
    this.telegram.MainButton?.offClick(this.sendData);
  }
}
