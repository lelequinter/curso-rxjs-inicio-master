import {
  throttleTime,
  fromEvent,
  distinctUntilChanged,
  asyncScheduler,
} from "rxjs";
import { map, pluck } from "rxjs/operators";

const click$ = fromEvent(document, "click");

// Ejemplo 1
click$.pipe(throttleTime(2000)).subscribe({
  next: (val) => console.log("Next: ", val),
});

// Ejemplo 2
const input = document.createElement("input");

document.querySelector("body").append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

input$
  .pipe(
    throttleTime(400, asyncScheduler, {
      leading: true,
      trailing: true,
    }),
    map((event: any) => event.target.value),
    distinctUntilChanged()
    // pluck('target','value')
  )
  .subscribe(console.log);
