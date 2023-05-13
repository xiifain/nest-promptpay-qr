import { Module } from '@nestjs/common';
import { PromptpayQRService } from './promptpay-qr.service';

@Module({
  imports: [],
  exports: [PromptpayQRService],
})
export class PromptpayQRModule {}
