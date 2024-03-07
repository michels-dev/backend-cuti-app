import { DataSource } from "typeorm";

const DataSourceCuti = new DataSource({
  // Data Source Migrations
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "michels05",
  entities: ["src/cuti/entities/**/*.entity{.ts,.js}"],
  migrations: ["src/migrations/**/*{.ts,.js}"],
})