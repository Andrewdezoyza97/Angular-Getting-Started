import { NgModule } from '@angular/core';
import { ProductListComponet } from './product-list.componet';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponet,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponet },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
