import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity("search")
export class Search extends BaseEntity {
    constructor(search: Partial<Search>) {
        super();
        Object.assign(this, search);
    }
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    end_point: string;

    @Column()
    paramenter: string;
}
