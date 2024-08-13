import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-language-selection',
  standalone: true,
  imports: [],
  templateUrl: './language-selection.component.html'
})
export class LanguageSelectionComponent {
  translateService = inject(TranslateService);

  changeLanguage(language: string) {
    this.translateService.setLanguage(language);
  }
}
