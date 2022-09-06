import { Controller, Get, Post, Req, Header, Redirect, Query, Param, Body, Delete, Put } from "@nestjs/common";
import { Request } from 'express';
import { Observable, of } from "rxjs";
import { CreateCatDto } from 'src/dto/create-cat.dto';

// https://docs.nestjs.com/controllers
@Controller('cats')
export class CatsController {

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  // @Get()
  // findAll(@Query() query: ListAllEntities) {
  //   return `This action returns all cats (limit: ${query.limit} items)`;
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

  // @Post()
  // @Header('Cache-Control', 'name')
  // create(): string {
  //   return 'This action adds a new cat';
  // }

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   return 'This action adds a new cat';
  // }

  // @Get()
  // findAll(@Req() request: Request): string {
  //   return 'This action returns all cats';
  // }

  // @Get()
  // async findAll(): Promise<any[]> {
  //   return [];
  // }

  // @Get()
  // findAll(): Observable<any[]> {
  //   return of([]);
  // }

  // @Get('docs')
  // @Redirect('https://docs.nestjs.com', 302)
  // getDocs(@Query('version') version) {
  //   if (version && version === '5') {
  //     return {
  //       url: 'https://docs.nestjs.com/v5/'
  //     };
  //   }
  // }

  // @Get(':id')
  // findOne(@Param() params): string {
  //   console.log(params.id);
  //   return `This action returns a #${params.id} cat`;
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string): string {
  //   console.log(id);
  //   return `This action returns a #${id} cat`;
  // }
}