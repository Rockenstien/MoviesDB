import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  hamburgerActive: boolean = false;
  isLoggedin: boolean = false;
  user: UserModel;
  @ViewChild('dropdown') dropdown: ElementRef;

  constructor(private routes: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe( responseData => {
      this.isLoggedin = responseData;
      if(responseData){
        let authData = localStorage.getItem('auth') ?? "";
        this.user = JSON.parse(authData);
      }
    })
    if(!!localStorage.getItem('auth')){
      this.isLoggedin = true;
      let authData = localStorage.getItem('auth') ?? "";
      this.user = JSON.parse(authData);
    }
    
  }

  onSearch(formData: NgForm){
    if(formData.value.animeSearch != ""){
      this.routes.navigate(['/anime', formData.value.animeSearch]);
    }
  }

  onSearchM(formData: NgForm){
    if(formData.value.animeSearch != ""){
      this.routes.navigate(['/anime', formData.value.animeSearch]);
      this.dropdownRemove();
    }
  }


  getActive(){
    if(this.hamburgerActive){
      return 'is-active';
    } 
    else{
      return '';
    }
  }

  toggleHam(){
    this.hamburgerActive = !this.hamburgerActive;
  }

  logout(){
    this.authService.logOut();
    this.navtoAuth();
  }

  navtoAuth(){
    this.routes.navigate(['/auth']);
  }
  navtoAuthM(){
    this.dropdownRemove();
    this.routes.navigate(['/auth']);
  }

  dropdownRemove() {  //removing dropdown of hamburger if any event is done
    this.dropdown.nativeElement.classList.remove('is-active');
    this.toggleHam();
  }

}
