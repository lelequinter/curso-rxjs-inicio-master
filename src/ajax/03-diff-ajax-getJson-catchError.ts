import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://httpb3213in.org/delay/1";

const manejaError = (error: AjaxError) => {
  console.warn("error", error.message);
  return of(false);
};

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs$
//   .pipe(catchError(manejaError))
//   .subscribe((data) => console.log("getJson::", data));
obs$.pipe(
    catchError(manejaError)
).subscribe({
  next: (res) => console.log("next: ", res),
  error: (err) => console.warn("error: ", err),
  complete: () => console.log("complete"),
});
// obs2$
//   .pipe(catchError(manejaError))
//   .subscribe((data) => console.log("Ajax::", data));
