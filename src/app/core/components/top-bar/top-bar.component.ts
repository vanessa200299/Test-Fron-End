import { Component, OnInit } from '@angular/core';
import { Constans } from 'src/app/share/lib/constants';
import { RouteLink } from 'src/app/share/models/route-link.model';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  public links: RouteLink[];
  constructor() {
    this.links = Constans.TOP_BAR_LINKS;
  }

  ngOnInit(): void {}
}
