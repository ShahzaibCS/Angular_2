import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

//Root Module
import {AppModule} from "./app.module";

//Bootstrapping Angular App.
platformBrowserDynamic().bootstrapModule(AppModule).catch(err=>{console.log(err)});