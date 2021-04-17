import {MigrationInterface, QueryRunner} from "typeorm";

export class createSearchTable1618642516744 implements MigrationInterface {
    name = 'createSearchTable1618642516744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `search` (`id` int NOT NULL AUTO_INCREMENT, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `end_point` varchar(255) NOT NULL, `paramenter` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `search`");
    }

}
