import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: valor => console.log('next::', valor),
    error: error => console.warn('error::', error),
    complete: () => console.info('Complete')
}

const intervalo$ = new Observable<number>(subs => {

    const intervalID = setInterval(
        () => subs.next(Math.random()), 3000
    );

    return () => clearInterval(intervalID);

});

//* Caracteristicas importantes
/*1- Casteo Multiple
  2- Tambien es un observer
  3- Next, Error y Complete  
*/

const subject$ = new Subject();
intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe( (rnd) => console.log('subs1::',rnd));
const subs2 = subject$.subscribe( (rnd) => console.log('subs2::',rnd));

// const subs1 = intervalo$.subscribe( (rnd) => console.log('subs1::',rnd));
// const subs2 = intervalo$.subscribe( (rnd) => console.log('subs2::',rnd));