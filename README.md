# c++ -> wasm -> ts

Now that emcc supports ts, you only need to run the following command.

```bash
emcc -lembind ./src/test.cpp -o ./test/test.js --emit-tsd test.d.ts -s MODULARIZE=1 -s EXPORT_ES6=1
```

easy test:

```bash
npx tsx ./test/main.ts
```