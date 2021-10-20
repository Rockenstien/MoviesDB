import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnimeListService } from 'src/app/services/anime-list.service';
import { AnimeSearch } from 'src/app/anime-search.model';
import { HttpService } from 'src/app/services/http.service';
import { FilteringService } from 'src/app/services/filtering.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  animeList: AnimeSearch[] = []
  isLoading: boolean = false;

  constructor(private router: Router, private httpService: HttpService, private animeListService: AnimeListService, private filtering: FilteringService) { }


  ngOnInit(): void {
    // console.log(1);
    // this.isLoading = true;
    // this.router.navigate(['anime']);

  }
}
