import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { EditPlanComponent } from './edit-plan/edit-plan.component';
import { PrepaidComponent } from './prepaid/prepaid.component';

const routes: Routes = [
  {path:'prepaid',component:PrepaidComponent},
  {path:'addPlan',component:AddPlanComponent},
  {path:'editPlan/:id',component:EditPlanComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
