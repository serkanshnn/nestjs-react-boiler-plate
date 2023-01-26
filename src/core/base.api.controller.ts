export class BaseApiController {
  ok(data = {}) {
    return {
      isSuccess: true,
      data,
    };
  }
}
