import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AnimeSearch } from '../anime-search.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  movieList: AnimeSearch[] = [];

  constructor(private http: HttpClient) { }

  animeonLoad(filter: string){
    return this.http
                .get<{ [key: string]: AnimeSearch[] }>(
                  `https://api.jikan.moe/v3/top/anime/1/${filter}`
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
                    // headers: new HttpHeaders(
                    //   {
                    //     'x-rapidapi-host': 'jikan1.p.rapidapi.com',
                    //     'x-rapidapi-key': 'bd912dd57amsh1759264dc6a48adp1342a7jsnb2d16f837494',
                        
                    //   },
                    // ),
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
}
