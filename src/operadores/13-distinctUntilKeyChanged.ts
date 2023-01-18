import { from, distinctUntilKeyChanged } from "rxjs";

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
  .pipe(distinctUntilKeyChanged('nombre'))
  .subscribe(console.log);
