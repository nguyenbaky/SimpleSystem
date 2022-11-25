import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { ApiController } from './api/api.controller';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ApiModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
  ],
  controllers: [AppController, ApiController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule { }
