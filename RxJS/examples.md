## General infos

- Observables are definitions of how stream should look like, if we want to turn observable to actual stream we need to subscribe to it.

- By convention observable variable are postfixed with \$ sign

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
