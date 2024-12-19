import { Prop } from '@nestjs/mongoose';

export class AdvantagesModel {
	@Prop()
	title: string;

	@Prop()
	description: string;
}
