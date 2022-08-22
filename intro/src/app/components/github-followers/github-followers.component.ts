import { ActivatedRoute } from '@angular/router';
import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, switchMap, map } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  followers: any[] = [];

  constructor(
    private githubService: GithubService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const paramsMap = this.route.paramMap;
    const queryParamsMap = this.route.queryParamMap;

    const _obs = combineLatest([paramsMap, queryParamsMap]).subscribe({
      next: ([params, queryParams]) => {
        console.log('Params', params);
        console.log('QueryParams', queryParams);
        this.getFollowers();
      },
      error: () => {},
      complete: () => {},
    });
  }

  getFollowers() {
    return this.githubService.getData().subscribe({
      next: (response) => {
        this.followers = response as Array<Object>;
      },
      error: () => {},
      complete: () => {},
    });
  }
}
