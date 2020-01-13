import { Component, OnInit, Output, EventEmitter, ViewChild, HostListener } from '@angular/core';
import { Quote } from '../quote';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @ViewChild('quoteForm',  {static: true}) formValues;
  newQuote = new Quote('','','', new Date())
  @Output() addQuote = new EventEmitter<Quote>();
  
  data: string = ""


  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote('','','', new Date())
    this.formValues.resetForm()
  }
  clearForm(action){
    action
  }
  constructor() { }

  ngOnInit() {
  }
}
