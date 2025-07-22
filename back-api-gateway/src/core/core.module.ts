import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/module/auth/auth.module';
import { IS_DEV_ENV } from 'src/shared/utils/is-dev.utils';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: !IS_DEV_ENV,
      isGlobal: true
    }),

    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class CoreModule {}
