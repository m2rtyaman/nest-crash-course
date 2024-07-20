import { CustomizedBaseEntity } from "src/entities/customized.base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Category extends CustomizedBaseEntity {
    @Column()
    name: string
}