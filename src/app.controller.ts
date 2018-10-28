import { Get, Post, Controller, Req, Response, Body, HttpCode, Param, Query, Headers } from '@nestjs/common';
import { AppService } from './app.service';


class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id/:page/:count')
  sss(@Req() request, @Body() body, @Param() param, @Query() query, @Headers() headers): string {
    console.log('body', body, param, query);
    // response = 'hello world';
    return this.appService.getList(param);
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(333, createCatDto);
    return this.appService.getListPost(createCatDto);
  }
}
