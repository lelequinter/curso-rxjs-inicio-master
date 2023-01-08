import { interval, timer } from "rxjs";

const observer = {
    next: (val) => {
        console.log('Next::', val);
    },
    complete: () => console.log('Complete')
}

const interval$ = interval(1000);

const timer$ = timer(2000);

console.log('inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');