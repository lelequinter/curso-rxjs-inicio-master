import { debounceTime, fromEvent, map } from "rxjs";
import { ajax } from "rxjs/ajax";

// Referencias
const body = document.querySelector('body');

const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime(500),
    map((event) => {
        const texto = event.target['value'];

        return ajax.getJSON(`https://api.github.com/users/${texto}`)
    })
).subscribe({
    next: (resp) => resp.subscribe(console.log),
    complete: () => console.log('Compplete')
})