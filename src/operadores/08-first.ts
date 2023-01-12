import { first, fromEvent, map, take, tap } from 'rxjs';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
    .pipe(
        // take(1)
        tap<PointerEvent>(console.log),

        // map( ({clientY}) => clientY ),

        // map(event => ({
        //     clientY: event.clientY,
        //     clientX: event.clientX,
        // })),

        map(({ clientX, clientY }) => ({ clientY, clientX })),

        first(e => e.clientY >= 105)
    )
    .subscribe(
        {
            next: (event) => console.log('click::', event),
            complete: () => console.log('complete')
        }
    )