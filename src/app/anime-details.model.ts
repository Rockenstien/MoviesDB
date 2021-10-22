export interface AnimeDetails {
    url: string;
    image_url: string;
    trailer_url : any;
    title: string;
    title_english: string;
    title_japanese: string;
    type: string;
    episodes: number | {};
    airing: false;
    aired: {
        string: string;
        prop:{
            from:{
                day: number;
                month: number;
                year: number
            };
            to:{
                day: number;
                month: number;
                year: number
            };
        }
    };   
    genres: {
        name: string;
    }[];
    genresString: string;
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    favorites: number;
    synopsis: string;
        
}