import { Body } from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";

export class BaseController {
  ok(component: string, data: object = {}, seo: object = {}) {
    return {
      component,
      data: JSON.stringify(data),
      seo: seo || {
        title: 'NestJS',
        url: 'http://localhost:3000',
        description: 'NestJS app',
        image: 'https://vuejsexamples.com/assets/vue.png'
      }
    };
  }

}
