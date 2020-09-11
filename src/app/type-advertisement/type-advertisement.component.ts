import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type-advertisement',
  templateUrl: './type-advertisement.component.html',
  styleUrls: ['./type-advertisement.component.scss']
})
export class TypeAdvertisementComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
