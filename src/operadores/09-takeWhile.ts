import { fromEvent, map, takeWhile, tap } from 'rxjs';


const click$ = fromEvent<PointerEvent>(document, 'click');

click$
    .pipe(
        map(({ x, y }) => ({ x, y })),
        // takeWhile(({ y }) => y <= 200)

        //El ultimo argumento es que incluye el valor
        // que cumple la condición
        takeWhile(({ y }) => y <= 200, true)

    )
    .subscribe({
        next: (val) => console.log('next', val),
        complete: () => console.log('complete')
    })