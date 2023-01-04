import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: valor => console.log('next::', valor),
    error: error => console.warn('error::', error),
    complete: () => console.info('Complete')
}

const intervalo$ = new Observable<number>(subs => {

    const intervalID = setInterval(
        () => subs.next(Math.random()), 1000
    );

    return () => {
        clearInterval(intervalID)
        console.log('Intervalo destruido');
    };

});

//* Caracteristicas importantes
/*1- Casteo Multiple
  2- Tambien es un observer
  3- Next, Error y Complete  
*/

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);

    subject$.complete();

    subscription.unsubscribe();
}, 3500);

// const subs1 = intervalo$.subscribe( (rnd) => console.log('subs1::',rnd));
// const subs2 = intervalo$.subscribe( (rnd) => console.log('subs2::',rnd));