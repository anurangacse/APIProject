import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class LibraryService {
    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>,
      ) {}

      findAll(): Promise<Book[]> {
        return this.bookRepository.find();
    }

    findOne(id: number): Promise<Book> {
        return this.bookRepository.findOneBy({id:id});
    }

    createBook(book: Book): Promise<Book> {
        return this.bookRepository.save(book);
    }
    deleteBook(id: number): Promise<DeleteResult>{
        return this.bookRepository.delete(id);
    }
    updateBookBook(id: number, book : Book): Promise<UpdateResult>{
        return this.bookRepository.update(id,book);
    }
}
