import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjasList = [
    {
      id: 1,
      name: 'joushwa',
      weapon: 'gun',
    },
    { id: 2, name: 'aqib', weapon: 'sword' },
  ];

  getNinjas(weapon?: 'sword' | 'gun') {
    if (weapon) {
      return this.ninjasList.filter((ninjas) => ninjas.weapon == weapon);
    }

    return this.ninjasList;
  }

  getNinja(id: number) {
    const ninja = this.ninjasList.find((ninja) => ninja.id === id);

    console.log(' ninja>>', ninja);
    if (!ninja) {
      throw new Error('Ninja not found');
    }

    return ninja;
  }

  createNinja(createNinjadto: CreateNinjaDto) {
    const newNinja = { ...createNinjadto, id: Date.now() };
    this.ninjasList.push(newNinja);

    return newNinja;
  }

  updateNinja(id: number, updateNinjadto: UpdateNinjaDto) {
    this.ninjasList = this.ninjasList.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, updateNinjadto };
      }
      return ninja;
    });

    return this.getNinja(id);
  }

  removeNinja(id: number) {
    const toBeRemoved = this.getNinja(id);
    this.ninjasList = this.ninjasList.filter((ninja) => ninja.id == id);

    return toBeRemoved;
  }
}
