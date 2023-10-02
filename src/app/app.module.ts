import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderItemComponent } from './header/header-item/header-item.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './header/header-item/item/item.component';
import { FilterComponent } from './header/header-item/filter/filter.component';
import { SearchComponent } from './header/header-item/search/search.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, TopHeaderComponent, HeaderItemComponent, ItemComponent, FilterComponent, SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
