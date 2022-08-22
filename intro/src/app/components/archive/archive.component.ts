import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
year = '';
month = ''


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   this.year = this.route.snapshot.paramMap.get('year') as string
   this.month = this.route.snapshot.paramMap.get('month') as string
  }
  goToArchiveList() {
    this.router.navigate([''])
  }

}
