/**
 * app路由
 *
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {environment} from '../environments/environment';

import {IndexPageComponent} from './IndexPage/index-page.component';
import {NotFoundComponent} from './BasicPage/not-found/not-found.component';
import {LoginComponent} from './BasicPage/login/login.component';
import {ControlPageComponent} from './ControlPage/controlpage.component';
import {RdppageComponent} from "./rdppage/rdppage.component";
import {TermpageComponent} from "./termpage/termpage.component";

const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // {path: 'welcome', component: IndexPageComponent}, // <-- delete this line
  {path: 'login', component: LoginComponent},
  {path: 'control', component: ControlPageComponent},
  {path: 'rdp/:token', component: RdppageComponent},
  {path: 'term/:token', component: TermpageComponent},
  {path: '', redirectTo: '/control', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: !environment.production} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}