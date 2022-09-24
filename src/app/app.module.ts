import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { HeaderComponent } from './includes/header/header.component';
import { AllComponent } from './observable/all/all.component';
import { FromeventComponent } from './observable/fromevent/fromevent.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TabComponent } from './observable/tab/tab.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DtDuChangedComponent } from './observable/dt-du-changed/dt-du-changed.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { Comp1Component } from './comp/comp1/comp1.component';
import { Comp2Component } from './comp/comp2/comp2.component';
import { Comp3Component } from './comp/comp3/comp3.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    HeaderComponent,
    AllComponent,
    FromeventComponent,
    IntervalComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TabComponent,
    TakeComponent,
    RetryComponent,
    DtDuChangedComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
