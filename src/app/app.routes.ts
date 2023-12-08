import { ActivatedRoute, Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ProductComponent } from './pages/product/product.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { inject } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    title: 'Main Page',
    component: ShopComponent,
    pathMatch: 'full',
  },
  {
    path: 'feedback',
    title: 'Feedback Page',
    component: FeedbackComponent,
  },
  {
    path: 'product/:id',
    title: 'Product Page',
    resolve: () => inject(ActivatedRoute).snapshot.paramMap.get('id'),
    component: ProductComponent,
  },
  {
    path: '**',
    title: 'Error Page',
    component: ErrorPageComponent,
  },
];
