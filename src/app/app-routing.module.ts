import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PrizeComponent} from './pages/prize/prize.component';
import {LogsComponent} from './pages/logs/logs.component';
import {PlanComponent} from './pages/plan/plan.component';
import {RecordComponent} from './pages/record/record.component';
import {UserComponent} from './pages/user/user.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/prize'},
  {path: 'prize', pathMatch: 'full', component: PrizeComponent},
  {path: 'logs', pathMatch: 'full', component: LogsComponent},
  {path: 'plan', pathMatch: 'full', component: PlanComponent},
  {path: 'record', pathMatch: 'full', component: RecordComponent},
  {path: 'user', pathMatch: 'full', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
