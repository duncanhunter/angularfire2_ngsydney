import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  voteCount$: FirebaseObjectObservable<any>;
  vote$: FirebaseObjectObservable<string>;
  authState: FirebaseAuthState;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.checkIfAuthenticated();
  }

  checkIfAuthenticated() {
    this.af.auth
      .subscribe(authState => {
        this.authState = authState;
        if (authState) {
          this.getVote();
          this.getTotalVotes();
        }
      });
  }

  anonymousLogin() {
    this.af.auth.login()
      .then(authState => this.authState = authState);
  }

  getTotalVotes() {
    this.voteCount$ = this.af.database.object(`voteCount`);
  }

  getVote() {
    this.vote$ = this.af.database.object(`votes/${this.authState.uid}`);
  }

  submitVote(vote: string) {
    this.af.database.object(`votes/${this.authState.uid}`).set(vote);
  }

}
