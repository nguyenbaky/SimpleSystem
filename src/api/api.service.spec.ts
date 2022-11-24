import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from './api.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Device } from '../entity/device.entity';
import { DeviceDto } from './dto/data.dto';

describe('ApiService', () => {
  let service: ApiService;

  const mockDeviceRepository = {
    save: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApiService,
        {
          provide: getRepositoryToken(Device),
          useValue: mockDeviceRepository
        }
      ]
    }).compile();

    service = module.get<ApiService>(ApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('api service', () => {
    const payload: DeviceDto = {
      deviceId: 'ibm-878A66',
      deviceType: 'computer1.0.0',
      deviceName: 'VN1-1-3',
      groupId: '847b3b2f1b05dc4',
      dataType: 'DATA',
      data: {
        fullPowerMode: false,
        activePowerControl: false,
        firmwareVersion: 1,
        temperature: 21,
        humidity: 53
      },
      timestamp: new Date(1629369697)
    }
    it('should save data', async () => {
      const mockSave = jest.spyOn(mockDeviceRepository, 'save');
      const result = await service.storeData(payload);
      expect(mockSave).toBeCalledTimes(1);
      expect(result).toBe({
        deviceId: 'ibm-878A66',
        deviceType: 'computer1.0.0',
        deviceName: 'VN1-1-3',
        groupId: '847b3b2f1b05dc4',
        temperature: 21,
        humidity: 53
      })
    })
  })
});
