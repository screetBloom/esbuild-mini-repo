# esbuild-mini-repo
- bug1: [tsup#369](https://github.com/egoist/tsup/issues/369)
- bug2: [esbuild#1579](https://github.com/evanw/esbuild/issues/1579)

<br>

## Steps to reproduce

``` shell
node ./build
```

<br>
<br>
<p style="color:red">Error:</p>
<br>

``` js
/Users/esbuild-mini-repo/build/index.js:10
    __require.resolve("vue")
              ^

TypeError: __require.resolve is not a function
    at /Users/esbuild-mini-repo/build/index.js:10:15
    at Object.<anonymous> (/Users/esbuild-mini-repo/build/index.js:13:3)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47
```



