import { Component, Input } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /** GAME VARIABLES */
  computerResult: string;
  computerScore: number = 0;
  userResult: string;
  userScore: number = 0;
  result : string;
  winner: string;
  totalGames: number=0;
  pourcentageVictory: number;
  playerName: string

  /** SCORE LIST */
  tabPlayer: any[] = [];

  /** DISPLAY DIV */
  isConnexionShow: boolean = true;


  connexion(playerName)
  {
    /** GET PLAYER NAME */
    this.playerName = playerName;

    /** HIDDEN & SHOW DIV */
    this.isConnexionShow = false;
  }


  deconnexion()
  {
    /** FILLING THE SCORE LIST  */
    let name = this.playerName;
    let score = this.pourcentageVictory;

    let infosPlayer = {
      name:  name,
      score: score
    };

    this.tabPlayer.push(infosPlayer);

    /** RESET VARIABLES */
    this.userScore = 0;
    this.computerScore = 0;
    this.totalGames = 0;
    this.pourcentageVictory = 0;
    this.computerResult="";
    this.result="";

    /** HIDDEN & SHOW DIV */
    this.isConnexionShow = true;
  }


  play(action: string): void{
    this.totalGames = this.totalGames+1;
    this.userResult = action;
    this.computer();
    this.calculateWinner();
  }

  /** INCREMENT SCORES */
  endOfGame(result){
    
    if(result === " YOU WIN ")
    {
      this.userScore = this.userScore +1;
    } else if(result === " YOU LOSE "){
      this.computerScore = this.computerScore+1;
    }

    this.calculPourcentageVictory(this.userScore, this.totalGames);
  }
  
  calculPourcentageVictory(scorePlayer: number, totalGames: number)
  {
    this.pourcentageVictory = (scorePlayer/totalGames)*100;
  }

  /** GIVING RANDOM VALUE TO COMPUTER */
  computer(): void{
    const randoNumber = Math.floor(Math.random()*3);
    const options: string[] = ['rock', 'paper', 'scissors'];

    this.computerResult = options[randoNumber];
    console.log(options[randoNumber]);
  }

  calculateWinner(): void{
    if(this.userResult === this.computerResult)
    {
      this.result = ' DRAW '
    }

    if(this.userResult === 'rock' && this.computerResult === 'scissors')
    {
      this.result = ' YOU LOSE '
    }
    if(this.userResult === 'rock' && this.computerResult === 'paper')
    {
      this.result = ' YOU WIN '
    }

    if(this.userResult === 'scissors' && this.computerResult === 'rock')
    {
      this.result = ' YOU LOSE '
    }
    if(this.userResult === 'scissors' && this.computerResult === 'paper')
    {
      this.result = ' YOU WIN '
    }

    if(this.userResult === 'paper' && this.computerResult === 'scissors')
    {
      this.result = ' YOU LOSE '
    }
    if(this.userResult === 'paper' && this.computerResult === 'rock')
    {
      this.result = ' YOU WIN '
    }

    this.endOfGame(this.result)
  }


}
