# Card Game
Today we are going to write the simple beginnings of a card game. We will write this code together so that you can have a working program that you can finish later if you wish.

## Step 1:
Create a folder on your computer called ```cardGame```

## Step 2:
Create the following files: ```index.html```, ```main.js```, and ```master.css```

## Step 3:
Paste the following code in your ```index.html```

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="master.css">
    <title></title>
  </head>
  <body>
    <h1>Card Game</h1>
    <p>Access your console to see the results of your code</p>

    <button id="shuffle">Shuffle</button>
    <button id="draw">Draw</button>
    <button id="clear">Clear</button>
    <button id="reset">Reset</button>
    <div class="table">
      <!-- Cards will render here -->
    </div>
    <script type="text/javascript" src="main.js"></script>
  </body>
</html>

```

## Step 4:
Past the following code in your ```main.js```

```javascript
// Table Functionality
function table() {

  function clear() {

  }

  function render() {
    let table = document.querySelector('.table')
    table.innerHTML = []
    let cards = Table.cards.map(c => {
      return `
        <div class="card">
          <h1 class="${c.suite}">${c.rank}</h1>
        </div>
      `
    })
    table.innerHTML = cards
  }

  return {

  }
}

// Deck Functionality
function deck() {
  let cards = makeDeck()

  function makeDeck() {
    let suits = [ "hearts", "diamonds", "clubs", "spades" ]
    let ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ]

  }

  function drawCard() {

  }

  function shuffleDeck() {

  }

  function reset() {

  }

  return {

  }
}

// Initiate our functions by invoking them
let Deck = deck()
let Table = table()

```

## Step 5:
Paste the following in your ```master.css```:
```css

* {
  box-sizing: border-box;
}

button{
  padding: 10px;
  background-color: rgb(140, 182, 190);
}

.table {
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px #000;
  background-color: #fff;
  font-size: 20px;
  text-align: center;
  font-family: Asap, Avenir, Arial, sans-serif;
  width: 80px;
  height: 120px;
  line-height: 200px;
  top:0;
  border-radius: 10px;
}

.hearts,
.diamonds {
    color: red;
}
.clubs,
.spades {
    color: black;
}

.diamonds:after {
  content: "♦";
  height: auto;
  width: 50px;
}

.spades:after {
  content: "♠";
}

.clubs:after {
  content: "♣";
}

.hearts:after {
  content: "♥";
}

```

## Fisher-Yates Shuffle:
One thing that you notice in the code is that there is a method we have called ```shuffleDeck```. You are more than welcome to figure out how to write a solution to this if you'd like. However, there is a commonly used solution for shuffling an array. It is called the _Fisher-Yates Shuffle_.

Here is the solution that we will implement into our program:
```javascript
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
```

You can read more about it here if you wish: [Fisher-Yates Shuffle](https://bost.ocks.org/mike/shuffle/)

## Let's Code!
