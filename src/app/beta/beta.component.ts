import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'Rxjs/BehaviorSubject';
import { DataService } from '../data.service';


@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  myScore: number;
  myFollowers:number;
  constructor(private _dataService:DataService) { }

  ngOnInit() {
    //subscribe to stuff
    this._dataService.score$.subscribe(val => 
      {this.myScore = val;}
    )

  }

  getScore(){

  }

}
