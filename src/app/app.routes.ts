import { Routes } from '@angular/router';
import { ContextoComponent } from './contexto/contexto.component';

export const routes: Routes = [
  { path: 'contextos', component: ContextoComponent },
  { path: '', redirectTo: '/contextos', pathMatch: 'full' },
];


