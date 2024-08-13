import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslationKeys } from '../models/translation.enum';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from './language-selection/translate.service';
import { LanguageSelectionComponent } from './language-selection/language-selection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, LanguageSelectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'david_schenavsky';
  translationKeys = TranslationKeys;
  constructor(private translateService: TranslateService) {
    this.translateService.initialize();
  }
}
