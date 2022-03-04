import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';

const routes: Routes = [
  { path: 'pagina1', component: Page1Component },
  { path: 'pagina2', component: Page2Component },
  { path: 'pagina3', component: Page3Component },
  { path: '', pathMatch: 'full', redirectTo: 'pagina1' },
  { path: '**', pathMatch: 'full', redirectTo: 'pagina1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
