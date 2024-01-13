import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TwoWayBindingComponent {
  inputData: string = '';
  nameText: string = '';

  onChanged(event: any) {
    this.inputData = event.target.value;
  }

  onNameChanged(event: InputEvent) {
    this.nameText = (event.target as HTMLInputElement).value;
  }
}
