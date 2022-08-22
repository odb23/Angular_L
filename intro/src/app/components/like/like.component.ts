import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  @Input() likesCount: number = 0;
  @Input() isLiked: boolean = false;
  @Output() click = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(e: Event) {
    e.stopPropagation()
    this.likesCount += !this.isLiked ? 1 : -1;
    this.isLiked = !this.isLiked;
    this.click.emit({
      likesCount: this.likesCount,
      isLiked: this.isLiked,
    });
  }
}
