import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnimeDetails } from '../anime-details.model';
import { AnimeSearch } from '../anime-search.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  movieList: AnimeSearch[] = [];

  constructor(private http: HttpClient) { }

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
        let movieArray : AnimeSearch[]= [];
        movieArray = responseData.results
        return movieArray
        // return responseData
    }))
  }

  animeDetails(mal_id: number): Observable<AnimeDetails>{
    return this.http
    .get<AnimeDetails>(`https://api.jikan.moe/v3/anime/${mal_id}/`)
    // .pipe(map(responseData => {
      
    // }))
  }
}
