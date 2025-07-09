import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[appModalBase]',
  standalone: true,
})
export class ModalBaseDirective {
  @Input() isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  public closeDialog(): void {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }
}
