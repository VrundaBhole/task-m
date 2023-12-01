import { Component } from '@angular/core';
interface MyObject {
  name: string;
  value: string;
  description: string;
  color:string
}
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css'],
})
export class AllCoursesComponent {
  arrayOfObjects: MyObject[] = [
    {
      name: 'B2',
      value: 'Business English',
      description: 'Grammar',
      color: '#4B49AC',
    },
    {
      name: 'C1',
      value: 'Common English',
      description: 'Pharsal Grammar',
      color: '#7DA0FA',
    },
    {
      name: 'B2',
      value: 'Business Spanish',
      description: 'Grammar',
      color: '#F3797E',
    },

    // Add more objects as needed
  ];
}
