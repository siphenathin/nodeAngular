import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "my-app";
  messages = this.http.get<any>("http://localhost:6060/posts");
  constructor(private http: HttpClient) {}
}
