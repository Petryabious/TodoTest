import {
  Directive,
  ElementRef,
  inject,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ModalBaseDirective } from '../modal-base/modal-base.directive';

@Directive({
  selector: '[appDialog]',
  standalone: true,
})
export class DialogDirective extends ModalBaseDirective implements OnChanges {
  private el = inject(ElementRef<HTMLDialogElement>);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      // Добавляем проверку на инициализацию
      if (!this.el?.nativeElement) return;

      if (this.isOpen) {
        this.el.nativeElement.showModal();
      } else {
        this.el.nativeElement.close();
      }
    }
  }
}
