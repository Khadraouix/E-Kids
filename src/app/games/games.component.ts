import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
 games :String="ALL";



changeFolk(){
  this.games="Folk";
}
changeSport(){
  this.games="Sport";
}
changeGirl(){
  this.games="Girl";
}
changeRacing(){
  this.games="Racing";
}
changeAll(){
  this.games="ALL";
}



}
