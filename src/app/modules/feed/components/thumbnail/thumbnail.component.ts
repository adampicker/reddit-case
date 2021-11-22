import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent implements OnInit {
  @Input()
  imgUrl!: string;

  url: string = '';

  readonly REDDIT_DEFAULT_THUMBNAIL: { [key: string]: string } = {
    self: '/assets/images/self_default2.png',
    default: '/assets/images/noimage.png',
    nsfw: '/assets/images/nsfw2.png',
  };
  constructor() {}

  ngOnInit(): void {
    this.url = this.REDDIT_DEFAULT_THUMBNAIL[this.imgUrl] ?? this.imgUrl;
  }
}
