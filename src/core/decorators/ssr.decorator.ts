import { applyDecorators, SetMetadata } from "@nestjs/common";
import { Render } from "@nestjs/common";

export const Ssr = () => {
  return applyDecorators(Render('index'));
};
