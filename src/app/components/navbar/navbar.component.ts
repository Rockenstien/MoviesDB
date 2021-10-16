import { Component, OnInit } from '@angular/core';
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

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }

  onSearch(formData: NgForm){
    if(formData.value.movieSearch != ""){
      this.routes.navigate(['search', formData.value.movieSearch]);
    }
  }

}
