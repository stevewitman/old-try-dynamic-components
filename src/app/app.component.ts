import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { LayoutProvider } from './providers/layout';
import { LayoutComponent } from './layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('layoutContainer', { read: ViewContainerRef }) container;

  constructor(
    private layoutProvider: LayoutProvider,
    private resolver: ComponentFactoryResolver
  ) {}

  // @ViewChild() queries aren't available in ngOnInit() yet. Only when ngAfterViewInit() is called:
  ngAfterViewInit() {
    const items = this.layoutProvider.getLayoutItems();

    for (const item of items) {
      const factory = this.resolver.resolveComponentFactory(item.component);
      const componentRef = this.container.createComponent(factory);
      (<LayoutComponent>componentRef.instance).data = item.data;
    }
  }
}
