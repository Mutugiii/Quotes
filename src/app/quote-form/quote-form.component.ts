import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @ViewChild('quoteForm',  {static: true}) formValues;
  newQuote = new Quote(0,0,'','','', new Date())
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    // this.formValues.resetForm()
  }
  constructor() { }

  ngOnInit() {
  }

}
