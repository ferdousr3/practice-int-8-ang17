import { TitleStrategy } from '@angular/router';
import { AppTitleStrategy } from './appTitleStrategy';

export const StrategyProviders: object[] = [
  { provide: TitleStrategy, useClass: AppTitleStrategy },
];
