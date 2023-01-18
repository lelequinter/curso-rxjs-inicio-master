import { of, distinct, from } from "rxjs";

const obs$ = of(1, 1, 2, 3, 4, 5, 5, 1);

obs$.pipe(distinct()).subscribe({
  next: (val) => console.log("next::", val),
  complete: () => console.log("Completed"),
});

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: "pluto" },
  { nombre: "mini" },
  { nombre: "mini" },
  { nombre: "carlos" },
  { nombre: "pluto" },
];

from(personajes).pipe(
    distinct(p => p.nombre)
)
.subscribe(console.log);
