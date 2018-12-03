import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';

import { BbFormsContainerModule } from '@backbase/forms-container-ang';
import { BbFormsUiModule } from '@backbase/forms-ui-ang';

import { AppComponent } from './app.component';
import { customClassId } from './app.customClassId';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BackbaseCoreModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: false, useHash: true }),
    BbFormsContainerModule.forRoot({
      apiRoot: 'http://localhost:8080/gateway/api/forms/v1',
      customClassId: customClassId
    }),
    BbFormsUiModule,
  ],
  providers: [...environment.mockProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
