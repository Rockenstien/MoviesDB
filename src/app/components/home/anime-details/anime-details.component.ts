import { Component, OnInit } from '@angular/core';
import { AnimeSearch } from 'src/app/anime-search.model';
import { AnimeDetailsService } from 'src/app/services/anime-details.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss']
})
export class AnimeDetailsComponent implements OnInit {
  animeDetailsClass: AnimeSearch;
  constructor(private animeDetails: AnimeDetailsService) { }

  ngOnInit(): void {
    this.animeDetailsClass = this.animeDetails.getDetail();
    console.log(this.animeDetails.getDetail())
  }

}
