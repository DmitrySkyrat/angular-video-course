import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { ICourse } from '../models/course-item.model';

@Directive({ selector: '[appCreationDate]' })
export class CreationDateDirective implements OnInit {
  @Input() public appCreationDate: ICourse;
  constructor(private el: ElementRef, private render: Renderer2) {}
  public ngOnInit(): void {
    const currentDate: number = +new Date();
    const creationDate: number = +new Date(this.appCreationDate.creationDate);
    const fourteenDaysDuration: number = 14 * 24 * 3600 * 1000;
    if (
      currentDate - creationDate < fourteenDaysDuration &&
      creationDate - currentDate <= fourteenDaysDuration
    ) {
      this.render.setStyle(this.el.nativeElement, 'borderColor', 'green');
    }
    if (creationDate - currentDate > fourteenDaysDuration) {
      this.render.setStyle(this.el.nativeElement, 'borderColor', 'blue');
    }
  }
}
