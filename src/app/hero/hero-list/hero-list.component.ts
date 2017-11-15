import { Component } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../services/hero.service";

@Component({
    templateUrl: '/hero-list.component.html',
})
export class HeroListComponent {
    selectedHero: Hero;

    heroes: Hero[];

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }
}
