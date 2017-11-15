import { Component, OnInit, Input } from '@angular/core';
import {Hero} from "../hero";

@Component({
    selector: 'app-hero-detail',
    template: '<p>Hero details</p>',
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;

    constructor() { }

    ngOnInit() {
    }

}
