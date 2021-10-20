export interface AnimeDetails {
    url: string;
    image_url: string;
    trailer ?: string;
    title_english: string;
    title_japanese: string;
    type: string;
    episodes: number | {};
    airing: false;
    aired: {
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
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    favorites: number;
    synopsis: string;
        
}