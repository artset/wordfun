function readFile(file, ifEnjambment) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function ()
  {
      if(rawFile.readyState === 4)
      {
          if(rawFile.status === 200 || rawFile.status == 0)
          {
              allText = rawFile.responseText;
          }
      }
  }
  rawFile.send(null);
  return allText;
}

// formatted = formatter(text)

function formatter(text) {
  tokenized = text.split(/[\s,?!;:().]+/);
  var formatted = ""
  for (var i = 0; i < tokenized.length; i++) {
    formatted += "<div class = \"word\" /> " + tokenized[i] + "</div>";
  }
  return formatted;
}

function randomnizer(number) {
  var random = Math.floor(Math.random() * number);
  // add weights so likelihood on earlier ones
  if (random > number) {
    var half = Math.round(Math.random());
    if (half) {
      random = Math.floor(Math.random * (number / 2));
    }
  }
  return random;
}
function getData(text, x, callback) {
  return $.getJSON("https://api.datamuse.com/words?ml=" + text).then(function(data) {
    var index  = randomnizer(data.length);
    callback(data[index]["word"], x);
  });
}


// $(function () {
//   $(".word").draggable();
// });


$(function () {
  $(".word").draggable({
    drag: function(e,i) {
      if (!$(this).hasClass('drop-shadow')) {
        $(this).addClass('drop-shadow');
      }
    }, 
    // stop: function(e,i) {
    //   var top = $(this).css("top");
    //   var left = $(this).css("left")
    //   var newtop = parseFloat(top.substring(0, top.length-2));
    //   var newleft = parseFloat(left.substring(0, left.length-2));
    //   $(this).css("position", "absolute");
    //   $(this).css("top", String(newtop + 100) + "px");
    //   // $(this).css("left", String(newleft + 150) + "px");
    //   console.log(newtop + 100);
    // }
  })
});

// $(".word").draggable({
//   appendTo: "body",
//   drag: function(e, i) {
//       if (!$(this).hasClass('drop-shadow')) {
//           $(this).addClass('drop-shadow');
//       }
//   }
// });

$(function () {

  $(".word").click(function () {
    var text = $(this).text();
    var word = "";
    var x = $(this);
    getData(text, x, function(returndata, x){
      //received data!
      word = returndata;
      x.text(returndata);
    });


  
    
    if ($(this).hasClass('b1')) {
      $(this).removeClass('b1')
      $(this).addClass('b2');
    } else if ($(this).hasClass('b2')) {
      $(this).removeClass('b2');
      $(this).addClass('b3');
    } else if ($(this).hasClass('b3')) {
      $(this).removeClass('b3');
      $(this).addClass('b4');
    } else if ($(this).hasClass('b4')) {
      $(this).removeClass('b4');
      $(this).addClass('b5');
    }  else if ($(this).hasClass('b5')) {
      $(this).removeClass('b5');
      $(this).addClass('b6');
    }
    else {
      $(this).addClass('b1');
    }

  
  //   if (word !== "") {
  //     console.log(word);
  //     $(this).text(word);
  //     console.log("the change statement has been called");
  //   }
  });


});

// $( ".word" ).dblclick(function() {
//   var text = $(this).text();
//   console.log(text);
//   $.getJSON("https://api.datamuse.com/words?rel_rhy=" + text, function(result){
//     var random =  Math.floor(Math.random() * result.length);
//     // add weights so likelihood on earlier ones
//     word = (result[random]["word"]);
//     console.log(result);
//     console.log("chosen word:" + word);
//     return word;
//   });

//   if (word !== "") {
//     $(this).text(word);
//   }
  
//   if ($(this).hasClass('b1')) {
//     $(this).removeClass('b1')
//     $(this).addClass('b2');
//   } else if ($(this).hasClass('b2')) {
//     $(this).removeClass('b2');
//     $(this).addClass('b3');
//   } else if ($(this).hasClass('b3')) {
//     $(this).removeClass('b3');
//     $(this).addClass('b4');
//   } else if ($(this).hasClass('b4')) {
//     $(this).removeClass('b4');
//     $(this).addClass('b5');
//   }  else if ($(this).hasClass('b5')) {
//     $(this).removeClass('b5');
//     $(this).addClass('b6');
//   }
//   else {
//     $(this).addClass('b1');
//   }
// });

$("#fridge").droppable({
  drop: function(e, ui) {
    // console.log(ui.draggable)
    $(this).css("background-color", "white");
    $(this).text("");
  }
});

$("#abt").click(function(){
  $("#description").slideToggle();
});


var test_txt = readFile("https://raw.githubusercontent.com/artset/tempus/master/leaves_of_grass.txt?token=Ag0D0xuDza7Y80pbgurPFe36Cpfth57cks5cpTglwA%3D%3D");
rm = new RiMarkov(2);

rm.loadText(test_txt);

sentences = rm.generateSentences(10);

formatted = "";

for (var i = 0; i < sentences.length; i++) {
  sentence = sentences[i];
  formatted += formatter(sentence);
}

var poem = document.getElementById("poem").innerHTML = formatted;
