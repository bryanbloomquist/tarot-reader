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
let past, present, future;

const threeCardDraw = () => {
  shuffle(deckArray);
  past = deckArray[0];
  present = deckArray[1];
  future = deckArray[2];
  $("#card-deck").empty();
  $("#card-deck").append("<div class='col-3'><img src='./assets/images/card-backs/3.png' alt='Tarot Card Back' /></div>")
  for (let i = 0; i < 3; i++) {
    $("#card-deck").append("<div class='col-3'><img src='"+deckArray[i].image+"' alt='"+deckArray[i].name+"' /></col>");
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
  $("#card-deck").append("<div class='col-3'><img src='./assets/images/card-backs/3.png' alt='Tarot Card Back' /></div>")
  $("#card-deck").append(
    "<div class='col-9'>"+
      "<div class='input-group mb-3'>"+
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
    console.log("you are here");
    $("#card-deck").append("<div class='col-3'><img src='"+deckArray[0].image+"' alt='"+deckArray[0].name+"' /></col>");
    $("#card-deck").append("<div class='col-9 reading'><p>"+deckArray[0].yesno+"</p></div>");
  }
}