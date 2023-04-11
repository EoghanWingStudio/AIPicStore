import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  linkedinClick() {
    window.open('https://www.linkedin.com/in/eoghan-bradshaw/', '_blank');
  }

  githubClick() {
    window.open('http://github.com/bradshaw10', '_blank');
  }
}
