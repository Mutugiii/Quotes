import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HighlighterDirective } from './highlighter.directive';
import { TimeCountPipe } from './time-count.pipe';
import { VoteComponent } from './vote/vote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDisplayComponent,
    HeaderComponent,
    BodyComponent,
    HighlighterDirective,
    TimeCountPipe,
    VoteComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
