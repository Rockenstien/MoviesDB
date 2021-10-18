import { Injectable } from "@angular/core";
import { AnimeSearch } from "../anime-search.model";

@Injectable({
    providedIn: 'root'
})
export class AnimeDetailsService {
    animeDetail: AnimeSearch;

    setDetail(animeDetail: AnimeSearch){
        this.animeDetail = animeDetail
    }

    getDetail(): AnimeSearch{
        return this.animeDetail;
    }
}