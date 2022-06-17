import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthInterceptor } from '../auth/api/auth.interceptor';
import { ErrorInterceptor } from './api/error.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { LocalStorage } from './commons/local-storage.service';
import { SessionStorage } from './commons/session-storage.service';
import { StorageBase } from './commons/storage.base';
import { Storage } from './commons/storage.interface';

@NgModule({
  declarations: [HeaderComponent, TitleComponent, FooterComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: StorageBase,
      useFactory: (): Storage => {
        if (environment.production) return new SessionStorage();
        else return new LocalStorage();
      },
    },
  ],
})
export class CoreModule {}
