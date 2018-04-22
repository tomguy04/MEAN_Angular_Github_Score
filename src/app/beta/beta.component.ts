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
  count:number=0;
  myFollowerArray:Array<any>=[];
  myRepoArray:Array<any>=[];
  followerCount:number=0;
  repoCount:number =0;
  user:any[];
  score:number;

  constructor(private _dataService:DataService) { }

  ngOnInit() {
    //subscribe to stuff
    this._dataService.user$.subscribe(val => 
      {this.user = val;
        console.log(`this.user array length ${this.user.length}`);
        this.score = val['public_repos'] + val['followers']
        if (this.score){
          if(this.score > 127 ){
            console.log (`wow!`);
          }
          else if (this.score > 20 && this.score <= 127){
            console.log (`not bad`);
          }
          else (
            console.log (`sucks!`)
          )
       }
      console.log(`repos: ${val['public_repos']} followers: ${val['followers']}`)
      }
    )
    

    // this._dataService.score$.subscribe(val => 
    //   {this.myScore = val;}
    // )
    
    // this._dataService.followersArray$.subscribe(val => 
    //   {this.myFollowerArray = val;
    //   this.followerCount=this.myFollowerArray.length
    //   console.log(this.followerCount);}
    // )


    // this._dataService.reposArray$.subscribe(val => 
    //   {this.repoCount = this.myRepoArray.length;
    //   console.log(this.repoCount);}
    // )



  }

  getScore(){

  }

}
