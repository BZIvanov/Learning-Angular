# Getting started and installation

Go to Angular [setup](https://angular.io/guide/setup-local) page and follow the installation steps.

## Data binding

### String interpolation

```typescript
// this is our ts component file
export class AppComponent {
  user = 'Iva';

  greeting() {
    return 'Hello';
  }
}
```

```html
<!-- this is our html component file -->
<p>{{ greeting() }} from {{ user }}</p>
```

### Property binding

```typescript
// this is our ts component file
export class AppComponent {
  isCorrect = false;
}
```

```html
<!-- this is our html component file -->
<button [disabled]="!isCorrect">Click me</button>
```

### Event binding

1. Without providing the event

```typescript
// this is our ts component file
export class AppComponent {
  name = 'Iva';

  changeName() {
    this.name = 'Martin';
  }
}
```

```html
<!-- this is our html component file -->
<button (click)="changeName()">Switch user</button>
<p>{{ name }}</p>
```

2. With event provided

```typescript
// this is our ts component file
export class AppComponent {
  name = 'Iva';

  updateName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }
}
```

```html
<!-- this is our html component file -->
<input type="text" (input)="updateName($event)" />
<p>{{ name }}</p>
```

### Two-way data binding

```typescript
// this is our module ts file containing the below component
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [FormsModule],
})
export class AppModule {}
```

```typescript
// this is our ts component file
export class AppComponent {
  username = 'Iva';
}
```

```html
<!-- this is our html component file -->
<input type="text" [(ngModel)]="username" />
<p>{{ username }}</p>
```

## Directives

### Structural directives

Structural directives are directives which can change the structure of the DOM, meaning some element can exist or not, not just hidden.

1. ngIf

```typescript
// this is our ts component file
export class AppComponent {
  isThere = true;
}
```

```html
<!-- this is our html component file -->
<p *ngIf="isThere">Paragraph</p>
```

2. ngFor

```typescript
// this is our ts component file
export class AppComponent {
  users = ['Iva', 'Martin', 'Eli'];
}
```

```html
<!-- this is our html component file -->
<p *ngFor="let user of users">{{ user }}</p>
```

3. ngFor with index

```typescript
// this is our ts component file
export class AppComponent {
  users = ['Iva', 'Martin', 'Eli'];
}
```

```html
<!-- this is our html component file -->
<p *ngFor="let user of users; let idx = index">
  {{ user }} with index {{ idx }}
</p>
```

### Other directives

1. ngStyle

```typescript
// this is our ts component file
export class AppComponent {
  allowed = true;

  getColor() {
    return this.allowed ? 'green' : 'red';
  }
}
```

Note that using square brackets is just because we want to do propety bindings to use the value from the component. Square brackets are not closely related to the directive

```html
<!-- this is our html component file -->
<p [ngStyle]="{ backgroundColor: getColor() }">Paragraph</p>
```

2. ngClass

```typescript
// this is our ts component file
export class AppComponent {
  user = 'Iva';
}
```

```html
<!-- this is our html component file -->
<p [ngClass]="{ online: user.length > 0 }">{{ user }}</p>
```

```css
/* this is our html component file */
.online {
  color: green;
}
```

## Props from parent to child

### Input decorator

```typescript
// this is our ts parent component file
export class AppComponent {
  persons = [
    { name: 'Iva', hobby: 'dancing', age: 27 },
    { name: 'Martin', hobby: 'football', age: 25 },
  ];
}
```

```html
<!-- this is our html parent component file -->
<app-person-details *ngFor="let person of persons" [person]="person">
</app-person-details>
```

Here is the child component without using alias

```typescript
// this is our ts child component file
export class PersonDetailsComponent {
  @Input() person: { name: string; hobby: string; age: number };
}
```

```html
<!-- this is our html child component file -->
<p>{{ person.name }}</p>
```

Here is the child component using alias

```typescript
// this is our ts child component file
export class PersonDetailsComponent {
  @Input('person') personProps: { name: string; hobby: string; age: number };
}
```

```html
<!-- this is our html child component file -->
<p>{{ personProps.name }}</p>
```

## Props from child to parent

### Output decorator and Event Emitter

```typescript
// this is our ts parent component file
export class AppComponent {
  persons = [
    { name: 'Iva', hobby: 'dancing', age: 27 },
    { name: 'Martin', hobby: 'football', age: 25 },
  ];

  onPersonAdd(person: { name: string; hobby: string; age: number }) {
    const { name, hobby, age } = person;
    this.persons.push({
      name,
      hobby,
      age,
    });
  }
}
```

```html
<!-- this is our html parent component file -->
<app-create-person (addPerson)="onPersonAdd($event)"></app-create-person>
```

```typescript
// this is our ts child component file
export class CreatePersonComponent {
  @Output() addPerson = new EventEmitter<{
    name: string;
    hobby: string;
    age: number;
  }>();

  onCreatePerson() {
    this.addPerson.emit({
      name: 'Eli',
      hobby: 'skiing',
      age: 24,
    });
  }
}
```

```html
<!-- this is our html child component file -->
<button (click)="onCreatePerson()">Create User</button>
```

## Scoped styles

```typescript
@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CreatePersonComponent {}
```

## ng generate

With the CLI we can automatically create modules, components, service etc. instead of creating them manually.

To learn more options check [here](https://angular.io/cli/generate)

## @NgModule

NgModule decorator contains object with some key configuring the below class. They are:

- **declarations** - array of our module components, just the components for the specific module.
- **imports** - array of our module modules, the modules our module is using.
- **providers** - array of our module services, services used by our module.
- **bootstrap** - array of component with which our application will start. This is used in our main module which will tell angular with which root component app will start.

## ISSUES

- issue with VS code with experimentalDecoratos
- solution: go to File -> Preference -> Settings and add this option

```
"javascript.implicitProjectConfig.experimentalDecorators": true
```
