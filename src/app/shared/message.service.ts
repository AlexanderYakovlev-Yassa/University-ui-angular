import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class MessageService {

  public add(message: String) {
    console.log("There is message: " + message);
  }
}
