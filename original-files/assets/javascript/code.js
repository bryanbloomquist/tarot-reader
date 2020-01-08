const threeCardDraw = () => {
  shuffle(deckArray);
  let past = deckArray[0];
  let present = deckArray[1];
  let future = deckArray[2];
  $("#card-deck").empty();
  $('#explore-tarot-display').empty();
  for (let i = 0; i < 3; i++) {
    $("#card-deck").append("<div class='col-4 col-md-3 col-lg-2'><img src='"+deckArray[i].image+"' alt='"+deckArray[i].name+"' class='tarot-cards animated flipInY delay-"+i+"s' value='"+deckArray[i].id+"' /></col>");
  };
  setTimeout(function() {$("#card-deck").append(
    "<div class='col-10 reading'>"+
      "<p><b>The Past:</b> ("+past.name+") "+past.past+"</p>"+
      "<p><b>The Present:</b> ("+present.name+") "+present.present+"</p>"+
      "<p><b>The Future:</b> ("+future.name+") "+future.future+"</p>"+
    "</div>"
  )}, 3000);
  let tarotEls = document.querySelectorAll('.tarot-cards');
  for (let i=0; i<tarotEls.length; i++){
    let tarotEl = tarotEls[i];
    let tValue = tarotEls[i].attributes.value.value;
    tarotEl.addEventListener("click", function() {showTarotModal(tValue);})
  }
};

const yesNoDraw = () => {
  shuffle(deckArray);
  $("#card-deck").empty();
  $('#explore-tarot-display').empty();
  $("#card-deck").append("<div class='col-6 col-md-3'><img src='./assets/images/card-backs/3.png' class='animated slideInLeft' alt='Tarot Card Back' /></div>")
  $("#card-deck").append(
    "<div class='col-9'>"+
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
    let question = $("#userQuestion")[0].value;
    $("#card-deck").empty();
    $("#card-deck").append("<div class='col-6 col-md-3'><img src='"+deckArray[0].image+"' alt='"+deckArray[0].name+"' class='tarot-cards animated flipInY' value='"+deckArray[0].id+"' /></col>");
    $("#card-deck").append(
      "<div class='col-12 col-md-9 reading mb-5'>"+
        "<p>"+question+"</p>"+
        "<p>"+deckArray[0].yesno+"</p>"+
      "</div>"
    );
    let tarotEl = document.querySelector('.tarot-cards');
    let tValue = deckArray[0].id;
    tarotEl.addEventListener("click", function() {
      showTarotModal(tValue);
    })
  }
};

const exploreTarot = () => {
  $("#card-deck").empty();
  $('#explore-tarot-display').empty();
  $("#card-deck").html(
    "<button type='button' class='btn btn-outline-light explorer m-1' id='majorArcana'>Major Arcana</button>"+
    "<button type='button' class='btn btn-outline-light explorer m-1' id='suitOfCups'>Suit of Cups</button>"+
    "<button type='button' class='btn btn-outline-light explorer m-1' id='suitOfPentacles'>Suit of Pentacles</button>"+
    "<button type='button' class='btn btn-outline-light explorer m-1' id='suitOfSwords'>Suit of Swords</button>"+
    "<button type='button' class='btn btn-outline-light explorer m-1' id='suitOfWands'>Suit of Wands</button>"
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
  let min, max;
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
      "<img src='"+rwTarotDeck[i].image+"' alt='"+rwTarotDeck[i].name+"' value='"+rwTarotDeck[i].id+"' class='tarot-cards'/>"
    )
  }; 
  let tarotEls = document.querySelectorAll('.tarot-cards');
  for (let i=0; i<tarotEls.length; i++){
    let tarotEl = tarotEls[i];
    let tValue = tarotEls[i].attributes.value.value;
    tarotEl.addEventListener("click", function() {
      showTarotModal(tValue);
    })
  }
}

const showTarotModal = (tVal) => {
  $("#tarot-modal").modal("show");
  $("#tarot-modal-row").empty();
  $("#tarot-modal-row").html(
    "<div class='col-8 col-sm-4 mx-auto p-0'>"+
      "<img src='"+rwTarotDeck[tVal].image+"' alt='"+rwTarotDeck[tVal].name+"' style='width:100%' />"+
    "</div>"+ 
    "<div class='col-12 col-sm-8'>"+
      "<h1>"+rwTarotDeck[tVal].name+"</h1><hr />"+
      "<p>"+rwTarotDeck[tVal].keywords+"</p><hr />"+
      "<p>"+rwTarotDeck[tVal].general+"</p>"+
    "</div>"
  );
}