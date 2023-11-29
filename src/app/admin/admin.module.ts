import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CreateArticleComponent } from './articles/pages/create-article/create-article.component';
import { EditArticleComponent } from './articles/pages/edit-article/edit-article.component';
import { ListArticlesComponent } from './articles/pages/list-articles/list-articles.component';
import { CreateProductComponent } from './articles/pages/create-product/create-product.component';
import { EditProductComponent } from './articles/pages/edit-product/edit-product.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AdminComponent,
    CreateArticleComponent,
    EditArticleComponent,
    ListArticlesComponent,
    CreateProductComponent,
    EditProductComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
