import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [

  {
    path: 'operations-history',
    loadChildren: () =>
    import('./features/operations-history/operations-history.module').then(
      (m) => m.OperationsHistoryModule
    ),
     canActivate: [],
  },
  { path: '', redirectTo: 'operations-history', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
