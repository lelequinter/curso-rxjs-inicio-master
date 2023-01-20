import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

// ajax
//   .post(
//     url,
//     {
//       id: 1,
//       nombre: "lele",
//     },
//     {
//       "mi-token": "abc123",
//     }
//   )
//   .subscribe(console.log);

ajax({
  url,
  method: "PUT",
  headers: {
    "mi-token": "LEyder",
  },
  body: {
    id: 12,
    name: "leyder",
  },
}).subscribe(console.log);
