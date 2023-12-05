import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListArticlesComponent } from './articles/pages/list-articles/list-articles.component';
import { CreateArticleComponent } from './articles/pages/create-article/create-article.component';
import { EditArticleComponent } from './articles/pages/edit-article/edit-article.component';
import { CreateProductComponent } from './articles/pages/create-product/create-product.component';
import { EditProductComponent } from './articles/pages/edit-product/edit-product.component';
import { ListActividadesComponent } from './turismo/list-actividades/list-actividades.component';

const routes: Routes = [
  { path: '', component: ListActividadesComponent, pathMatch: 'full' },
  { path: 'create-article', component: CreateArticleComponent },
  { path: 'edit-article', component: EditArticleComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'edit-product', component: EditProductComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
