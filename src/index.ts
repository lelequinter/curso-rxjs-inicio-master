import { of, startWith } from "rxjs";

const numeros$ = of(1,2,3).pipe(
    startWith('a')
);

numeros$.subscribe(console.log)