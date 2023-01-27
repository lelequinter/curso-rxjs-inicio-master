import { fromEvent, merge, map } from 'rxjs';
const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');


merge(keyup$.pipe(map(x => x.type)), click$.pipe(map(x => x.type)))
.subscribe(console.log);