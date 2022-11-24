import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { PipeException } from '../exception/pipe.exception';

@Injectable()
export class JoiValidationPipe implements PipeTransform<any> {
    constructor(private schema: ObjectSchema) { }

    async transform(value: any, metadata: ArgumentMetadata) {
        const { error } = this.schema.validate(value);
        if (error) {
            const details = error.details.map(d => d.message)
            throw new PipeException(details);
        }
        return value;
    }
}