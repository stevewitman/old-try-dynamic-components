import { Component, OnInit, Input } from '@angular/core';
import { LayoutComponent } from '../layout';

@Component({
  selector: 'app-type-advertisement',
  templateUrl: './type-advertisement.component.html',
  styleUrls: ['./type-advertisement.component.scss']
})
export class TypeAdvertisementComponent implements OnInit, LayoutComponent {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
