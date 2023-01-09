import { fromEvent, map, range } from "rxjs";
import { pluck } from "rxjs/operators";

// range(1, 5).pipe(
//     map<number, string>(x => (x * 10).toString())
// ).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

const keyupPluck$ = keyup$.pipe(
    pluck('target','baseURI')
);

keyup$.subscribe(console.log);

keyupCode$.subscribe(code => console.log('map::', code))
keyupPluck$.subscribe(code => console.log('pluck::', code))

// keyup$.pipe(
//     map(event => event.code)
// ).subscribe(val => console.log('map', val));

