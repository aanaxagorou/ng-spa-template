import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MissingTranslation, createTranslateLoader } from '../utilitlies/tranlsation.util';
import { routes } from './app.routes';
import { TranslateService } from './language-selection/translate.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader
        },
        missingTranslationHandler: {
          provide: MissingTranslationHandler,
          useClass: MissingTranslation
        }
      }),
      TranslateService
    )
  ]
};
