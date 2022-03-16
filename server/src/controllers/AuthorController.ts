import { validate } from 'class-validator';
import { Body, JsonController, Post, Res } from 'routing-controllers';
import Author from '../models/Author';

@JsonController()
export default class AuthorController {
  @Post('/author')
  async post(@Body() authorData: any, @Res() res: any) {
    let author = new Author();
    author = Object.assign(author, authorData);
    const errors = await validate(author);
    if (errors.length > 0) {
      return res.status(400).send(errors);
    }
  }
}
