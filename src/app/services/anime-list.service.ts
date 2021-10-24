import { Injectable } from '@angular/core';
import { AnimeSearch } from '../models/anime-search.model';

@Injectable({
  providedIn: 'root'
})
export class AnimeListService {
  animeList: AnimeSearch[];
  constructor() { }

  setAnimeList(animeList: AnimeSearch[]){
    this.animeList = animeList;
  }
  getAnimeList(){
    return this.animeList;
  }
}
