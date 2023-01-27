import { concatMap, interval, of, take, map, fromEvent, switchMap, tap } from 'rxjs';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

  click$.pipe(
    concatMap(()=> interval$)
  ).subscribe(console.log);

of("a", "b", "c")
  .pipe(
    concatMap((z) =>
      interval$.pipe(
        tap( ()=>console.log(z)),
        take(3)
      )
    )
  )
  .subscribe(console.log);