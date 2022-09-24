import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './observable/all/all.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { DtDuChangedComponent } from './observable/dt-du-changed/dt-du-changed.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromeventComponent } from './observable/fromevent/fromevent.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { MapComponent } from './observable/map/map.component';
import { ObservableComponent } from './observable/observable.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { RetryComponent } from './observable/retry/retry.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { TabComponent } from './observable/tab/tab.component';
import { TakeComponent } from './observable/take/take.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';

const routes: Routes = [
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      {
        // path: 'list',
        path: '',
        component: AllComponent,
      },
      {
        path: 'form-event',
        component: FromeventComponent,
      },
      {
        path: 'interval',
        component: IntervalComponent,
      },
      {
        path: 'to-array',
        component: ToArrayComponent,
      },
      {
        path: 'cust-obs',
        component: CustomObservableComponent,
      },
      {
        path: 'map',
        component: MapComponent,
      },
      {
        path: 'pluck',
        component: PluckComponent,
      },
      {
        path: 'filter',
        component: FilterComponent,
      },
      {
        path: 'tap',
        component: TabComponent,
      },
      {
        path: 'take',
        component: TakeComponent,
      },
      {
        path: 'retry',
        component: RetryComponent,
      },
      {
        path: 'dt',
        component: DtDuChangedComponent,
      },
      {
        path: 'subject',
        component: SubjectComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'observable',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
