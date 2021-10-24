import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeSearch } from '../models/anime-search.model';
import { AnimeListService } from './anime-list.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FilteringService {

  constructor(private httpService: HttpService, private animeListService: AnimeListService) { }

  filterLoad(filterSelect: string, pageNumber: number): Observable<AnimeSearch[]>{
    // console.log(filter.value);
    return this.httpService
    .animeonLoad(filterSelect, pageNumber)
  }
}
