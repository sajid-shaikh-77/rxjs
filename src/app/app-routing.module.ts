import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './observable/all/all.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { DtDuChangedComponent } from './observable/dt-du-changed/dt-du-changed.component';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromeventComponent } from './observable/fromevent/fromevent.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { MapComponent } from './observable/map/map.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { MergeComponent } from './observable/merge/merge.component';
import { ObservableComponent } from './observable/observable.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { RetryComponent } from './observable/retry/retry.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
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
      {
        path: 'replay-subject',
        component: ReplaySubjectComponent,
      },
      {
        path: 'async-subject',
        component: AsyncSubjectComponent,
      },
      {
        path: 'concat',
        component: ConcatComponent,
      },
      {
        path: 'merge',
        component: MergeComponent,
      },
      {
        path: 'concat-map',
        component: ConcatMapComponent,
      },
      {
        path: 'merge-map',
        component: MergeMapComponent,
      },
      {
        path: 'switch-map',
        component: SwitchMapComponent,
      },
      {
        path: 'exhaust-map',
        component: ExhaustMapComponent,
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
