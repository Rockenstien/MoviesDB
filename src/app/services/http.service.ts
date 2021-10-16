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

  animeSearch(searchQuery: string){
    return this.http
            .get<{ [key:string] : AnimeSearch[] }>(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${searchQuery}`, 
                  { 
                    headers: new HttpHeaders(
                      {
                        'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com', 
                        'x-rapidapi-key': 'bd912dd57amsh1759264dc6a48adp1342a7jsnb2d16f837494'
                      }
                    )
                  }
                )
            
            .pipe(map(responseData =>{
                let movieArray : AnimeSearch[]= [];
                movieArray = responseData.titles
                return movieArray
            }))

  }
}
