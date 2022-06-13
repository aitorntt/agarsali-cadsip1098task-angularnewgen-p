import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InterceptorService } from './interceptor.service';
// Components
import { NgSelectModule } from '@ng-select/ng-select';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// Angular Material
import { MatPaginatorModule, MatTableModule } from '@angular/material';
// Pipes
import { DatePipe } from '@angular/common';
import { SafePipe } from './shared/pipes/safe.pipe';
// Deda Native Components
import { DedaButtonComponent } from './components/deda-button/deda-button.component';
import { DedaTextBoxComponent } from './components/deda-text-box/deda-text-box.component';
import { DedaPasswordComponent } from './components/deda-password/deda-password.component';
import { DedaTextBlockComponent } from './components/deda-text-block/deda-text-block.component';
import { DedaGridComponent } from './components/deda-grid/deda-grid.component';
import { DedaCheckBoxComponent } from './components/deda-check-box/deda-check-box.component';
import { DedaRadioButtonComponent } from './components/deda-radio-button/deda-radio-button.component';
import { DedaLinkComponent } from './components/deda-link/deda-link.component';
import { DedaImageComponent } from './components/deda-image/deda-image.component';
import { DedaVideoComponent } from './components/deda-video/deda-video.component';
import { DedaFormComponent } from './components/deda-form/deda-form.component';
import { DedaTableComponent } from './components/deda-table/deda-table.component';
import { DedaSelectComponent } from './components/deda-select/deda-select.component';
import { DedaPaginationComponent } from './components/deda-pagination/deda-pagination.component';


import { AppComponent } from './app.component';
import { homeComponent } from './pages/home/home.component';



const routes: Routes = [
  {
    path: 'home',
    component: homeComponent
  },
  {
    path: '',
    component: homeComponent
  },
];

@NgModule({
  declarations: [
    homeComponent,
    AppComponent,
    SafePipe,
    DedaButtonComponent,
    DedaTextBoxComponent,
    DedaPasswordComponent,
    DedaTextBlockComponent,
    DedaGridComponent,
    DedaCheckBoxComponent,
    DedaRadioButtonComponent,
    DedaLinkComponent,
    DedaImageComponent,
    DedaVideoComponent,
    DedaFormComponent,
    DedaTableComponent,
    DedaSelectComponent,
    DedaPaginationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forRoot(routes),
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    DatePipe,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  constructor() {
  }


}
