import { Component, OnInit, Input } from '@angular/core';

//Models
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host:{class:"row"}
})
export class ArticleComponent implements OnInit {
  votes: number = 0;
  title: string;
  link: string;

  // article:Article;
  @Input()
  article:Article;
 
  constructor() {
  //  this.title = 'Angular 2';
  //  this.link = 'http://angular.io';
  //  this.votes = 10;

  // this.article.votes = 0;

  // this.article = new Article('Angular 2','http://angular.io',10);
  }

  voteUp() {
  //  this.votes 
   this.article.votes += 1;
   return false;
  }
 
  voteDown() {
   this.article.votes -= 1;
   return false;
  }

    ngOnInit() {
    }
 
 }
