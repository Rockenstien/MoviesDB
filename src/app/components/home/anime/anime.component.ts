import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnimeListService } from 'src/app/services/anime-list.service';
import { AnimeSearch } from 'src/app/anime-search.model';
import { AnimeDetailsService } from 'src/app/services/anime-details.service';
import { FilteringService } from 'src/app/services/filtering.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {  
  animeList: AnimeSearch[];
  filterSelect: string = "favorite";
  currentPage: number = 1;

  constructor(private animeDetailsService: AnimeDetailsService, private router: Router, private animeListService: AnimeListService, private filteringService: FilteringService, private httpService: HttpService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.filterChangeService();
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['anime-search']) {
        this.httpService
        .animeSearch(params['anime-search'])
        .subscribe((responseData)=>{
          this.animeList = responseData;
          // this.animeListService.setAnimeList(responseData);
        })
      }
      else {
        this.filteringService.filterLoad(this.filterSelect, this.currentPage)
        .subscribe((responseData) => {
          // this.setAnimeList.setAnimeList(responseData)
          this.animeList = responseData;
          console.log(responseData);
          // this.animeList = responseData;
          // console.log(responseData)
          // this.isLoading = false;
        })

        // this.filteringService.filterLoad(this.filterSelect, this.currentPage)
      }
    });
  }

  // setAnimeList(){
  //   this.animeList = this.animeListService.getAnimeList();
  // }

  setAnimeDetailToService(anime: AnimeSearch){
    this.animeDetailsService.setDetail(anime);
    this.router.navigate(['anime'])
  }

  filterChangeService(){
    this.filteringService.filterLoad(this.filterSelect, this.currentPage);
  }
  

  paginate(pageNumber: number){
    switch(pageNumber){
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:  {
        this.filteringService.filterLoad(this.filterSelect, this.currentPage);
        break;
      }
      case 0: {
        this.currentPage = ( this.currentPage == 6 ) ? 6 : ++this.currentPage;
        this.filteringService.filterLoad(this.filterSelect, this.currentPage);
        break;
      }
      case -1: {
        this.currentPage = ( this.currentPage == 0 ) ? 0 : --this.currentPage;
        this.filteringService.filterLoad(this.filterSelect, this.currentPage);
        break;
      }
    }
  }

}
