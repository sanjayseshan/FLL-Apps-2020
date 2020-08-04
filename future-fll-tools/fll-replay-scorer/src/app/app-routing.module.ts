import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'scorer/Scorer',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'scorer/:id',
    loadChildren: () => import('./scorer/scorer.module').then( m => m.ScorerPageModule)
  },
  {
    path: 'strategy-planner/:id',
    loadChildren: () => import('./strategy-planner/strategy-planner.module').then( m => m.StrategyPlannerPageModule)
  },
  {
    path: 'project/:id',
    loadChildren: () => import('./project/project.module').then( m => m.ProjectPageModule)
  },
  {
    path: 'robotdesign/:id',
    loadChildren: () => import('./robotdesign/robotdesign.module').then( m => m.RobotdesignPageModule)
  },
  {
    path: 'corevalues/:id',
    loadChildren: () => import('./corevalues/corevalues.module').then( m => m.CorevaluesPageModule)
  },
  {
    path: 'timers',
    loadChildren: () => import('./timers/timers.module').then( m => m.TimersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
