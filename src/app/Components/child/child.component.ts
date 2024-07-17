import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormData } from '../grand-parent/grand-parent.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childForm!: FormData;
  @Output() childSubmit = new EventEmitter;
  childsubmit(){
    this.childSubmit.emit();
  }
}
