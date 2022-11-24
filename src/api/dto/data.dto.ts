
export class DeviceDto {
    public deviceId: string;
    public deviceType: string;
    public deviceName: string;
    public groupId: string;
    public dataType: string;
    public timestamp: Date;
    public data: dataDto
}

export interface dataDto {
    temperature?: number,
    humidity?: number,
    occupancy?: boolean,
    fullPowerMode?: boolean,
    activePowerControl?: boolean,
    firmwareVersion?: number,
    version?: number,
    messageType?: string,
    stateChanged?: number
}
