import { Component, OnInit } from '@angular/core';
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

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit(): void {
    // console.log(1);
    this.isLoading = true;
    // if(typeof this.activatedRoute.snapshot.params['movie-search'] !== undefined){
    //   this.httpService
    //   .movieSearch(this.activatedRoute.snapshot.params['movie-search'])
    //   .subscribe((responseData)=>{
    //     this.movieList = responseData;
    //     console.log(this.movieList)
    //     this.isLoading = false;
    //   })
    // }

    this.activatedRoute.params.subscribe((params: Params) => {
      // console.log(params)
      if (params['movie-search']) {
        this.httpService
          .animeSearch(params['movie-search'])
          .subscribe((responseData)=>{
            this.animeList = responseData;
            console.log(this.animeList)
            this.isLoading = false;
          })
      } 
      else{
        this.httpService
          .animeSearch("Avengers")
          .subscribe((responseData)=>{
            this.animeList = responseData;
            console.log(this.animeList)
            this.isLoading = false;
          })
      }
    });
  }

}
