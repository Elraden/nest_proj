import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TopLevelCategory } from '../types/TopLeverCategoryEnum';
import { AdvantagesModel } from './advantages.model';
import { HhModel } from './hh.model';
import { HydratedDocument } from 'mongoose';

export type TopPageModelDocument = HydratedDocument<TopPageModel>;

@Schema({ timestamps: true })
export class TopPageModel {
	@Prop({ enum: TopLevelCategory })
	firstCategory: TopLevelCategory;

	@Prop()
	secondCategory: string;

	@Prop({ unique: true })
	alias: string;

	@Prop()
	title: string;

	@Prop()
	category: string;

	@Prop({ type: HhModel })
	hh?: HhModel;

	@Prop({ type: [AdvantagesModel] })
	advantages: AdvantagesModel[];

	@Prop()
	seoText: string;

	@Prop()
	tagsTitle: string;

	@Prop()
	tags: string[];
}

export const TopPageSchema = SchemaFactory.createForClass(TopPageModel);
