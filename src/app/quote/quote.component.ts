import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(0, 0, 'All is well that ends well','Mark Twain','Mutugi', new Date(2019,5,3)),
    new Quote(0, 0, 'All is ends well','Mark Twain','Mutu', new Date(2019,12,1)),
    new Quote(0, 0, 'All is well that ends','Mark Twain','tugi', new Date(2019,1,7))
  ]

  showDetails(index){
    this.quotes[index].showMore = !this.quotes[index].showMore;
  }

  deleteQuote(toDelete, index) {
    if(toDelete) {
      this.quotes.splice(index, 1)
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
