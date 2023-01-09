import { from,range } from "rxjs";
import { filter } from "rxjs/operators";

range(20, 10).pipe(
    filter((x, i) => {
        console.log('index', i);
        return x % 2 === 1
    })
)//.subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    }
];

const obs$ = from(personajes).pipe(
    filter( p => p.tipo === 'heroe' )
).subscribe(console.log)