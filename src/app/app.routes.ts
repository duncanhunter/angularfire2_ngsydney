import { Routes } from '@angular/router';
import { VoteComponent } from "./vote/vote.component";
import { VoterListComponent } from "./voter-list/voter-list.component";

export const appRoutes: Routes = [
    {path: '', redirectTo: 'vote', pathMatch: 'full'},
    {path: 'vote', component: VoteComponent},
    {path: 'voter-list', component: VoterListComponent},
];
