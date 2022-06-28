import { Component, Input, OnInit } from '@angular/core';
import { RouteLink } from 'src/app/share/models/route-link.model';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class FABComponent implements OnInit {
  @Input() link: RouteLink;
  constructor() {
    console.log(this.link)
  }

  ngOnInit(): void {}
}
