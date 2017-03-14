import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  vote$: Observable<any[]>;
  votes$: Observable<any[]>;
  vote: boolean;
  authState: FirebaseAuthState;

  constructor(private af: AngularFire) {
    this.af.auth.subscribe(authState => {
      this.authState = authState;
      if (authState.uid) { this.getVote(); }
    });
  }

  ngOnInit() {
  }

  getVote() {
    this.vote$ = this.af.database.object(`votes/${this.authState.uid}`);
    this.votes$ = this.af.database.object(`votes`, { preserveSnapshot: true });
  }

  anonymousLogin() {
    this.af.auth.login()
      .then(authState => {
        this.authState = authState;
        this.submitVote('');
      });
  }

  submitVote(vote: boolean | string) {
    this.af.database.object(`votes/${this.authState.uid}`).set(vote);
  }



}
