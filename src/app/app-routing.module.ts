import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LogsComponent} from './pages/logs/logs.component';
import {RecordComponent} from './pages/record/record.component';
import {UserComponent} from './pages/user/user.component';
import {ConfigComponent} from "./pages/config/config.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/prize'},
  {path: 'config', pathMatch: 'full', component: ConfigComponent},
  {path: 'logs', pathMatch: 'full', component: LogsComponent},
  {path: 'record', pathMatch: 'full', component: RecordComponent},
  {path: 'user', pathMatch: 'full', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
