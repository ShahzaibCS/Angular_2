import {Component} from '@angular/core';
import {Http,Response} from '@angular/http'

//Paths
import {paths} from './config';

@Component({
   selector:"my-app",
   templateUrl:paths.coreComponent+'app/app.component.html'
})
export class AppComponent{

    data:Object;
    loading:boolean;

    constructor(public http:Http){

    }

    makeRequest():void{
        this.loading = true;
        this.http.request('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe((res: Response) => {
            this.data = res.json();
            this.loading = false;
        });
    }
}