import { Component } from '@angular/core';
import { Comment } from './class/comment';

const COMMENTS: Comment[] = [
  { name: '渡邉 拓未', message: 'お疲れ様です'},
  { name: 'わとそん', message: '知的レベル高いよ'},
  { name: 'たくみん', message: 'おっす！'},
  { name: 'たっくん', message: 'なんだべさ'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  comments = COMMENTS;

}
