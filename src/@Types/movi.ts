export interface Show {
  id: number;
  name: string;
  language: string;
  genres: string[];
  status: string;
  rating: { average: number | null };
  image: { medium: string; original: string } | null;
  summary: string;
  premiered: string;
}

export interface SearchResult {
  score: number;
  show: Show;
}

export interface Episodes {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: Date;
  airtime: Date;
  airstamp: Date;
  runtime: number;
  rating: { average: null };
  image: {medium: string, original: string};
  summary: undefined;
  links: { self: { href: string; show: { href: string; name: string } } };
}
