import { auditTime, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    tap((val) => console.log("tap::", val)),
    auditTime(4000)
  )
  .subscribe(console.log);
