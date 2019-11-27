//fisher-yates shuffle method
const shuffle = (array) => {
	let i = 0, j = 0, temp = null
	for (i = array.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};

let deckArray = rwTarotDeck;
let past, present, future, question, min, max;

const threeCardDraw = () => {
  shuffle(deckArray);
  past = deckArray[0];
  present = deckArray[1];
  future = deckArray[2];
  $("#card-deck").empty();
  $('#explore-tarot-display').empty();
  $("#card-deck").append("<div class='col-2'><img src='./assets/images/card-backs/3.png' alt='Tarot Card Back' /></div>")
  for (let i = 0; i < 3; i++) {
    $("#card-deck").append("<div class='col-2'><img src='"+deckArray[i].image+"' alt='"+deckArray[i].name+"' /></col>");
  }
  $("#card-deck").append(
    "<div class='col-12 reading'>"+
      "<p><b>The Past:</b> ("+past.name+") "+past.past+"</p>"+
      "<p><b>The Present:</b> ("+present.name+") "+present.present+"</p>"+
      "<p><b>The Future:</b> ("+future.name+") "+future.future+"</p>"+
    "</div>"
  )
};

const yesNoDraw = () => {
  shuffle(deckArray);
  $("#card-deck").empty();
  $("#card-deck").append("<div class='col-2'><img src='./assets/images/card-backs/3.png' alt='Tarot Card Back' /></div>")
  $("#card-deck").append(
    "<div class='col-10'>"+
      "<div class='input-group mb-1'>"+
        "<input type='text' class='form-control' id='userQuestion' placeholder='Enter your Yes/No question here...' aria-label='Users Question' aria-describedby='submitButton'>"+
        "<div class='input-group-append'>"+
          "<button class='btn btn-outline-light' type='button' id='submitButton' onclick=askQuestion()>Submit</button>"+
        "</div>"+
      "</div>"+
    "</div>"
  )
  $("#userQuestion").focus();
};

const askQuestion = () => {
  if (document.querySelector("#userQuestion").value){
    question = $("#userQuestion")[0].value;
    $("#card-deck").empty();
    $("#card-deck").append("<div class='col-2'><img src='./assets/images/card-backs/3.png' alt='Tarot Card Back' /></div>")
    $("#card-deck").append("<div class='col-2'><img src='"+deckArray[0].image+"' alt='"+deckArray[0].name+"' /></col>");
    $("#card-deck").append(
      "<div class='col-8 reading'>"+
        "<p>'"+question+"'</p>"+
        "<p>"+deckArray[0].yesno+"</p>"+
      "</div>"
    );
  }
};

const exploreTarot = () => {
  $("#card-deck").empty();
  $('#explore-tarot-display').empty();
  $("#card-deck").html(
    "<button type='button' class='btn btn-outline-light explorer m-3' id='majorArcana'>Major Arcana</button>"+
    "<button type='button' class='btn btn-outline-light explorer m-3' id='suitOfCups'>Suit of Cups</button>"+
    "<button type='button' class='btn btn-outline-light explorer m-3' id='suitOfPentacles'>Suit of Pentacles</button>"+
    "<button type='button' class='btn btn-outline-light explorer m-3' id='suitOfSwords'>Suit of Swords</button>"+
    "<button type='button' class='btn btn-outline-light explorer m-3' id='suitOfWands'>Suit of Wands</button>"
  )
  let deckEls = document.querySelectorAll(".explorer");
  for (let i=0; i<deckEls.length; i++){
    let deckEl = deckEls[i]
    deckEl.addEventListener("click", function() {
      displayCards(deckEl.id);
    })
  }
};

const displayCards = (option) => {
  switch(option) {
    case "majorArcana":
      min = 0;
      max = 21;
      break;
    case "suitOfCups":
      min = 36;
      max = 49;
      break;
    case "suitOfPentacles":
      min = 64;
      max = 77;
      break;
    case "suitOfSwords":
      min = 50;
      max = 63;
      break;
    case "suitOfWands":
      min = 22;
      max = 35;
      break;
  }
  $('#explore-tarot-display').empty();
  for (let i = min; i <= max; i++) {
    $('#explore-tarot-display').append(
      "<img src='"+rwTarotDeck[i].image+"' alt='"+rwTarotDeck[i].name+"' value='"+rwTarotDeck[i].id+"' />"
    )
  };  
}