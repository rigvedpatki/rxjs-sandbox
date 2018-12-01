import { Observable, Observer } from "rxjs";

const observable1 = Observable.create((observer: Observer<any>) => {
  observer.next("Observable One is Alive !");
  setInterval(() => {
    observer.next("Observable One");
  }, 5000);
});

const observable2 = Observable.create((observer: Observer<any>) => {
  observer.next("Observable Two is Alive !");
  setInterval(() => {
    observer.next("Observable Two");
  }, 2500);
});

const subscription1 = observable1.subscribe((x: string) => logItem(x, 1));
const subscription2 = observable2.subscribe((x: string) => logItem(x, 2));

function logItem(val: string, col: number) {
  let li = document.createElement("li");
  let textNode = document.createTextNode(val);
  li.append(textNode);
  if (col === 2) {
    document.getElementById("list2").appendChild(li);
  } else if (col === 1) {
    document.getElementById("list1").appendChild(li);
  }
}

// Event handler
const unsubcribeBtn1 = document.getElementById("unsubcribeBtn1");
unsubcribeBtn1.addEventListener("click", () => {
  subscription1.unsubscribe();
});

const unsubcribeBtn2 = document.getElementById("unsubcribeBtn2");
unsubcribeBtn2.addEventListener("click", () => {
  subscription2.unsubscribe();
});

const addSubscription = document.getElementById("addSubscriptionBtn");
addSubscription.addEventListener("click", () => {
  subscription2.add(subscription1);
});
