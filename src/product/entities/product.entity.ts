import { Category } from "src/category/entities/category.entity";
import { CustomizedBaseEntity } from "src/entities/customized.base.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, } from "typeorm";

@Entity()
export class Product extends CustomizedBaseEntity {
    @Column()
    name: string
    @ManyToOne(() => User, (user) => user.products)
    user: User
    @ManyToOne(() => Category, { nullable: true })
    category?: Category
    @Column()
    categoryId: string
    @Column()
    decs: string
}