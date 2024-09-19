import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileCardComponent {
  todayDate = new Date();
}
