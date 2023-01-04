import { Observable, Observer } from "rxjs";

//* Ya no se usa así
// const obs$ = Observable.create();

const observer: Observer<any> = {
    next: valor => console.log('next::', valor),
    error: error => console.warn('error::', error),
    complete: () => console.info('Complete')
}

const obs$ = new Observable<string>(subs => {

    subs.next('Hola');
    subs.next('Mundo');

    //Forzar un error
    // const a = undefined;
    // a.nombre= 'fernando';

    subs.complete();

    subs.next('complete');
});

obs$.subscribe( observer );