import { Component, OnInit, Input } from '@angular/core';
import { LayoutComponent } from '../layout';

@Component({
  selector: 'app-type-news',
  templateUrl: './type-news.component.html',
  styleUrls: ['./type-news.component.scss']
})
export class TypeNewsComponent implements OnInit, LayoutComponent {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
