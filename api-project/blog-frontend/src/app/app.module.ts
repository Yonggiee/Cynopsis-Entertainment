import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { ArticleService } from './services/article.service';

@NgModule({
  declarations: [AppComponent, routingComponents, ArticleNewComponent, MenuComponent, LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [ArticleService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
