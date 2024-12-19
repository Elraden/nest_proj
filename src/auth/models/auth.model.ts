import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthModelDocument = HydratedDocument<AuthModel>;

@Schema({ timestamps: true })
export class AuthModel {
	@Prop({ required: true, unique: true })
	email: string;

	@Prop({ required: true })
	passwordHash: string;

	@Prop()
	createdAt?: Date;
}

export const AuthSchema = SchemaFactory.createForClass(AuthModel);
