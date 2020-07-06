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
// this is our html component file
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
// this is our html component file
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
// this is our html component file
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
// this is our html component file
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
// this is our html component file
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
// this is our html component file
<p *ngIf="isThere">Paragraph</p>
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
