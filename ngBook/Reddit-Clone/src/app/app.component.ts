import { Component } from '@angular/core';

//Import Model
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  articles:any[]=[];

  ngOnInit(){
    
  }
  

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    var myArticle = {title:title.value,link:link.value,votes:0};
    console.log(`My article : ${myArticle}`);
    this.articles.push(myArticle)
    console.log(`Articles list: ${this.articles}`);
    title.value = '';
    link.value = '';
    return false;
  }
}
