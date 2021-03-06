import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AnimeSearch } from 'src/app/models/anime-search.model';
import { AnimeDetails } from 'src/app/models/anime-details.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss']
})
export class AnimeDetailsComponent implements OnInit {
  animeDetailsClass: AnimeSearch;
  animeDetails: AnimeDetails;

  disableAbout: boolean = false;


  constructor( private activatedRoute: ActivatedRoute, private httpservice: HttpService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.httpservice.animeDetails(params['mal-id'])
      .subscribe((responseData: AnimeDetails) => {
        this.animeDetails = responseData;
      });
    });
  }

  displayTab(selector: string){
    if(selector == "about"){
      this.disableAbout = false;
    }
    else {
      this.disableAbout = true;
    }
  }

}
