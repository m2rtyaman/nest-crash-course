import { CustomizedBaseEntity } from "src/entities/customized.base.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany, } from "typeorm";

@Entity()
export class User extends CustomizedBaseEntity {
    @Column()
    name: string
    @Column()
    email: string
    @Column()
    birthday: Date;
    @OneToMany(() => Product, (product) => product.user)
    products: Product[]
}