```
// 父組件
mitt.on('get-data', (msg) => {
  console.log(msg);
});
```

```
// 子組件
mitt.emit('get-data', 123);
```
