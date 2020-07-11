## Example with subscribe and unsubscribe

When creating custom observables we need to manually unsubscribe, because in this case the counter will keep counting even if we leave the component and if we return back to the component we will even start more counters which will be bad for app performance.

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({})
export class HomeComponent implements OnInit, OnDestroy {
  private countSubs: Subscription;

  ngOnInit(): void {
    this.countSubs = interval(1000).subscribe((count) => {
      console.log(count);
    });
  }

  ngOnDestroy(): void {
    this.countSubs.unsubscribe();
  }
}
```

## Custom Observable and how it works

After we subscribe we will get 3 functions: for data, for potential errors and for comleted.

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component()
export class HomeComponent implements OnInit, OnDestroy {
  private countSubs: Subscription;

  ngOnInit(): void {
    const customObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        if (count === 2) {
          observer.complete();
        }

        if (count > 3) {
          observer.error(new Error('Count is greater than 3'));
        }

        count++;
      }, 1000);
    });

    this.countSubs = customObservable.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Completed');
      }
    );
  }

  ngOnDestroy(): void {
    this.countSubs.unsubscribe();
  }
}
```
