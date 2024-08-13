import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService as NgxTranslateService } from '@ngx-translate/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  constructor(private ngxTranslateService: NgxTranslateService) {}

  /**
   * Initialize translations - default
   */
  initialize() {
    const language = 'en';
    // this language will be used as a fallback when a translation isn't found in the current language
    this.ngxTranslateService.setDefaultLang(language);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.ngxTranslateService.use(language);
  }

  getLanguageChanges$(): Observable<LangChangeEvent> {
    return this.ngxTranslateService.onLangChange;
  }

  setLanguage(language: string) {
    this.ngxTranslateService.use(language).pipe(
      catchError(() => {
        return this.ngxTranslateService.use('en');
      })
    );
  }

  setLanguage$(language: string) {
    return this.ngxTranslateService.use(language).pipe(
      catchError(() => {
        return this.ngxTranslateService.use('en');
      })
    );
  }
}
