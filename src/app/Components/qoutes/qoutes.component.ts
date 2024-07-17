import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QuoteService } from '../../Services/qoutes.service';

@Component({
  selector: 'app-qoutes',
  standalone: true,
  imports: [],
  templateUrl: './qoutes.component.html',
  styleUrls: ['./qoutes.component.css']
})
export class QoutesComponent implements OnChanges {
  name = 'junaid';
  @Input() childProperty: string = '';
  quote: string;

  constructor(private quoteService: QuoteService) {
    this.quote = this.quoteService.getRandomQuote();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['childProperty']) {
      console.log('Child property changed:', this.childProperty);
    }
  }

  generateQuote() {
    this.quote = this.quoteService.getRandomQuote();
  }
}
