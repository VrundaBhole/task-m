import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassesComponent } from './classes/classes.component';
import { Side2Component } from './side2/side2.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingComponent } from './setting/setting.component';
import { ChatComponent } from './chat/chat.component';
import { ResourcesComponent } from './resources/resources.component';
import { MatTableModule } from '@angular/material/table';
import { LatestResultsComponent } from './latest-results/latest-results.component';
import { TimeSpentGraphComponent } from './time-spent-graph/time-spent-graph.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';





@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
    ClassesComponent,
    Side2Component,
    SettingComponent,
    ChatComponent,
    ResourcesComponent,
    LatestResultsComponent,
    TimeSpentGraphComponent,
    AllCoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
