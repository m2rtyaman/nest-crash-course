import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCategoryDto{
    @ApiProperty({
        example:"Category 1",
        description:"for category create"
    })
    @IsString()
    name:string;
}