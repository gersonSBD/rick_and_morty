import { IPagination } from './pagination.interface';

export interface IResponse {
  info: IPagination;
  results: any[];
}
