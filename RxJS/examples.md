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
          return response.json();
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

5. Custom observable with shared streams

- With shareReplay we can avoid making double request to our API. Every next created from the courses stream will get the same data as the first stream without making new http request.

```typescript
export interface Course {
  id: number;
  description: string;
  iconUrl: string;
  courseListIcon: string;
  longDescription: string;
  category: string;
  lessonsCount: number;
}
```

```typescript
import { Observable } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';
export class AppComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  ngOnInit() {
    const http$ = createHttpObservable('http://localhost:9000/api/courses');

    const courses$ = http$.pipe(
      tap(() => console.log('http request executed')),
      map((res) => Object.values(res['payload'])),
      shareReplay()
    );

    this.beginnerCourses$ = courses$.pipe(
      map((courses: Course[]) =>
        courses.filter((course) => course.category === 'BEGINNER')
      )
    );

    this.advancedCourses$ = courses$.pipe(
      map((courses: Course[]) =>
        courses.filter((course) => course.category === 'ADVANCED')
      )
    );
  }
}

function createHttpObservable(url: string) {
  return Observable.create((observer) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        observer.next(body);
        observer.complete();
      })
      .catch((err) => {
        observer.error(err);
      });
  });
}
```

```html
<div>
  {{ beginnerCourses$ | async | json }}
</div>
```

6. Simple observable using concat and of

- of operator is allowing us to create stream of some values

- concat will automatically subscribe to each individual observable proivded to it and will execute one by one. For example if there is case, where our first observable will never complete the second and third will never be executed.

```typescript
import { of, concat } from 'rxjs';
export class AppComponent implements OnInit {
  ngOnInit() {
    const source1$ = of(1, 2, 3);
    const source2$ = of(4, 5, 6);
    const source3$ = of(7, 8, 9);

    const result$ = concat(source1$, source2$, source3$);
    result$.subscribe((val) => console.log(val));
  }
}
```
