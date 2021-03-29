//VIDEO
setTimeout(function(){
    $("#vid").fadeOut(4000);
}, 4000)

setTimeout(function(){
    $("#map").fadeIn(4000);
}, 4000)

//TEXT FADING INTO BACKGROUND

setTimeout(function(){
    $(".menu-text").fadeOut(4000);
}, 4000)

setTimeout(function(){
    $(".menu-text-2").fadeIn(4000);
}, 4000)


//FUTURE VIEW 


$(document).ready(function() {
        $('#toggle').click(function() {
                $('#future').fadeIn("slide");
        });
    });



$(document).ready(function() {
        $('#toggle').click(function() {
                $('#future').fadeIn("slide");
        });
    });


//QUOTES 
$(document).ready(function() {
        $('.h2').click(function() {
				$('.underlay').fadeToggle();	
        });
    });

$(document).ready(function() {
        $('.outerblob').click(function() {
				$('.navbar').fadeToggle();
				$('#nav-line').fadeToggle();
				$('.ages').fadeToggle();
				$('.nav-line-circle').fadeToggle();
				$('.circle-container').fadeToggle();
				$('.toggle-class').fadeToggle();
				$('.cocurrent').fadeToggle();
        });
	
		$('.innerblob').click(function() {
				$('.navbar').fadeToggle();
				$('#nav-line').fadeToggle();
				$('.ages').fadeToggle();
				$('.nav-line-circle').fadeToggle();
				$('.circle-container').fadeToggle();
				$('.toggle-class').fadeToggle();
				$('.cocurrent').fadeToggle();
        });
	
		$('.blob').click(function() {
				$('.navbar').fadeToggle();
				$('#nav-line').fadeToggle();
				$('.ages').fadeToggle();
				$('.nav-line-circle').fadeToggle();
				$('.circle-container').fadeToggle();
				$('.toggle-class').fadeToggle();
				$('.cocurrent').fadeToggle();
        });
	
		$('.small-blob').click(function() {
				$('.navbar').fadeToggle();	
				$('#nav-line').fadeToggle();
				$('.ages').fadeToggle();
				$('.nav-line-circle').fadeToggle();
				$('.circle-container').fadeToggle();
				$('.toggle-class').fadeToggle();
				$('.cocurrent').fadeToggle();
        });
    });


