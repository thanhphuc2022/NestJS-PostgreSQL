import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ClassroomModule } from './components/classroom/classroom.module';
import { PersonModule } from './components/persons/persons.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      //     {
      //   envFilePath: ['.env.development.local', '.env.development'],
      //   ignoreEnvFile: true,
      //   isGlobal: true,
      // }
    ),
    ClassroomModule, 
    // PersonModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: process.env.DB_PASSWORD,
      synchronize: true,
      logging: true,
      entities:[__dirname + '/**/**/*.entity{.ts,.js}'],
      autoLoadEntities: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}
