import { Component } from '@angular/core';
import { FetchDataServiceService } from '../fetch-data-service.service';

@Component({
  selector: 'app-side2',
  templateUrl: './side2.component.html',
  styleUrls: ['./side2.component.css'],
})
export class Side2Component {
  constructor(private getdata: FetchDataServiceService) {}
  latestResults: any[] = [];
  coursesname: any[] = [];
  curseValues: any[] = [];
  curseValuesInNumbers: number[] = [];
  // course: any[] = [];
  course: { [key: string]: string } = {};
  userData: any[] = [];
  name: string = '';
  eamil: string = '';
  remindersData: any[] = [];

  ngOnInit() {
    this.getdata.getdata().subscribe((res: any) => {
      this.name = res.dashboardData.userData[1].fullName;
      this.eamil = res.dashboardData.userData[1].email;
      console.log(res.dashboardData.userData[1].reminders);
      this.remindersData=res.dashboardData.userData[1].reminders;
      console.log(this.userData);
      console.log(res.dashboardData.userData);
      this.latestResults = res.dashboardData.userData;
      console.log(this.latestResults[0]);
      const courseKeys = Object.keys(this.latestResults[0].courses);
      console.log(courseKeys);
      this.coursesname = courseKeys;

      const courseValues = Object.values(this.latestResults[0].courses);
      // this.curseValues=courseValues;

      console.log(this.latestResults[0].courses);
      this.course = this.latestResults[0].courses;
      this.curseValues = Object.values(this.latestResults[0].courses).map(
        (value: any) => value.toString()
      );
      console.log(this.curseValues);
      this.curseValuesInNumbers = this.curseValues.map((value) =>
        parseFloat(value)
      );
      console.log(this.curseValuesInNumbers);
    });
  }
}
