import { InputType, Field, ID, PartialType } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'
import { IsObjectID } from '@shared/validator/objectid.validator'
import { CreateProposalInput } from '@app/proposal/dto/create-proposal.input'
import { Types } from 'mongoose'

@InputType()
export class UpdateProposalInput extends PartialType(CreateProposalInput) {
  @Field(() => ID)
  @IsNotEmpty()
  @IsObjectID()
  id: Types.ObjectId
}
