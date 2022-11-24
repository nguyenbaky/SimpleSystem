import { BadRequestException, HttpStatus } from '@nestjs/common';

export class PipeException extends BadRequestException {
    public details: Array<string>;
    constructor(details) {
        super('Pipe Error');
        this.details = details;
    }
}