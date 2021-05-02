import { CatFacts } from './CatFacts';

export interface ApiResponse {
  count?: number;
  entries: CatFacts[];
}
