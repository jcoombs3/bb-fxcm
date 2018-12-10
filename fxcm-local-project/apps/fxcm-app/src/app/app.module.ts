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
import { FxcmStyleguideModule } from '@backbase/fxcm-styleguide';
import { FxcmCustomUiModule } from '@backbase/fxcm-custom-ui';

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
    FxcmStyleguideModule,
    FxcmCustomUiModule,
  ],
  providers: [...environment.mockProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
