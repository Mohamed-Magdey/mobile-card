import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MobileCardComponent } from './components/mobile-card/mobile-card.component';
import { StoryCardComponent } from "./components/story-card/story-card.component";

@NgModule({
  declarations: [
    AppComponent,
    MobileCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    StoryCardComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
