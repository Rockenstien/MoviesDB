import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AnimeSearch } from 'src/app/anime-search.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  animeList: AnimeSearch[] = []
  isLoading: boolean = false;
  filterSelect: string = "favorite";

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) { }


  ngOnInit(): void {
    // console.log(1);
    this.isLoading = true;

    this.activatedRoute.params.subscribe((params: Params) => {
      // console.log(params)
      if (params['anime-search']) {
        this.httpService
        .animeSearch(params['anime-search'])
        .subscribe((responseData)=>{
          this.animeList = responseData;
          console.log(responseData)
          this.isLoading = false;
        })
      }
      else {
        this.filterLoad()
      }
    });
  }

  filterLoad(){
    // console.log(filter.value);
    this.httpService
    .animeonLoad(this.filterSelect)
    .subscribe((responseData) => {
      this.animeList = responseData;
      console.log(responseData)
      this.isLoading = false;
    })
  }

}
