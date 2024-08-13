import { HttpClient } from '@angular/common/http';
import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export class MissingTranslation implements MissingTranslationHandler {
  handle = (params: MissingTranslationHandlerParams): void => {
    const { key, translateService } = params;
    const { currentLang, defaultLang } = translateService;
    const lang = currentLang ?? defaultLang;

    console.log(`[MISSING-TRANSLATION] - ${lang} - ${params.key}`);
  };
}
