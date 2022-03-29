import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  divNumbersOfEachSide: Array<number> = [1, 2, 3, 4, 5, 6, 7];

  constructor() { }

  ngOnInit() {
  }

}
