import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers = () => {
    const url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json';
    return this.http.get(url).pipe(
      map(response => response)
    )
  }

}
