import { InputType, Field } from '@nestjs/graphql'
import { IsNotEmpty, IsOptional } from 'class-validator'

@InputType()
export class CreateCategoryInput {
  @Field()
  @IsNotEmpty()
  name: string

  @Field({ defaultValue: '' })
  @IsOptional()
  content: string
}
