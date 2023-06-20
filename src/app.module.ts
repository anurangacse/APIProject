import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibraryModule } from './library/library.module';
import { Book } from './library/entities/book.entity';

@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'test.db',
      entities: [Book],
      synchronize: true, //development only
    }),
    LibraryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
