import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['Gun', 'Sword'], { message: 'Use Correct Weapon Type' })
  weapon: string;
  id: number;
}
