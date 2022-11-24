import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { ApiService } from './api.service';
import { DeviceDto } from './dto/data.dto';
import { JoiValidationPipe } from '../pipe/joiValidation.pipe';
import { DataSchema } from './dto/data.schema';

@Controller('api')
export class ApiController {
    constructor(private readonly apiService: ApiService) { }

    @Post('data')
    @UsePipes(new JoiValidationPipe(DataSchema))
    async create(@Body() deviceParam: DeviceDto) {
        return this.apiService.storeData(deviceParam);
    }
}
