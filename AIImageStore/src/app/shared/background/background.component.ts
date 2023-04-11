import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { interval } from 'rxjs';
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(200),
      ]),
      transition('* => void', [
        animate(200, style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class BackgroundComponent implements OnInit {
  constructor() {}

  index: number = 0;
  numImages: number = 4;
  imagesLoaded: number = 0;
  loading: boolean = true;
  imagesUrl = [
    'https://picsum.photos/id/402/2500/1667',
    'https://picsum.photos/id/301/2500/1667',
    'https://picsum.photos/id/302/2500/1667',
    'https://picsum.photos/id/400/2500/1667',
  ];

  ngOnInit() {
    this.imagesUrl.forEach((x, index) => {
      const image = new Image();
      image.onload = () => {
        this.imagesLoaded++;
        this.loading = this.imagesLoaded != this.numImages;
      };
      image.src = x;
    });
    interval(5000).subscribe(() => {
      if (!this.loading) this.index = (this.index + 1) % this.numImages;
    });
  }
}
