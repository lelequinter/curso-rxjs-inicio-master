import { from, distinctUntilChanged } from "rxjs";

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

from(personajes)
  .pipe(distinctUntilChanged((ant, act) => ant.nombre !== act.nombre))
  .subscribe(console.log);
