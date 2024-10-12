import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaComponent } from './Components/tarea/tarea.component';

const routes: Routes = [

  {
    path:"tareas",
    component:TareaComponent,
    pathMatch:"full",
    
  },
  {
    path:"",
    component:TareaComponent,
    pathMatch:"full",
    
  },
  {
    path:"**",
    redirectTo:'tareas',
    pathMatch:"full",
          
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
