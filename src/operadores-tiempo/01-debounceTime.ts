import { debounceTime, fromEvent, distinctUntilChanged } from "rxjs";
import { map, pluck } from "rxjs/operators";

const click$ = fromEvent(document, "click");

// Ejemplo 1
click$.pipe(debounceTime(3000)).subscribe({
  next: (val) => console.log("Next: ", val),
});

// Ejemplo 2
const input = document.createElement("input");

document.querySelector("body").append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup");

input$
  .pipe(
    debounceTime(1000),
    map((event: any) => event.target.value),
    distinctUntilChanged()
    // pluck('target','value')
  )
  .subscribe(console.log);
