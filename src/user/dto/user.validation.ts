import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator"

export function IsAdult(validationOptions?: ValidationOptions,) {
    return (object : Object, propertyName: string,) => {
        registerDecorator({
            name: "isAdult",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const today = new Date();
                    const birthday = new Date(value);
                    const age = today.getFullYear() - birthday.getFullYear();
                    if (age < 18) {
                        return false
                    } else {
                        return true
                    }
                    console.log(value);
                    console.log(args);
                }
            }
        })
    }
}