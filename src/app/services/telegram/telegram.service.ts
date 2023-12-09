import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { BackButton, MainButton, Telegram, WebApp } from "@twa-dev/types"

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private window: (Window & typeof globalThis) | null = null;
  telegram: WebApp | null = null;

  constructor() {
    const _document = inject(DOCUMENT);
    this.window = _document.defaultView;
    this.telegram = this.window?.Telegram?.WebApp || null;
  }


  get MainButton(): MainButton | null {
    return this.telegram?.MainButton || null;
  }

  get BackButton(): BackButton | null {
    return this.telegram?.BackButton || null;
  }

  ready(): void {
    this.telegram?.ready();
  }

  sendData(data: Record<string, unknown>): void {
    this.telegram?.sendData(JSON.stringify(data));
  }
}
