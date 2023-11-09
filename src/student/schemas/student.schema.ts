import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Student {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
