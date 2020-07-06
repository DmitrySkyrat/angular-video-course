import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ErrorComponent } from './components/error/error.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoadingBlockComponent } from './components/loading-block/loading-block.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    ErrorComponent,
    LoadingBlockComponent,
  ],
  imports: [CommonModule, AppRoutingModule, MaterialModule],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    ErrorComponent,
    LoadingBlockComponent,
  ],
})
export class SharedModule {}
