import { Component } from '@angular/core';

@Component({
  selector: 'top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})

export class TopHeaderComponent {
  buttonName: string = "click me"
  buttonType: string = 'button'
  imageUrl: string = '../../assets/images/union.png'
  hiddenText: string = ""
  inputVal: string = ''
  count: number = 0

  showText() {
    this.hiddenText = 'Hey you see me'
  }

  incrementVal() {
    this.count++
  }
  decrementVal() {
    this.count--
  }
}
