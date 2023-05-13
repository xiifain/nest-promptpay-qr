## Installation

```bash
npm i @xiifain/nest-promptpay-qr
```

## Usage

In the desired module file, import `PromptpayQRModule` in the `imports` list.

```typescript
@Module({
  imports: [
    // your other modules
    PromptpayQRModule,
  ],
  providers: [
    // your providers
  ],
  controllers: [
    // your controllers
  ],
})
export class AppModule {}
```

And inside your `service` you can use `PromptpayQRService`

```typescript
export class AppService {
  constructor(private readonly promptpayQRService: PrompayQRService) {}

  foo() {
    const qrStr = this.promptpayQRService.generate('<your-promptpay-id>', 500);
  }
}
```
