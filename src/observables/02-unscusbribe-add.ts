import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: valor => console.log('next::', valor),
    error: error => console.warn('error::', error),
    complete: () => console.info('Complete')
}

const intervalo$ = new Observable<number>(subsccriber => {
    // Crear un contador, 1,2,3,4...
    let count = 0;
    const interval = setInterval(() => {
        // Cada segundo
        subsccriber.next(count++);
    }, 1000);

    setTimeout(() => {
        subsccriber.complete();
    }, 3000);

    return () => {
        clearInterval(interval);
        console.log('interval destruido');
    }
});

const sub1 = intervalo$.subscribe(observer);
const sub2 = intervalo$.subscribe(observer);
const sub3 = intervalo$.subscribe(observer);

sub1.add(sub2)

setTimeout(() => {
    sub1.unsubscribe();
    // // subs.unsubscribe();
    // console.log('complete timeout');

}, 6000);