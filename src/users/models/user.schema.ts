import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {

    @Prop()
    uid: number;
    @Prop({ required: true })
    username: string;
    @Prop({ required: true, unique: true })
    email: string;    
    @Prop({ required: true })
    hash_pw: string;

}
export const UserSchema = SchemaFactory.createForClass(User);