import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imove } from '../interfaces/imove';

@Injectable({
  providedIn: 'root',
})
export class Move {
  private readonly http = inject(HttpClient);

  getMoveApi(): Observable<any> {
    return this.http.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=48d62e7452a1f1a5e6018217ac27c50a&language=en-US'
    );
  }
}
