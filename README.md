# lastreturn

get the last return value of a function as argument in the next call

```javascript
var lastreturn = require('lastreturn');

var normalize = lastreturn(function(val, last) {
  if (val !== last) console.log(val);
  return val;
});

normalize('a');
normalize('a');
normalize('b');
normalize('b');
normalize('b');
normalize('c');
normalize('c');

// will output: abc
```


## Installation

### Node

```npm install lastreturn```

## License
Copyright (c) 2014 Simon Kusterer
Licensed under the MIT license.
