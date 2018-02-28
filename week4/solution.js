
// Table Functionality
function table() {
  let cards = []

  function clear() {
    Table.cards = []
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
    cards: cards,
    render: render,
    clear: clear
  }
}

// Deck Functionality
function deck() {
  let cards = makeDeck()

  function makeDeck() {
    let suits = [ "hearts", "diamonds", "clubs", "spades" ]
    let ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ]
  	let deck = []
  	suits.forEach(s => {
  		ranks.forEach(r => {
  			let card = {}
  			card.suite = s
  			card.rank = r
  			deck.push(card)
  		})
  	})
    return deck
  }

  function drawCard() {
    if (Deck.cards.length > 0) {
      Table.cards.push(Deck.cards[0])
      Deck.cards.splice(0, 1)
      // remove card from top of deck and move to table
    } else {
      console.log('No cards left to draw')
    }
  }

  function shuffleDeck() {
    let copy = []
    let n = Deck.cards.length
    let i = undefined
    while (n) {
      i = Math.floor(Math.random() * n--);
      copy.push(Deck.cards.splice(i, 1)[0]);
    }
    Deck.cards = copy
  }

  function reset() {
    Deck.cards = makeDeck()
  }

  return {
    cards: cards,
    draw: drawCard,
    shuffle: shuffleDeck,
    reset: reset
  }
}

// Initiate our functions by invoking them
let Deck = deck()
let Table = table()


// Event Handlers
let shuffle = document.querySelector('#shuffle')
let draw = document.querySelector('#draw')
let clear = document.querySelector('#clear')
let reset = document.querySelector('#reset')

shuffle.addEventListener('click', e => {
  Deck.shuffle()
})
draw.addEventListener('click', e => {
  Deck.draw()
  Table.render()
})
clear.addEventListener('click', e => {
  Table.clear()
  Table.render()
})
reset.addEventListener('click', e => {
  Table.clear()
  Table.render()
  Deck.reset()
})
