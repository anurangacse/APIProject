import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { LibraryService } from './library.service';
import { Book } from './entities/book.entity';

@Controller('library')
export class LibraryController {
    constructor(private readonly libraryService: LibraryService){};

    @Post()
    async createBook(@Res() response, @Body() book: Book){
        const newBook = await this.libraryService.createBook(book);
        return response.status(HttpStatus.CREATED).json({
            newBook
        })

    }
    @Get()
    async fetchAll(@Res() response) {
        const books = await this.libraryService.findAll();
        return response.status(HttpStatus.OK).json({
            books
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const book = await this.libraryService.findOne(id);
        return response.status(HttpStatus.OK).json({
            book
        })
    }

    @Put('/:id')
    async updateById(@Res() response, @Param('id') id,@Body() book: Book) {
        const updateRes = await this.libraryService.updateBookBook(id,book);
        return response.status(HttpStatus.OK).json({
            book
        })
    }

    @Delete('/:id')
    async deleteById(@Res() response, @Param('id') id) {
        const book = await this.libraryService.deleteBook(id);
        return response.status(HttpStatus.OK).json({
            book
        })
    }
}
