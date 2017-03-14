import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  totalVotes$: FirebaseObjectObservable<number>;
  vote$: FirebaseObjectObservable<boolean>;
  vote: boolean;
  authState: FirebaseAuthState;

  constructor(private af: AngularFire) {
    // this.af.auth.subscribe(authState => {
    //   this.authState = authState;
    //   if (authState) {
    //     this.getVote();
    //     this.getTotalVotes();
    //   }
    // });
  }

  ngOnInit() {
    this.af.auth.subscribe(authState => {
      this.authState = authState;
      if (authState) {
        this.getVote();
        this.getTotalVotes();
      }
    });
  }

  getVote() {
    this.vote$ = this.af.database.object(`votes/${this.authState.uid}`);
  }

  getTotalVotes() {
    this.totalVotes$ = this.af.database.object(`totalVotes`);
  }

  anonymousLogin() {
    this.af.auth.login()
      .then(authState => this.authState = authState);
  }

  submitVote(vote: boolean | string) {
    this.af.database.object(`votes/${this.authState.uid}`).set(vote);
  }



}
