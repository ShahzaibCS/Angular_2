import {Component} from '@angular/core';

//Configuration path.
import {configPaths} from './config';

@Component({
   selector:'my-app',
   templateUrl:configPaths.corePath+'app.component.html'
})
export class AppComponent{

}