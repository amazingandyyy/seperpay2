import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [
        LandingComponent
    ]
})
export class AppComponent {
    
}