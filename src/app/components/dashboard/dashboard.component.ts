import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/services/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService) {}

  displayName : string;
  ngOnInit(): void {

  }


  udpateUser(){
    
    let ud = this.authService.userData;

    const userData: User = {
      uid: ud.uid,
      email: ud.email,
      displayName: this.displayName,
      photoURL: 'https://picsum.photos/200',
      emailVerified: ud.emailVerified,
    };
    
    this.authService.UpdateProfile(userData).then((data)=>{
      console.log("User Updated", data);  
      this.displayName = ''
    }).catch((error)=>{
      console.log("Error", error);
    }
  )}
  

  ngAfterViewInit(){
   
  }




}
