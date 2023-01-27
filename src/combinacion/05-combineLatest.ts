import { fromEvent, map, combineLatest, of } from "rxjs";
const keyup$ = fromEvent(document, "keyup");
const click$ = fromEvent(document, "click");

// combineLatest([keyup$.pipe(map((x:any) => x.key)), click$.pipe(map(x => x.type))])
// .subscribe(console.log);

const input1 = document.createElement("input");
const input2 = document.createElement("input");

input1.placeholder = "email@gmail.com";
input2.placeholder = "********";

input2.type = "password";

const body = document.querySelector("body");

body.append(input1, input2);

// Helper
const getInputStream = (elem: HTMLElement) => {
  return fromEvent<KeyboardEvent>(elem, "keyup").pipe(
    map<KeyboardEvent, string>((event: any) => event.target.value)
  );
};

combineLatest([getInputStream(input1), getInputStream(input2)]).subscribe(
  console.log
);
