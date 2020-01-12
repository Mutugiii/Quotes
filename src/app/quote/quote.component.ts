import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(0, 0, 'Coding is Life','Geek Tutor','Admin', new Date(2019,5,3)),
    new Quote(0, 0, 'Hakuna stage ya Kumi','Kenya Matwana','M3 Route', new Date(2019,12,1)),
    new Quote(0, 0, 'Vijana tuache Mihadarati','Stivo Simple Boy','KOT', new Date(2019,1,7))
  ]

  showDetails(index){
    this.quotes[index].showMore = !this.quotes[index].showMore;
  }

  deleteQuote(toDelete, index) {
    if(toDelete) {
      let deleteQuote = confirm(`Are you sure you wish to delete the quote by ${this.quotes[index].submitter}`)
      
      if(deleteQuote){
        this.quotes.splice(index, 1)
      }
    }
  }

  addNewQuote(quote){
    this.quotes.push(quote);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
