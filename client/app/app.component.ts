import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    directives: [
        ROUTER_DIRECTIVES,
        LandingComponent
    ],
    providers: [
     
    ]
})
export class AppComponent {
    
}