import { delay, forkJoin, interval, of, take } from "rxjs";

const numeros$ = of(1, 2, 3, 4, 5);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of(1, 2, 3, 4, 'c').pipe(delay(3500));

// forkJoin([numeros$, intervalo$, letras$]).subscribe(console.log);

// forkJoin([numeros$, intervalo$, letras$]).subscribe(resp => {
//     console.log('numeros: ', resp[0])
//     console.log('interval: ', resp[1])
//     console.log('letras: ', resp[2])
// });

forkJoin({num: numeros$,int: intervalo$,let: letras$}).subscribe(console.log);
