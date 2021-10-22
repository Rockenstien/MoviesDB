import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  hamburgerActive: boolean = false;

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }

  onSearch(formData: NgForm){
    if(formData.value.animeSearch != ""){
      this.routes.navigate(['anime', formData.value.animeSearch]);
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

}
