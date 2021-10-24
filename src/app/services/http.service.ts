import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AnimeDetails } from '../models/anime-details.model';
import { AnimeSearch } from '../models/anime-search.model';
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
    .pipe(catchError(this.handleError),map(responseData => {
      let movieArray : AnimeSearch[]= [];
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
    .pipe(catchError(this.handleError),
      map(responseData =>{
        let animeArray : AnimeSearch[]= [];
        animeArray = responseData.results
        for(var animes of animeArray){
          if(animes.start_date != null){
            let newDate = animes.start_date.split("T")[0];
            animes.start_date = newDate.split("-")[0];
          }
        }
        return animeArray
    }))
  }

  animeDetails(mal_id: number): Observable<AnimeDetails>{
    return this.http
    .get<AnimeDetails>(`https://api.jikan.moe/v3/anime/${mal_id}`)
    .pipe(catchError(this.handleError),map(responseData => {
      let genresString: string = "";

      for (let i=0; i < responseData.genres.length; i++){
        genresString +=', '+ responseData.genres[i].name; // Genres was in array of string
      }
      if(responseData.trailer_url != null)
        responseData['trailer_url'] = this.sanitizer.bypassSecurityTrustResourceUrl(responseData?.trailer_url);
        // Above statement is Needed For unsafe url error by angular
      return { ...responseData , genresString}
    }))
  }

  handleError(errores: HttpErrorResponse){
    let errorMessage = errores.error.error.message;
    alert(errores.error.error.error.message);
    return throwError(errorMessage);
  }
}
