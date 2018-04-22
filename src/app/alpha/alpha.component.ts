import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from './user';
import { DataService } from '../data.service';


@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  user: User = new User ();
  myScore:number;

  constructor(private _dataService:DataService) { }

  ngOnInit() {
    this._dataService.score$.subscribe(val=>{this.myScore = val;}
    )
  }
  

  onSubmit(event: Event, form : NgForm){
    event.preventDefault();
    const {value, valid} = form;
    console.log('submitting form', this.user, form);

    this._dataService.retrieveUser(this.user);

    this.user = new User();
    form.reset();
  }

}