//education
$(document).ready(function() {
        $('.outerblob-edu').click(function() {
				$('#map').transition({ scale: 1.5, x: -170, y: -160 }, 1000);
				$('.quotes').fadeToggle();	
				$('.q-edu-50').fadeToggle();
				$('.des-edu').fadeToggle();
				$('.cc-education').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.innerblob-edu').click(function() {
				$('#map').transition({ scale: 1.5, x: -170, y: -160 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-edu-40').fadeToggle();
				$('.des-edu').fadeToggle();
				$('.cc-education').fadeToggle();	
        });
    });
$(document).ready(function() {
        $('.blob-edu').click(function() {
				$('#map').transition({ scale: 1.5, x: -170, y: -160 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-edu-30').fadeToggle();
				$('.des-edu').fadeToggle();
				$('.cc-education').fadeToggle();	
			
        });
    });
$(document).ready(function() {
        $('.small-blob-edu').click(function() {
				$('#map').transition({ scale: 1.5, x: -170, y: -160 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-edu-20').fadeToggle();
				$('.des-edu').fadeToggle();
				$('.cc-education').fadeToggle();	
        });
    });

//diversity
$(document).ready(function() {
        $('.outerblob-div').click(function() {
				$('#map').transition({ scale: 1.5, x: -70, y: 200 }, 1000);
				$('.quotes').fadeToggle();	
				$('.q-div-50').fadeToggle();
				$('.des-div').fadeToggle();
				$('.cc-diversity').fadeToggle();	
        });
    });
$(document).ready(function() {
        $('.innerblob-div').click(function() {
				$('#map').transition({ scale: 1.5, x: -70, y: 200 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-div-40').fadeToggle();
				$('.des-div').fadeToggle();
				$('.cc-diversity').fadeToggle();	
        });
    });
$(document).ready(function() {
        $('.blob-div').click(function() {
				$('#map').transition({ scale: 1.5, x: -70, y: 200 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-div-30').fadeToggle();
				$('.des-div').fadeToggle();
				$('.cc-diversity').fadeToggle();	
        });
    });
$(document).ready(function() {
        $('.small-blob-div').click(function() {
				$('#map').transition({ scale: 1.5, x: -70, y: 200 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-div-20').fadeToggle();	
				$('.des-div').fadeToggle();
				$('.cc-diversity').fadeToggle();	
        });
    });

//women
$(document).ready(function() {
        $('.outerblob-women').click(function() {
				$('#map').transition({ scale: 2, x: 240, y: 20 }, 1000);
				$('.quotes').fadeToggle();	
				$('.q-women-50').fadeToggle();	
				$('.des-women').fadeToggle();
				$('.cc-women').fadeToggle();	
        });
    });
$(document).ready(function() {
        $('.innerblob-women').click(function() {
				$('#map').transition({ scale: 2, x: 240, y: 20 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-women-40').fadeToggle();	
				$('.des-women').fadeToggle();
				$('.cc-women').fadeToggle();	
        });
    });
$(document).ready(function() {
        $('.blob-women').click(function() {
				$('#map').transition({ scale: 2, x: 240, y: 20 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-women-30').fadeToggle();	
				$('.des-women').fadeToggle();
				$('.cc-women').fadeToggle();	
        });
    });
$(document).ready(function() {
        $('.small-blob-women').click(function() {
				$('#map').transition({ scale: 2, x: 240, y: 20 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-women-20').fadeToggle();
				$('.des-women').fadeToggle();
				$('.cc-women').fadeToggle();	
        });
    });

//ethics
$(document).ready(function() {
        $('.outerblob-ethics').click(function() {
				$('#map').transition({ scale: 2, x: 140, y: -320 }, 1000);
				$('.quotes').fadeToggle();	
				$('.q-ethics-50').fadeToggle();	
				$('.des-ethics').fadeToggle();
				$('.cc-ethics').fadeToggle();	
        });
    });
$(document).ready(function() {
        $('.innerblob-ethics').click(function() {
				$('#map').transition({ scale: 2, x: 140, y: -320 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-ethics-40').fadeToggle();	
				$('.des-ethics').fadeToggle();
				$('.cc-ethics').fadeToggle();	
        });
    });
$(document).ready(function() {
        $('.blob-ethics').click(function() {
				$('#map').transition({ scale: 2, x: 140, y: -320 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-ethics-30').fadeToggle();	
				$('.des-ethics').fadeToggle();
				$('.cc-ethics').fadeToggle();	
        });
    });
$(document).ready(function() {
        $('.small-blob-ethics').click(function() {
				$('#map').transition({ scale: 2, x: 140, y: -320 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-ethics-20').fadeToggle();
				$('.des-ethics').fadeToggle();
				$('.cc-ethics').fadeToggle();	
        });
    });

//trends
$(document).ready(function() {
        $('.outerblob-trends').click(function() {
				$('#map').transition({ scale: 2, x: 140, y: -320 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-trends-50').fadeToggle();
				$('.des-trends').fadeToggle();
				$('.cc-trends').fadeToggle();	
        });
    });
$(document).ready(function() {
        $('.innerblob-trends').click(function() {
				$('#map').transition({ scale: 2, x: 140, y: -320 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-trends-40').fadeToggle();
				$('.des-trends').fadeToggle();
				$('.cc-trends').fadeToggle();	
        });
    });
$(document).ready(function() {
        $('.blob-trends').click(function() {
				$('#map').transition({ scale: 2, x: 140, y: -320 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-trends-30').fadeToggle();
				$('.des-trends').fadeToggle();
				$('.cc-trends').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.small-blob-trends').click(function() {
				$('#map').transition({ scale: 2, x: 140, y: -320 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-trends-20').fadeToggle();	
				$('.des-trends').fadeToggle();
				$('.cc-trends').fadeToggle();
        });
    });

//ageism
$(document).ready(function() {
        $('.outerblob-age').click(function() {
				$('#map').transition({ scale: 2, x: 400, y: -120 }, 1000);
				$('.quotes').fadeToggle();	
				$('.q-age-50').fadeToggle();
				$('.des-age').fadeToggle();
				$('.cc-age').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.innerblob-age').click(function() {
				$('#map').transition({ scale: 2, x: 400, y: -120 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-age-40').fadeToggle();
				$('.des-age').fadeToggle();
				$('.cc-age').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.blob-age').click(function() {
				$('#map').transition({ scale: 2, x: 400, y: -120 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-age-30').fadeToggle();
				$('.des-age').fadeToggle();
				$('.cc-age').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.small-blob-age').click(function() {
				$('#map').transition({ scale: 2, x: 400, y: -120 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-age-20').fadeToggle();
				$('.des-age').fadeToggle();
				$('.cc-age').fadeToggle();
        });
    });

//white
$(document).ready(function() {
        $('.outerblob-white').click(function() {
				$('#map').transition({ scale: 2, x: 200, y: 220 }, 1000);
				$('.quotes').fadeToggle();	
				$('.q-white-50').fadeToggle();
				$('.des-white').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.innerblob-white').click(function() {
				$('#map').transition({ scale: 2, x: 200, y: 220 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-white-40').fadeToggle();
				$('.des-white').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.blob-white').click(function() {
				$('#map').transition({ scale: 2, x: 200, y: 220 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-white-30').fadeToggle();
				$('.des-white').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.small-blob-white').click(function() {
				$('#map').transition({ scale: 2, x: 200, y: 220 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-white-20').fadeToggle();	
				$('.des-white').fadeToggle();
				$('.cc-white').fadeToggle();
        });
    });

//aut
$(document).ready(function() {
        $('.outerblob-aut').click(function() {
				$('#map').transition({ scale: 2.2, x: -500, y: 120 }, 1000);
				$('.quotes').fadeToggle();	
				$('.q-aut-50').fadeToggle();
				$('.des-aut').fadeToggle();
				$('.cc-aut').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.innerblob-aut').click(function() {
				$('#map').transition({ scale: 2.2, x: -500, y: 120 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-aut-40').fadeToggle();
				$('.des-aut').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.blob-aut').click(function() {
				$('#map').transition({ scale: 2.2, x: -500, y: 120 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-aut-30').fadeToggle();
				$('.des-aut').fadeToggle();
				$('.cc-aut').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.small-blob-aut').click(function() {
				$('#map').transition({ scale: 2.2, x: -500, y: 120 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-aut-20').fadeToggle();	
				$('.des-aut').fadeToggle();
				$('.cc-aut').fadeToggle();
        });
    });


//environment
$(document).ready(function() {
        $('.outerblob-env').click(function() {
				$('#map').transition({ scale: 2.2, x: 600, y: 120 }, 1000);
				$('.quotes').fadeToggle();	
				$('.q-env-50').fadeToggle();
				$('.des-env').fadeToggle();
				$('.cc-env').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.innerblob-env').click(function() {
				$('#map').transition({ scale: 2.2, x: 600, y: 120 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-env-40').fadeToggle();
				$('.des-env').fadeToggle();
				$('.cc-env').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.blob-env').click(function() {
				$('#map').transition({ scale: 2.2, x: 600, y: 120 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-env-30').fadeToggle();
				$('.des-env').fadeToggle();
				$('.cc-env').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.small-blob-env').click(function() {
				$('#map').transition({ scale: 2.2, x: 600, y: 120 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-env-20').fadeToggle();
				$('.des-env').fadeToggle();
				$('.cc-env').fadeToggle();
        });
    });

//acc
$(document).ready(function() {
        $('.outerblob-acc').click(function() {
				$('#map').transition({ scale: 2.2, x: 50, y: -100 }, 1000);
				$('.quotes').fadeToggle();	
				$('.q-acc-50').fadeToggle();
				$('.des-acc').fadeToggle();
				$('.cc-acc').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.innerblob-acc').click(function() {
				$('#map').transition({ scale: 2.2, x: 50, y: -100 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-acc-40').fadeToggle();	
				$('.des-acc').fadeToggle();
				$('.cc-acc').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.blob-acc').click(function() {
				$('#map').transition({ scale: 2.2, x: 50, y: -100 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-acc-30').fadeToggle();
				$('.des-acc').fadeToggle();
				$('.cc-acc').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.small-blob-acc').click(function() {
				$('#map').transition({ scale: 2.2, x: 50, y: -100 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-acc-20').fadeToggle();
				$('.des-acc').fadeToggle();
				$('.cc-acc').fadeToggle();
				
        });
    });


//capitalism
$(document).ready(function() {
        $('.outerblob-cap').click(function() {
				$('#map').transition({ scale: 2.2, x: -500, y: 220 }, 1000);
				$('.quotes').fadeToggle();	
				$('.q-cap-50').fadeToggle();
				$('.des-cap').fadeToggle();
				$('.cc-cap').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.innerblob-cap').click(function() {
				$('#map').transition({ scale: 2.2, x: -500, y: 220 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-cap-40').fadeToggle();
				$('.des-cap').fadeToggle();
				$('.cc-cap').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.blob-cap').click(function() {
				$('#map').transition({ scale: 2.2, x: -500, y: 220 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-cap-30').fadeToggle();
				$('.des-cap').fadeToggle();
				$('.cc-cap').fadeToggle();
        });
    });
$(document).ready(function() {
        $('.small-blob-cap').click(function() {
				$('#map').transition({ scale: 2.2, x: -500, y: 220 }, 1000);
				$('.quotes').fadeToggle();
				$('.q-cap-20').fadeToggle();	
				$('.des-cap').fadeToggle();
				$('.cc-cap').fadeToggle();
        });
    });



//QUOTES - X

$(document).ready(function() {
        $('.chev1').click(function() {
				$('#map').transition({ scale: 1, x: 0, y: 0 }, 1000);
                $('.quotes').fadeToggle();
				$('.navbar').fadeToggle();
				$('#nav-line').fadeToggle();
				$('.nav-line-circle').fadeToggle();
				$('.ages').fadeToggle();
				$('.toggle-class').fadeIn();
				$('.cc-education').fadeOut();
				$('.cc-diversity').fadeOut();
				$('.cc-ethics').fadeOut();
				$('.cc-trends').fadeOut();
				$('.cc-women').fadeOut();
				$('.cc-acc').fadeOut();
				$('.cc-age').fadeOut();
				$('.cc-white').fadeOut();
				$('.cc-env').fadeOut();
				$('.cc-aut').fadeOut();
				$('.cc-cap').fadeOut();
				$('.quote').hide();
				$('.des').hide();
        });
    });


$(document).ready(function() {
        $('.outerblob-trends').click(function() {
				$('.quotes').fadeToggle();	
				$('.q-trends-50').fadeToggle();
				$('.des-trends').fadeToggle();
				$('.cc-trends').fadeToggle();	
        });
    });


  
//TOGGLE FUTURE VIEW

$(document).ready(function() {
        $('.toggle-f').click(function() {
                $('.menu').fadeToggle();
				$('.text-ctr').fadeOut();
				 $('.toggle-class').fadeOut();
        });
    });


$(document).ready(function() {
        $('.toggle-p').click(function() {
                $('.menu').fadeOut();
				$('#response-list').fadeOut();
				$('.text-ctr').fadeIn();
        });
    });


$(document).ready(function() {
        $('.chev2').click(function() {
               $('.menu').fadeOut();
			   $('.text-ctr').fadeIn();
			   $('.quote').fadeOut();
			   $('.toggle-class').fadeIn();
        });
    });


function showInput() {
  document.getElementById('display').innerHTML = 
  document.getElementById("user_input").value;
    }


//JONAH'S CODE

var userInput;
var submitButton;
var database;
var button;
var response;

function setup() {
  canvas = createCanvas(500, 500)
  canvas.parent('userResponse');
  createP("").parent('userResponse');
  userInput = createElement("textarea", "");
  userInput.parent('userResponse')
  submitButton = createButton('SUBMIT');
  submitButton.mousePressed(submitInput);
  submitButton.parent('userResponse')
  
  
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBkA9Q-koFRuZEa2pHvWYMOk2YknhbS7r0",
    authDomain: "dreamscape-11c0d.firebaseapp.com",
    databaseURL: "https://dreamscape-11c0d-default-rtdb.firebaseio.com",
    projectId: "dreamscape-11c0d",
    storageBucket: "dreamscape-11c0d.appspot.com",
    messagingSenderId: "426880240861",
    appId: "1:426880240861:web:14d9a51ae1ea16af2b5f34"
  };
 
  firebase.initializeApp(config); 
  database = firebase.database();
  
  var ref = database.ref('response');
  ref.on('value', gotData, errData)

}

function gotData (data) {
  
  var responseListing = selectAll('.responseListing');
  for (var i = 0; i < responseListing.length; i++){
    responseListing[i].remove();
    
  }
  
  	//console.log(data.val());
    var responses = data.val();
    var keys = Object.keys(responses);
    //console.log(keys);
    for (var i = keys.length-1; i > 0; i--) {
      var k = keys[i];
      var response = responses[k].response;
      var time = responses[k].time
      console.log(response, time);
      var li = createElement('li', response + "<br>" + time);
      li.class('responseListing')
      li.parent(responseList);
    }
}


function errData(data) {
  console.log('Error!');
  console.log(err);
  
}

function submitInput() {
  var data = {
    response: userInput.value(),
    time: (month() + "." + day() + "." + year())
  }
  //console.log(data);
  var ref = database.ref('response')
  ref.push(data);
	
 $('button').click(function(){
  $("#responseList").fadeIn();
  $('button').animate({top: '100px'}, 1000, 'swing');
  $('textarea').animate({top: '100px'}, 1000, 'swing');
  });	
}


$(document).ready(function(){
	$('#edu-h1').arctext({radius: 180});
	$('#div-h1').arctext({radius: 100});
	$('#women-h1').arctext({radius: 100, dir: -1});
	$('#acc-h1').arctext({radius: 110});
	$('#white-h1').arctext({radius: 80});
    $('#env-h1').arctext({radius: 120, dir: -1});
	$('#cap-h1').arctext({radius: 70});
	$('#aut-h1').arctext({radius: 80, dir: -1});
	$('#age-h1').arctext({radius: 60});
	$('#trends-h1').arctext({radius: 60, dir: -1});
	$('#ethics-h1').arctext({radius: 90});
	});


function myFunction() {
  var x = document.getElementById("response-list");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$(document).ready(function(){
  $('#userResponse').keyup(function(){
    $('button').fadeIn();
	$('.start-typing').fadeOut();
//	$('.menu-text').fadeOut();
  });
});

$(document).ready(function(){
  $('#userResponse').keyup(function(){
	$('.menu-text-3').fadeTo("slow", 0.04);
  });
});

$(document).ready(function() {
        $('button').click(function() {
                $('ol').fadeToggle();
        });
    });
