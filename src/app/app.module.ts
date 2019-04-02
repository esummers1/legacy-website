// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import {
  DividerComponent,
  HeaderBarComponent,
  IconButtonComponent,
  MainComponent,
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
    DividerComponent,
    HeaderBarComponent,
    IconButtonComponent,
    MainComponent,
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
