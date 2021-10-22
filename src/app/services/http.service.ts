import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnimeDetails } from '../anime-details.model';
import { AnimeSearch } from '../anime-search.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  movieList: AnimeSearch[] = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  animeonLoad(filter: string, pageNumber: number){
    return this.http
    .get<{ [key: string]: AnimeSearch[] }>(
      `https://api.jikan.moe/v3/top/anime/${pageNumber}/${filter}`
    )
    .pipe(map(responseData => {
      let movieArray : AnimeSearch[]= [];
      console.log(responseData)
      movieArray = responseData.top
      return movieArray
    }))
  }

  animeSearch(searchQuery: string){
    return this.http
    .get<{ [key:string] : AnimeSearch[] }>('https://api.jikan.moe/v3/search/anime', 
      {
        params: new HttpParams().set('q', searchQuery).set('page', 1) 
      }
    )
    .pipe(map(responseData =>{
        let animeArray : AnimeSearch[]= [];
        animeArray = responseData.results
        for(var animes of animeArray){
          if(animes.start_date != null){
            let newDate = animes.start_date.split("T")[0];
            animes.start_date = newDate.split("-")[0];
          }
        }
        return animeArray
        // return responseData
    }))
  }

  animeDetails(mal_id: number): Observable<AnimeDetails>{
    return this.http
    .get<AnimeDetails>(`https://api.jikan.moe/v3/anime/${mal_id}`)
    .pipe(map(responseData => {
      let genresString: string = "";

      for (let i=0; i < responseData.genres.length; i++){
        genresString +=', '+ responseData.genres[i].name; 
      }
      responseData['trailer_url'] = this.sanitizer.bypassSecurityTrustResourceUrl(responseData?.trailer_url);

      return { ...responseData , genresString}
    }))
  }
}
