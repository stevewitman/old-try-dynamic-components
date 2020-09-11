import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type-news',
  templateUrl: './type-news.component.html',
  styleUrls: ['./type-news.component.scss']
})
export class TypeNewsComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
