import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  isActive(lang: string): boolean {
    return lang === this.translateService.currentLang;
  }
  changeLang(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
  }
}
