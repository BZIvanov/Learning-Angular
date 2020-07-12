## Pipes

There are some built-in pipes and we can also build custom pipes

### Built in pipes example

#### Simple usage

Uppercase pipe as name suggests will make all letters capital. Keep in mind if you use pipe on invalid data type it will throw an error in case capitalizing on the text is impossible.

```typescript
// this is our ts component file
export class AppComponent {
  username = 'Iva';
}
```

```html
<!-- this is our html component file -->
<p>{{ username | uppercase }}</p>
```

#### Providing pipe with parameter

After the colon are our parameters

```typescript
// this is our ts component file
export class AppComponent {
  birthdate = new Date();
}
```

```html
<!-- this is our html component file -->
<p>{{ birthdate | date: "fullDate" }}</p>
```

#### Chaining multiple pipes

Keep in mind, that the order we use our pipes matters. They are executed from left to right. If we use uppercase first we will get an error, because we will use uppercase on date before it is turned into string.

```typescript
// this is our ts component file
export class AppComponent {
  birthdate = new Date();
}
```

```html
<!-- this is our html component file -->
<p>{{ birthdate | date: "fullDate" | uppercase }}</p>
```

#### Custom pipe

Custom pipes are specified in the declarations array of the module to let Angular knows about their existance.

1. Basic usage

```typescript
// this is our ts pipe file
@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 10) {
      return value.substr(0, 10) + '...';
    }
    return value;
  }
}
```

```typescript
// this is our ts component file
export class AppComponent {
  longText = 'This text will be shorten to 10 characters displayed';
}
```

```html
<!-- this is our html component file -->
<p>{{ longText | shorten | uppercase }}</p>
```

2. With parameters

```typescript
// this is our ts pipe file
@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (value.length > limit) {
      return value.substr(0, limit) + '...';
    }
    return value;
  }
}
```

```typescript
// this is our ts component file
export class AppComponent {
  longText = 'This text will be shorten to 10 characters displayed';
}
```

```html
<!-- this is our html component file -->
<p>{{ longText | shorten: 5 | uppercase }}</p>
```
