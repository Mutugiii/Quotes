import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('All is well that ends well','Mark Twain','Mutugi'),
    new Quote('All is ends well','Mark Twain','Mutu'),
    new Quote('All is well that ends','Mark Twain','tugi')
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
