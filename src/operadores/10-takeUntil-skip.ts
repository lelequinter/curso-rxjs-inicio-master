import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const boton = document.createElement("button");

boton.innerHTML = "Detener timer";

document.querySelector("body").append(boton);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(boton, "click");
const clickBtn$ = fromEvent(boton, "click").pipe(
  tap(() => console.log("tap antes de skip")),
  skip(5),
  tap(() => console.log("tap despues de skip"))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (val) => console.log("Counter next::", val),
  complete: () => console.log("Completado Counter"),
});
