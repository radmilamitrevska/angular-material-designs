import { Injectable } from '@angular/core';
import {MessageService} from "./message.service";
import {Observable} from "rxjs/Observable";
import {Hero} from "../hero";
import {of} from "rxjs/observable/of";
import {HEROES} from "../mock-heroes";

@Injectable()
export class HeroService {


    constructor(private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {
        // Todo: send the message _after_ fetching the heroes
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }
}
