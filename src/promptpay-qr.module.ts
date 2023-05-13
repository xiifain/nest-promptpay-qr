import { Module } from '@nestjs/common';
import { PromptpayQRService } from './promptpay-qr.service';

@Module({
  imports: [],
  providers: [PromptpayQRService],
  exports: [PromptpayQRService],
})
export class PromptpayQRModule {}
