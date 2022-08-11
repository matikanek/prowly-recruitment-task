import { AnimalWithPhoto } from 'src/app/core/models/animal-photo.model';

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss']
})
export class AnimalItemComponent {
  @Input() animal: AnimalWithPhoto;
  @Output() selectAnimal = new EventEmitter<number>();

  constructor() { }

  onSelectAnimal(animalId: number): void {
    this.selectAnimal.emit(animalId);
  }

}
