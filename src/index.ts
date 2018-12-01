import { Observable, Observer } from "rxjs";

let observable = Observable.create((observer: Observer<any>) => {
  observer.next("Hello World");
  observer.next("Hello Again");
  observer.complete();
});

observable.subscribe(
  (x: any) => logItem(x),
  (error: any) => logItem(error),
  () => logItem("Completed")
);

function logItem(val: any) {
  let li = document.createElement("li");
  let textNode = document.createTextNode(val);
  li.append(textNode);
  document.getElementById("list").appendChild(li);
}
