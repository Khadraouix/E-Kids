import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BoardComponent } from './board/board.component';
import { CoursesComponent } from './courses/courses.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { MyLearningComponent } from './my-learning/my-learning.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceComponent } from './service/service.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeachComponent } from './teach/teach.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
{ path: '',redirectTo:'/sign-in',pathMatch: 'full'},
{path: 'home', component:HomeComponent},
{path: 'service', component:ServiceComponent},
{path: 'games', component:GamesComponent},
{path: 'board', component:BoardComponent},
{path: 'Tic-Tac-Toe', component:TicTacToeComponent},
{path: 'profile', component:ProfileComponent},
{path: 'my-learning', component:MyLearningComponent},
{path: 'teach', component:TeachComponent},
{path: 'courses', component:CoursesComponent},
{path: 'about', component:AboutComponent},
{path: 'sign-in', component:SignInComponent},
{path: 'sign-up', component:SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
