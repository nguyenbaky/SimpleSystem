import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { Device } from '../entity/device.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ApiController],
  providers: [ApiService],
  exports: [ApiService],
  imports: [TypeOrmModule.forFeature([Device])],
})
export class ApiModule { }
