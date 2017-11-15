import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroListComponent }    from './hero-list/hero-list.component';
import { HeroDetailComponent }  from './hero-details/hero-detail.component';
import {HeroService} from "./services/hero.service";
import {HeroRoutingModule} from "./routing/hero-routing.module";
import {MessageService} from "./services/message.service";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroRoutingModule
    ],
    declarations: [
        HeroListComponent,
        HeroDetailComponent
    ],
    providers: [
        HeroService,
        MessageService
    ]
})
export class HeroesModule {}
