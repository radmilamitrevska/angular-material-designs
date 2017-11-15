import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-internationalization',
  templateUrl: './internationalization.component.html',
  styleUrls: ['./internationalization.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InternationalizationComponent implements OnInit {
    gender = 'm';
    constructor() { }

  ngOnInit() {
  }

}
