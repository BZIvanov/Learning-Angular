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

## Local reference

Note that this local reference is only usable in our component html file.

```typescript
// this is our ts component file
export class MyComponent {
  onGetValue(elValue: HTMLInputElement) {
    console.log(elValue.value);
  }
}
```

```html
<!-- this is our html component file -->
<input type="text" #myElement />
<button (click)="onGetValue(myElement)">Click</button>
```

## Content between component tags

```html
<!-- this is our html parent component file -->
<app-person-details>
  <p>I am inside component tags</p>
</app-person-details>
```

```html
<!-- this is our html child component file -->
<p>This is similar to react children</p>
<ng-content></ng-content>
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

## Custom Directives

This approach would work, but accessing the DOM elements is not a good practice.

```typescript
// this is our ts module file
@NgModule({
  declarations: [BasicHighlightDirective],
})
export class AppModule {}
```

```typescript
// this is our ts directive file
@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'blue'
    );
  }
}
```

```html
<!-- this is our html file using the directive -->
<p appBasicHighlight>I am inside component tags</p>
```

This is better approach, than previous and we can also react to some events, not just static behaviour

```typescript
// this is our ts module file
@NgModule({
  declarations: [BasicHighlightDirective],
})
export class AppModule {}
```

```typescript
// this is our ts directive file
@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'blue'
    );
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'transparent'
    );
  }
}
```

```html
<!-- this is our html file using the directive -->
<p appBasicHighlight>I am inside component tags</p>
```

Alternative to the above

- HostBinding allows us to bind to standard attributes on html elements from the dom tree

```typescript
// this is our ts module file
@NgModule({
  declarations: [BasicHighlightDirective],
})
export class AppModule {}
```

```typescript
// this is our ts directive file
@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor() {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
  }
}
```

```html
<!-- this is our html file using the directive -->
<p appBasicHighlight>I am inside component tags</p>
```

## ngSwitch

```typescript
// this is our ts component file
export class AppComponent {
  value = 10;
}
```

```html
<!-- this is our html component file -->
<div [ngSwitch]="value">
  <p *ngSwitchCase="5">Value is 5</p>
  <p *ngSwitchCase="10">Value is 10</p>
  <p *ngSwitchCase="15">Value is 15</p>
  <p *ngSwitchDefault>Default value</p>
</div>
```

### Custom structural directive

- Input - the value we receive from the html file
- set - will update the directive, whenever the value from html file changes
- TemplateRef - the content of the template we will conditionally render
- ViewContainerRef - the location in our html file, where we want to render the template

```typescript
// this is our ts directive file
@Directive({
  selector: '[appCustom]',
})
export class CustomDirective {
  // make sure the name is exactly as the selector
  @Input() set appCustom(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
```

```html
<!-- this is our html file using the directive -->
<div *appCustom="true">
  <ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
</div>
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

## Services

- To inform Angular of the service we want to use, we specify them in the providers array

- In the constructor we need to specify the typescript type of what we want to use as dependency injection, which is our service and Angular will handle creating the instance of the class and providing it to us

- Services have hierarchy structure. If we specify service in the providers array, the component and all it's children will have access to it, but if we also provide the service in one of the child components we will be given new instance of the service and will not inherit from the parent. If we want to use service from parent in child component all we need to do is to specify in the constructor of the component, but not in the providers array.

- For services we need to use @Injectable decorator. It is used in case we want to inject another service in the constructor, but even if we don't inject anything it is still recommended to have injectable decorator. To inject another service in our service, our service needs to be in the providers of the module, not the component.

## Routing

- When using routerLink directive on anchor element if we don't specify '/' the path will be relative (appended to already existing path) otherwise it will be absolute.

### Basic setup

Below file will could be slightly different if it was another module, where we set routes directly in it, not using file specificaly for routing.

```typescript
// this is our app routing module file
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'chocolates',
    component: ChocolatesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

Router outlet is the way to tell Angular, where we want the component matching the url to be rendered

```html
<!-- this is our html file with the navigation -->
<ul>
  <li>
    <a
      routerLink="/"
      routerLinkActive="myStyle"
      [routerLinkActiveOptions]="{ exact: true }"
      >Home</a
    >
  </li>
  <li><a routerLink="/users" routerLinkActive="myStyle">Users</a></li>
  <li>
    <a [routerLink]="['/chocolates']" routerLinkActive="myStyle">Chocolates</a>
  </li>
</ul>

<router-outlet></router-outlet>
```

```css
/* this is the css file with styles for the active route */
.myStyle {
  color: orange;
  background-color: orchid;
}
```

### Navigate programatically

- with absolute path

```typescript
// this is our ts component file
export class HomeComponent {
  constructor(private router: Router) {}

  changePage() {
    this.router.navigate(['/chocolates']);
  }
}
```

```html
<!-- this is our html component file -->
<button (click)="changePage()">Redirect</button>
```

- with relative path

With Route we can get our current path

```typescript
// this is our ts component file
export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  changePage() {
    this.router.navigate(['chocolates'], { relativeTo: this.route });
  }
}
```

```html
<!-- this is our html component file -->
<button (click)="changePage()">Redirect</button>
```

## ng-container

- ng-container could be used similarly to react fragment if we want to put something conditionally without adding additional elements.

## ISSUES

- issue with VS code with experimentalDecoratos
- solution: go to File -> Preference -> Settings and add this option

```
"javascript.implicitProjectConfig.experimentalDecorators": true
```
