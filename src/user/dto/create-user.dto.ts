import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsAdult } from "./user.validation";

export class CreateUserDto {
    @IsNotEmpty()
    @ApiProperty({
        example: "Mert YAMAN"
    })
    @IsString()
    name: string;
    @IsEmail()
    @ApiProperty({
        example: "m2rtyaman@gmail.com"
    })
    email: string;
    @ApiProperty({
        example:"2004-12-14"
    })
    @IsDateString()
    @IsAdult({message:"Kullanıcı 18 yaşından küçük"})
    birthday: Date
}
