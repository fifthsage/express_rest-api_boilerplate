import {MigrationInterface, QueryRunner} from 'typeorm';

export class Init1584436068800 implements MigrationInterface {
  name = 'init1584436068800';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `roles` (`id` int NOT NULL, `user_id` int NOT NULL, `role_name` enum ('USER', 'ADMIN') NOT NULL DEFAULT 'USER', `deleted_at` timestamp NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB",
      undefined,
    );
    await queryRunner.query(
      'CREATE TABLE `actors` (`id` int NOT NULL, `user_name` varchar(255) NOT NULL, `deleted_at` timestamp NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `actors`', undefined);
    await queryRunner.query('DROP TABLE `roles`', undefined);
  }
}
