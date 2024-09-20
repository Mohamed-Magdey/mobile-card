import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileCardComponent implements OnInit, OnDestroy {
  currentTime: Date = new Date();

  private intervalId: number | NodeJS.Timeout = 0;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentTime = new Date();
      this.cd.markForCheck();
    }, 1000);
  }

  ngOnDestroy(): void {
    if(this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
