# js-shuffle
Array shuffle

### Install

```bash
npm install js-shuffle
```

### Usage

```js
var shuffle = require('js-shuffle');
var array = ['text1', 'text2', 'text3', 'text4', 'text5', 'text6', 'text7'];
var result = shuffle(array, 2);
```

> params: shuffle( [Array] [Number] )

### Client

Usage: cli shuffle -t [items...] [item length]

Options:

  -h, --help             output usage information
  -V, --version          output the version number
  -f, --file [filename]  Load the file, the shuffle of multiple items
  -t, --text [str]       Text items shuffle, ("text1|text2...")
  -n, --num [number]   

```bash
shuffle -t "text1|text2|text3|text4|text5|text6|text7" -n 2

shuffle -f ./file.txt > output.txt
```
