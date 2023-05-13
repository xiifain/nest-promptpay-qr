import { Injectable } from '@nestjs/common';
import generatePayload = require('promptpay-qr');

@Injectable()
export class PromptpayQRService {
  generate(id: string, amount: number): string {
    return generatePayload(id, { amount });
  }
}
