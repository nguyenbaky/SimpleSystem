import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Device } from '../entity/device.entity';
import { DeviceDto } from './dto/data.dto';

@Injectable()
export class ApiService {
    constructor(
        @InjectRepository(Device)
        private deviceRepository: Repository<Device>,
    ) { }

    async storeData(deviceParam: DeviceDto): Promise<Device> {
        const { data, deviceId, deviceName, deviceType, groupId } = deviceParam;
        const device = new Device();
        device.deviceId = deviceId;
        device.deviceType = deviceType;
        device.deviceName = deviceName;
        device.groupId = groupId;
        device.temperature = data.temperature || null;
        device.humidity = data.humidity || null;
        device.occupancy = data.occupancy || null;

        await this.deviceRepository.save(device);
        return device;
    }
}
