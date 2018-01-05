import { Component } from '@angular/core';
import { Comment } from './class/comment';
import { User } from './class/user';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

const CURRENT_USER: User = new User(1, "わとそん");
const ANOTHER_USER: User = new User(2, "たくみん")

const COMMENTS: Comment[] = [
  new Comment(CURRENT_USER, 'わとそんだぞー'),
  new Comment(ANOTHER_USER, '痛いみにまけるな！'),
  new Comment(CURRENT_USER, 'わっしょい！'),
  new Comment(ANOTHER_USER, 'おそいよ~~~'),
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  item: Observable<any>;
  comments = COMMENTS;
  currentUser = CURRENT_USER;
  content = '';

  constructor(private db: AngularFireDatabase) {
    this.item = db.object('/item').valueChanges();
  }

  addComment(comment: string): void {
    if(comment) {
      this.comments.push(new Comment(this.currentUser, comment));
    }
  }
}
