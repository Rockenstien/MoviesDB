import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  disableLogin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayChange(selector: string){
    if(selector == "login"){
      this.disableLogin = false;
    }
    else {
      this.disableLogin = true;
    }
  }

  onSubmitLogin(){
    
  }

}
