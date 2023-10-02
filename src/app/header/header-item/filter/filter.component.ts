import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() filterResult: string = 'all'
  @Output() selectedFilterResult: EventEmitter<string> = new EventEmitter<string>()
  handleFilter(filter: string) {
    this.selectedFilterResult.emit(filter)
  }
}
