import { from, map, reduce } from 'rxjs';
import { scan } from 'rxjs/operators';

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acc: number, cur: number) => acc + cur;

// Reduce
from(numeros).pipe(
    reduce(totalAcumulador, 0)
).subscribe(console.log);

// Scan
from(numeros).pipe(
    scan(totalAcumulador, 0)
).subscribe(console.log);

// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    {
        id: 'lele',
        autenticado: false,
        token: null,
    },
    {
        id: 'lele',
        autenticado: true,
        token: 'abc',
    },
    {
        id: 'lele',
        autenticado: true,
        token: '123asd',
    }
];

const state$ = from(user).pipe(
    scan<Usuario>((acc, cur) => {
        return { ...acc, ...cur }
    })
);

const id$ = state$.pipe(
    map(state => state.id)
)

id$.subscribe(console.log);