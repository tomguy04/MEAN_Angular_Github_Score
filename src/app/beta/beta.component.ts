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
  // myNumOfRepos:number;
  count:number=0;
  myFollowerArray:Array<any>=[];
  myRepoArray:Array<any>=[];
  followerCount:number=0;
  repoCount:number =0;

  constructor(private _dataService:DataService) { }

  ngOnInit() {
    //subscribe to stuff
    this._dataService.score$.subscribe(val => 
      {this.myScore = val;}
    )
    
    // this._dataService.followers$.subscribe(val => 
    //   {this.myFollowerArray = val;}
    // )

    this._dataService.followersArray$.subscribe(val => 
      {this.myFollowerArray = val;
      this.followerCount=this.myFollowerArray.length
      console.log(this.followerCount);}
    )


    this._dataService.reposArray$.subscribe(val => 
      {this.repoCount = this.myRepoArray.length;
      console.log(this.repoCount);}
    )



  }

  getScore(){

  }

}
