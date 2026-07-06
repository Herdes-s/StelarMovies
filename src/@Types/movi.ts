export interface Show {
    id: number;
    name: string;
    language: string;
    genres: string[];
    status: string;
    rating: { average: number | null};
    image: { medium: string; original: string} | null;
    summary: string;
    premiered: string;
}

export interface SearchResult {
    score: number;
    show: Show;
}