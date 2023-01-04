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

    return () => {
        clearInterval(interval);
        console.log('interval destruido');
    }
});

const subs = intervalo$.subscribe(num => console.log('Num::', num));

setTimeout(() => {
    subs.unsubscribe();
}, 3000);