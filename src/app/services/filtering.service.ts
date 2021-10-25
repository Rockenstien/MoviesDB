import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeSearch } from '../models/anime-search.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FilteringService {

  constructor(private httpService: HttpService) { }

  filterLoad(filterSelect: string, pageNumber: number): Observable<AnimeSearch[]>{
    return this.httpService
    .animeonLoad(filterSelect, pageNumber)
  }
}
