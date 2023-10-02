import { Component } from '@angular/core';

@Component({
  selector: 'header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent {
  list: (string | number)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "John", "Alex", "Smith"]
  filterResult: string = 'all'
  searchResult: string = ''

  selectedFilterResult(value: string) {
    this.filterResult = value
  }

  setSearchResult(value: string) {
    this.searchResult = value
  }

  filteredList() {
    let result: (string | number)[] = []

    switch (this.filterResult) {
      case 'all':
        result = this.list
        break
      case 'even':
        result = this.list.filter((item: number | string) => +item % 2 === 0)
        break
      case 'odd':
        result = this.list.filter((item: number | string) => +item % 2 === 1)
        break
      default:
        return []
    }

    return result.filter((item: number | string) => String(item).toLowerCase().includes(this.searchResult))
  }
}
