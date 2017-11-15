import { NgModule } from '@angular/core';

import {FormComponent} from './login/form.component';
import { InternationalizationComponent } from './internationalization/internationalization.component';
import {RouterModule, Routes} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: 'form', component: FormComponent },
    { path: 'internationalization', component: InternationalizationComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
