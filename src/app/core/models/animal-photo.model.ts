import { AnimalProfile } from './animal-profile.model';
import { AnimalType } from './animal.model';

export interface AnimalWithPhoto {
  id: number;
  name: string;
  type: AnimalType;
  profileId: number;
  profile?: AnimalProfile;
  photoUrl?: string;
}