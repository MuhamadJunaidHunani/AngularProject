import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormData } from '../grand-parent/grand-parent.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  @Input() parentForm!: FormData;
  @Output() parentSubmit = new EventEmitter;
  parentsubmit(){
    this.parentSubmit.emit();
  }
  parentUpdate(){    
  }
}

