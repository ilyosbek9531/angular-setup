import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() searchResult: string = ''
  @Input() filterComponent: string = ''

  @Output() setSearchResult: EventEmitter<string> = new EventEmitter<string>()

  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.setSearchResult.emit(inputValue)
  }
}
