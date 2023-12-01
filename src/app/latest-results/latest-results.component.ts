import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FetchDataServiceService } from '../fetch-data-service.service';
interface MyObject {
  name: string;
  description: string;
}



@Component({
  selector: 'app-latest-results',
  templateUrl: './latest-results.component.html',
  styleUrls: ['./latest-results.component.css'],
})
export class LatestResultsComponent {
  latestResults: any[] = [];
  dataSource = new MatTableDataSource<MyObject>(this.latestResults);
  displayedColumns: string[] = ['Latest results', 'More', 'arrow'];
  getProgressBarWidth(description: string): string {
    return description;
  }
  constructor(private getdata: FetchDataServiceService) {}

  ngOnInit() {
    this.getdata.getdata().subscribe((res: any) => {
      console.log(res);
      console.log(res.dashboardData.lastestResults);
      this.latestResults = res.dashboardData.lastestResults;
      this.dataSource.data = this.latestResults;
    });
  }
  // myArray: MyObject[] = [
  //   { name: 'Unit 1 Technology ', description: '25%' },
  //   { name: 'Unit 12 Technology', description: '30%' },
  //   { name: 'Unit 1 Technology', description: '70%' },
  //   { name: 'Unit 1 Technology', description: '10%' },
  //   { name: 'Unit 1 Technology', description: '20%' },

  //  
  // ];
  // dataSource = new MatTableDataSource<MyObject>(this.myArray);
  // displayedColumns: string[] = ['Latest results', 'More', 'arrow'];
}
