import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sinh Viên';
  students = {
    name: 'Hoang Dat',
    age: 20,
    address: 'Long bien',
    numberphone: '0123456789'
    
  }


}
