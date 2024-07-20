import { BeforeInsert, CreateDateColumn, DeleteDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export abstract class CustomizedBaseEntity{
    @PrimaryColumn()
    id: string
    @BeforeInsert()
    async beforeInsert() {
        this.id = uuidv4();
    }
    @CreateDateColumn()
    createdAt!: Date
    @UpdateDateColumn()
    updatedAt!: Date
    @DeleteDateColumn()
    deletedAt!: Date
}