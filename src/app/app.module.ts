import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderBodyComponent } from './header-body/header-body.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    QuoteFormComponent,
    NavbarComponent,
    HeaderBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
