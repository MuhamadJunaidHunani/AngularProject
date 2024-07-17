import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  // Import this

import { AppComponent } from './app/app.component';
import { QoutesComponent } from './app/Components/qoutes/qoutes.component';
import { GrandParentComponent } from './app/Components/grand-parent/grand-parent.component';
import { WeatherComponent } from './app/Components/weather/weather.component';
import { FilterationComponent } from './app/filteration/filteration.component';

const routes: Routes = [
  { path: '', component: QoutesComponent },
  { path: 'test', component: GrandParentComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'filter', component: FilterationComponent},
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(HttpClientModule)  // Add this
  ],
}).catch((err) => console.error(err));
