# stdbob

Standard libraries for Bobine WebAssembly VM

```bash
npm install @hazae41/stdbob
```

[**📦 NPM**](https://www.npmjs.com/package/@hazae41/stdbob)

## Usage

Just import the library from your AssemblyScript file

```tsx
import { modules, blobref } from "@hazae41/stdbob"

export function main(): blobref {
  return modules.self()
}
```