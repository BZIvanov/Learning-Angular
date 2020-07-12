## Working with HTTP

You need to have the HttpClientModule imported in your module file in order to use it.

## Example Post request

```typescript
// this is our service where we have the logic extracted from the component
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  createPost(title: string, body: string) {
    const postData = { userId: 1, title, body };
    return this.http.post(
      'https://jsonplaceholder.typicode.com/posts',
      postData
    );
  }
}
```

```typescript
// this is our ts component file
export class AppComponent {
  constructor(private postsService: PostsService) {}

  onCreatePost(postData: { title: string; body: string }) {
    this.postsService.createPost(postData.title, postData.body).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
```

```html
<!-- this is our html file -->
<form #myForm="ngForm" (ngSubmit)="onCreatePost(myForm.value)">
  <input type="text" name="title" ngModel />
  <textarea name="body" ngModel></textarea>
  <button type="submit">Submit</button>
</form>
```
