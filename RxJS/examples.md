## General infos

- Observables are definitions of how stream should look like, if we want to turn observable to actual stream we need to subscribe to it.

- By convention observable variable are postfixed with \$ sign

- When we subscribe to observables we get as parameters 3 functions, the first is the value, the second is for potentional errors and the 3rd is for when the stream is completed and will no longer emit new values.

- With async pipe we can subscribe to observables directly in our html component file, when we need the observable value.

## Demos

1. Simple Observable with interval.

- here we will have 2 streams based on the same observable variable/blueprint and each second they will print increasing value starting from 0 and increasing by 1.

```typescript
import { interval } from 'rxjs';
export class AppComponent implements OnInit {
  ngOnInit() {
    const interval$ = interval(1000);

    interval$.subscribe((val) => console.log('stream 1: ' + val));
    interval$.subscribe((val) => console.log('stream 2: ' + val));
  }
}
```

2. Simple Observable with timer.

- timer will wait for 3 seconds and then each second will print values

```typescript
import { timer } from 'rxjs';
export class AppComponent implements OnInit {
  ngOnInit() {
    const interval$ = timer(3000, 1000);

    interval$.subscribe((val) => console.log('stream 1: ' + val));
  }
}
```

3. Simple Observable with fromEvent

- With fromEvent observable we can subscribe to native document events.

```typescript
import { fromEvent } from 'rxjs';
export class AppComponent implements OnInit {
  ngOnInit() {
    const click$ = fromEvent(document, 'click');

    click$.subscribe((evt) => console.log(evt));
  }
}
```

4. Custom observable with fetch method

- noop stands for no operation, because in this example we are not handling the error case

```typescript
import { Observable, noop } from 'rxjs';
export class AppComponent implements OnInit {
  ngOnInit() {
    const http$ = Observable.create((observer) => {
      fetch('/api/courses')
        .then((response) => {
          return response.json;
        })
        .then((body) => {
          observer.next(body);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
        });
    });

    http$.subscribe(
      (courses) => console.log(courses),
      noop,
      () => console.log('completed')
    );
  }
}
```
