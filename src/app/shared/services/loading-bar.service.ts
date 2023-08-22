import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingBarService {
  private static loadingBarSource = new BehaviorSubject<boolean>(false);

  constructor() {}

  static emmitLoading(value: boolean) {
    this.loadingBarSource.next(value);
  }

  static onLoading(): Observable<boolean> {
    return this.loadingBarSource.asObservable();
  }
}
