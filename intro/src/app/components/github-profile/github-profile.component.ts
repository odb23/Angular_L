import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  submit () {
    this.router.navigate(['/followers', {
      quertyParams: {page: 1, order: 'newest'}
    }])
  }
}
