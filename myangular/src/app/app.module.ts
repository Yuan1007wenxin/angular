import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AsideComponent } from './aside/aside.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContentComponent } from './content/content.component';
import { ItemComponent } from './item/item.component';
import { StartComponent } from './start/start.component';
import { DirexeComponent } from './direxe/direxe.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AsideComponent,
    CarouselComponent,
    ContentComponent,
    ItemComponent,
    StartComponent,
    DirexeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
