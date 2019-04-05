// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { DetailComponent, MainComponent } from 'src/app/pages';
import {
  DividerComponent,
  HeaderBarComponent,
  IconButtonComponent,
  TextButtonComponent,
  TileComponent
} from 'src/app/components';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

// Services
import { MainService } from './services/main.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    DividerComponent,
    HeaderBarComponent,
    IconButtonComponent,
    MainComponent,
    TextButtonComponent,
    TileComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterialModule
  ],
  providers: [
    MainService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
