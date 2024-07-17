import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';
import { GrandChildComponent } from '../grand-child/grand-child.component';

export interface FormData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-grand-parent',
  standalone: true,
  imports: [FormsModule, ParentComponent, ChildComponent, GrandChildComponent],
  templateUrl: './grand-parent.component.html',
  styleUrls: ['./grand-parent.component.css'],
})
export class GrandParentComponent {
  grandParentForm: FormData = { email: '', password: '' };
  parentForm: FormData = { email: '',password: '' };
  childForm: FormData = { email: '', password: '' };
  grandChildForm: FormData = { email: '', password: '' };
  grandParentformsubmit(value: string, key: 'password' | 'email'): void {
    this.grandParentForm[key] = value;
    console.log(this.grandParentForm);
  }
  Parentformsubmit(value: string, key: 'password' | 'email'):void {
    this.parentForm[key] = value;
    console.log(this.parentForm);
  }
  childformsubmit(value: string, key: 'password' | 'email'):void {
    this.childForm[key] = value;
    console.log(this.childForm);
  }
  grandchildformsubmit(value: string, key: 'password' | 'email'):void {
    this.grandChildForm[key] = value; 
    console.log(this.grandChildForm);
  }
}