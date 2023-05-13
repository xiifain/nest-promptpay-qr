import generatePayload = require('promptpay-qr');

export class PromptpayQRService {
  generate(id: string, amount: number): string {
    return generatePayload(id, { amount });
  }
}
