import { ChangeDetectionStrategy, Component, DestroyRef, OnDestroy, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileCardComponent {
  currentTime: WritableSignal<Date> = signal<Date>(new Date());

  constructor() {
    interval(1000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.currentTime.set(new Date());
      });
  }
}
