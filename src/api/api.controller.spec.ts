import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { DeviceDto } from './dto/data.dto';

describe('ApiController', () => {
  let controller: ApiController;
  const mockApiService = {
    storeData: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiController],
      providers: [ApiService],
    })
      .overrideProvider(ApiService)
      .useValue(mockApiService)
      .compile();

    controller = module.get<ApiController>(ApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('api controller', () => {
    const param: DeviceDto = {
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
    it('should save data ', async () => {
      const data = {
        deviceId: 'ibm-878A66',
        deviceType: 'computer1.0.0',
        deviceName: 'VN1-1-3',
        groupId: '847b3b2f1b05dc4',
        temperature: 21,
        humidity: 53
      }
      const mockStoreData = jest.spyOn(mockApiService, 'storeData').mockImplementation(() => data)
      const result = await controller.create(param);
      expect(mockStoreData).toBeCalledTimes(1);
      expect(mockStoreData).toHaveBeenCalledWith(param);
      expect(result).toBe(data);
    })
  })
});
