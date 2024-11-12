import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-story-card',
  standalone: true,
  templateUrl: './story-card.component.html',
  styleUrl: './story-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryCardComponent {
  @Input({required: true}) var1: string = '';

  handleClick(): void {
    alert('You did it :)');
  }
}
