import { Observable } from "rxjs";

//* Ya no se usa así
// const obs$ = Observable.create();

const obs$ = new Observable<string>(subs => {

    subs.next('Hola');
    subs.next('Mundo');
    
    subs.complete();
    
    subs.next('complete');
});

obs$.subscribe(console.log);