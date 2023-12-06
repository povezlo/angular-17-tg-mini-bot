import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { MainButton, Telegram, WebApp } from "@twa-dev/types"

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
}