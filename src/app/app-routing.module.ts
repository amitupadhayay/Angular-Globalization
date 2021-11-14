import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompFourComponent } from './pages/comp-four/comp-four.component';
import { CompOneComponent } from './pages/comp-one/comp-one.component';
import { CompThreeComponent } from './pages/comp-three/comp-three.component';
import { CompTwoComponent } from './pages/comp-two/comp-two.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';

const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: () => import('src/app/authetication/login.module').then(mod => mod.LoginModule),
  //   //canActivate: [AuthGuardService],
  // },
  {
    path: '',
    component: CompOneComponent,
  },
  {
    path: 'comp-one',
    component: CompOneComponent,
  },
  {
    path: 'comp-two',
    component: CompTwoComponent,
  },
  {
    path: 'comp-three',
    component: CompThreeComponent,
  },
  {
    path: 'comp-four',
    component: CompFourComponent,
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
