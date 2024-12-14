import { TopLevelCategory } from '../types/TopLeverCategoryEnum';
import { AdvantagesModel } from './advantages.model';
import { HhModel } from './hh.model';

export class TopPageModel {
	_id: string;
	firstCategory: TopLevelCategory;
	secondCategory: string;
	title: string;
	category: string;
	hh?: HhModel;
	advantages: AdvantagesModel;
	seoText: string;
	tagsTitle: string;
	tags: string[];
}
