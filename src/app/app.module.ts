import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HighlightDirective } from './highlight.directive';
import { YearsAgoPipe } from './pipes/years-ago.pipe';
import { BoxComponent } from './box/box.component';
import { ColorChangeDirective } from './color-change.directive';

@NgModule({
  declarations: [	
    AppComponent,
    CardComponent,
    HighlightDirective,
    YearsAgoPipe,
      BoxComponent,
      ColorChangeDirective
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
