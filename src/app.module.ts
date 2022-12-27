import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Todo } from './todo/todo.model';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { type } from 'os';

@Module({
  imports: [ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: process.env.DATABASE_HOST, // hostname of mariadb container
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      autoLoadModels: true,
      models: [Todo],
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
