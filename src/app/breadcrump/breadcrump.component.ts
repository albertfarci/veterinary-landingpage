import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrump.component.html',
  styleUrls: ['./breadcrump.component.html']
})
export class BreadcrumbComponent {
  @Input() items: { label: string, link?: string }[] = [];
}
