import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubService extends DataService {
  _url = 2;
  constructor(http: HttpClient) {
    super('https://api.github.com/users/odb23/followers', http);
  }
}
