<div align="center">
  <h1>functional-conditional</h1>

  <b>Switch Statement: The Functional Way</b>
</div>

## Usage

Turn this:

```ts
let result = null;

switch (someValue) {
  case 0:
    result = 'zero';
    break;
  case 1:
    result = 'one';
    break;
  case 2:
    result = 'two';
    break;
}
```

Into this:

```ts
import conditional from 'functional-conditional';

const result = conditional<number, string>([
  { if: 0, then: 'zero' },
  { if: 1, then: 'one' },
  { if: 2, then: 'two' },
])(someValue);
```

## License

MIT
