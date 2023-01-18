import { fromEvent, interval, takeUntil } from "rxjs";

const boton = document.createElement("button");

boton.innerHTML = "Detener timer";

document.querySelector("body").append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, "click");

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (val) => console.log("Counter next::", val),
  complete: () => console.log("Completado Counter"),
});
