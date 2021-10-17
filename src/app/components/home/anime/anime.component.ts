import { Component, Input, OnInit } from '@angular/core';
import { AnimeSearch } from 'src/app/anime-search.model';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {
  @Input('anime') anime: AnimeSearch; 
  constructor() { }

  ngOnInit(): void {
  }

}
