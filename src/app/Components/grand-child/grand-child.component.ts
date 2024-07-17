import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormData } from '../grand-parent/grand-parent.component';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent {
  @Input() grandchildForm!: FormData;
  @Output() grandChilSubmit = new EventEmitter;
  grandchildsubmit(){
    this.grandChilSubmit.emit(this.grandchildForm);
  }
}
