import { fromEvent, map, range } from "rxjs";

// range(1, 5).pipe(
//     map<number, string>(x => (x * 10).toString())
// ).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

keyupCode$.subscribe(code => console.log('map', code))

// keyup$.pipe(
//     map(event => event.code)
// ).subscribe(val => console.log('map', val));

