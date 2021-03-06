
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env';
import { SharedModule } from '@shared/shared.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'app'
    }),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase), // init
    AngularFireDatabaseModule, // add realtime DB module
    // AngularFirestoreModule.enablePersistence(), // add cloudstore DB module
    AngularFirestoreModule, // add cloudstore DB module
    AngularFireAuthModule, // add auth module
    AngularFireStorageModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    PagesModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
