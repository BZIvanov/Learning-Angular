## Template Driven Forms

- Make sure you have imported FormsModule in order to use template forms.

```typescript
// this is our ts component file
export class AppComponent {
  @ViewChild('myForm') userForm: NgForm;
  defaultItem = 'red';

  onSubmit() {
    console.log(this.userForm.value.username);
    this.userForm.reset();
  }
}
```

```html
<!-- this is our html component file -->
<form #myForm="ngForm" (ngSubmit)="onSubmit()">
  <div>
    <input type="text" name="username" required ngModel #username="ngModel" />
    <p *ngIf="!username.valid && username.touched">Username is required</p>
  </div>

  <select name="color" [ngModel]="defaultItem">
    <option value="red">Red</option>
    <option value="green">Green</option>
  </select>

  <button type="submit" [disabled]="!myForm.valid">Submit</button>
</form>
```

```css
input.ng-invalid.ng-touched {
  border: 1px solid red;
}
```

## Reactive Forms

- Make sure you have imported ReactiveFormsModule in order to use reactive forms.

### Basic setup

```typescript
// this is our ts component file
export class AppComponent implements OnInit {
  userForm: FormGroup;

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    console.log(this.userForm);
  }
}
```

```html
<!-- this is our html component file -->
<form [formGroup]="userForm" (ngSubmit)="(onSubmit)">
  <div>
    <input type="text" formControlName="username" />
    <span
      *ngIf="
        !userForm.get('username').valid && userForm.get('username').touched
      "
      >Please enter valid username!</span
    >
  </div>
  <div>
    <input type="text" formControlName="email" />
    <span *ngIf="!userForm.get('email').valid && userForm.get('email').touched"
      >Please enter valid email!</span
    >
  </div>
  <button type="submit">Submit</button>
</form>
```

```css
input.ng-invalid.ng-touched {
  border: 1px solid red;
}
```

### With custom validator

```typescript
// this is our ts component file
export class AppComponent implements OnInit {
  userForm: FormGroup;
  forbiddenUsernames = ['Nikita', 'Djony'];

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.forbiddenNames.bind(this),
      ]),
    });
  }

  onSubmit() {
    console.log(this.userForm);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }
}
```

```html
<!-- this is our html component file -->
<form [formGroup]="userForm" (ngSubmit)="(onSubmit)">
  <div>
    <input type="text" formControlName="username" />
    <span
      *ngIf="
        userForm.get('username').errors &&
        userForm.get('username').errors['nameIsForbidden']
      "
      >This name is forbidden!</span
    >
  </div>
  <button type="submit">Submit</button>
</form>
```

```css
input.ng-invalid.ng-touched {
  border: 1px solid red;
}
```

### With asynchronous custom validator

```typescript
// this is our ts component file
export class AppComponent implements OnInit {
  userForm: FormGroup;
  forbiddenUsernames = ['Nikita', 'Djony'];

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl(
        null,
        [Validators.required],
        this.forbiddenNames
      ),
    });
  }

  onSubmit() {
    console.log(this.userForm);
  }

  forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Nikita') {
          resolve({ nameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
```

```html
<!-- this is our html component file -->
<form [formGroup]="userForm" (ngSubmit)="(onSubmit)">
  <div>
    <input type="text" formControlName="username" />
    <span
      *ngIf="
        userForm.get('username').errors &&
        userForm.get('username').errors['nameIsForbidden']
      "
      >This name is forbidden!</span
    >
  </div>
  <button type="submit">Submit</button>
</form>
```

```css
input.ng-invalid.ng-touched {
  border: 1px solid red;
}
```
