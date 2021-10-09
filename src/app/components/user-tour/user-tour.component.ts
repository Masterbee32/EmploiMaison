import { Component, OnInit } from '@angular/core';
import {data} from "../../data/data"
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-tour',
  templateUrl: './user-tour.component.html',
  styleUrls: ['./user-tour.component.scss']
})

export class UserTourComponent implements OnInit {
  public donnees: any;
  public currentDate:any;
  public nettoyage: String | undefined; 
  public cuisine: String | undefined
  constructor(private _userService: UserService) { 
   // this.donnees= new User("","","")
   }

  ngOnInit(): void {
    this.donnees= this.getData()
    this.emploiMaison()
  }

  public getData(){
    return this._userService.getUsersData()
  }

  public emploiMaison(){
    this.currentDate= new Date().getUTCDate()
    if(this.currentDate>=1 && this.currentDate<=7){
       this.nettoyage= "Mamadou Alpha Diallo";
       this.cuisine="Moussa Bemba"
       
    }
    else if(this.currentDate>=8 && this.currentDate<=14){
      this.nettoyage= "Moussa Cissé ou Mamma";
      this.cuisine="Bah Elhadj Mamadou";
      
   }
   else if(this.currentDate>=15 && this.currentDate<=21){
    this.nettoyage= "Bah Elhadj Mamadou";
    this.cuisine="Moussa Cissé"; 
 }
 else if(this.currentDate>=22 && this.currentDate<=31){
  this.nettoyage= "Moussa Bemba";
  this.cuisine="Alpha Diallo";
  
}

  }
}
