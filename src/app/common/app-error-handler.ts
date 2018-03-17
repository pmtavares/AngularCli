import { ErrorHandler } from "@angular/core";


export class AppErrorHandler implements ErrorHandler {

  handleError(error) {
    alert("An unexpected error ocurred for delete post");
    console.log(error);
  }


}
