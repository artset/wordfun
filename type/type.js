var crustyGrammar = new RiGrammar();
crustyGrammar.addRule("<start>", "<first> <last> is a <loved-thing>-loving <occupation>. They are the author of many fine pieces of literature, most notably <books>.");
crustyGrammar.addRule("<first>", "Georges | Charles | Clotilde | Laurine | Jacque | Virginie | Suzanne |  Guy | Sylvia | Emma | Leon | Monsieur | William ");
crustyGrammar.addRule("<last>", "Duroy | Maupassant | Bovary | Flaubert | Llheureux | Dupuis | Forestier |  Laroche-Mathieu | de Marelle | Varene | Walter | Wordsworth");
crustyGrammar.addRule("<loved-thing>", "romance | meadow | afternoon coffee steam | decadence | excess | baguette | self-portrait | fine cheese | aged wine | french cafe");
crustyGrammar.addRule("<occupation>", "thief | writer | journalist | painter | novelist | conceptual artist | performer | type-rope walker ;) | wealthy-person | ");
crustyGrammar.addRule("<books>", "Bel Ami | Madame Bovary");

var firmGrammar = new RiGrammar();
firmGrammar.addRule("<start>", "<first> <last> is a <loved-thing>-loving <occupation>. They are the author of many fine pieces of literature, most notably <books>.");
firmGrammar.addRule("<first>", "Kino | Misaki | Kafuku | Tanimura | Erika | Kamita | Gregor ");
firmGrammar.addRule("<last>", "Murakami | Samsa | Scheherezade | Watari | Tokai");
firmGrammar.addRule("<loved-thing>", "fish | oil paint | neo-romantic music | Brahms symphony | cat | sardine | rain | children");
firmGrammar.addRule("<occupation>", "marathon writer | fisherman | mid level architect | portrait painter | cat owner | mediocre father-in-law on his death bed | jazz bar owner | bakery owner");
firmGrammar.addRule("<books>", "Samsa in Love | Kino | Town of Cats");

// need more options for this one
var wateryGrammar = new RiGrammar();
wateryGrammar.addRule("<start>", "<first> <last> is a <loved-thing>-loving <occupation>. They are the author of many fine pieces of literature, most notably <books>.");
wateryGrammar.addRule("<first>", "Lauren | Meg  | Mathilde | Sallie | Lotto | Antoinette");
wateryGrammar.addRule("<last>", "Bartram | Satterwhite | Flor  ");
wateryGrammar.addRule("<loved-thing>", "Florida | crossword puzzle | sea shell | blue | greenhouse | vacation | italian opera | alligator | Florida rain");
wateryGrammar.addRule("<occupation>", "playwrite | wife | misunderstood wife | conflict | broke college student | heir to a thriving water bottling business | roommate ");
wateryGrammar.addRule("<books>", "Fates and Furies | Under the Wave | Flower Hunter");

var modernGrammar = new RiGrammar();
modernGrammar.addRule("<start>", "<first> <last> is a <loved-thing>-loving <occupation>. They are the author of many fine pieces of literature, most notably <books>.");
modernGrammar.addRule("<first>", "George | Prince | Chloe | Allen | Betty | Tami | Lilly | Eva | Lisa | Pam | Evygenia | Dani");
modernGrammar.addRule("<last>", "Valiant | Nether | Bledsoe | Smith | Renn | Ross | Torrini | Leslie ");
modernGrammar.addRule("<loved-thing>", "butterfinger | lottery-entering | SG | pond | journal | post-it notes | porcelain tiger | microline | cedar pathway | adventure | winter");
modernGrammar.addRule("<occupation>", "pond designer | husband | father | ice skater | Nethers-defender | mediocre office worker in the suburbs | youngest daughter | advocate | hero ");
modernGrammar.addRule("<books>", "Semplica Girl Diaries | Tenth of December | Victory Lap | Humbugs ");


function crustyBookstore() {
    document.getElementById("poem-title").innerHTML = "loading...";
    document.getElementById("text").innerHTML = "loading...";
    document.getElementById("author").innerHTML =  crustyGrammar.expand();
    document.getElementById("text").style.fontFamily = "'Crimson Text', serif";

    var choose = Math.floor(Math.random() * 10);
    if (choose%4 === 0) {
        readFile("https://raw.githubusercontent.com/artset/type/master/scraping/jane_eyre-bronte.txt", 0);
    } else if (choose%4 ===1) {
        readFile("https://raw.githubusercontent.com/artset/type/master/scraping/wordsworth.txt", 0);
    } else {
        readFile("https://raw.githubusercontent.com/artset/type/master/scraping/bel-ami_maupassant.txt", 0);
    }
}

function wateryFlowers() {
    document.getElementById("poem-title").innerHTML = "loading...";
    document.getElementById("text").innerHTML = "loading...";
    document.getElementById("author").innerHTML =  wateryGrammar.expand();
    document.getElementById("text").style.fontFamily = "'Playfair Display', serif";
    var choose = Math.floor(Math.random() *2);
    if (choose%2 === 0) {
        readFile("https://raw.githubusercontent.com/artset/type/master/scraping/flower_hunter-lauren_groff.txt", 0);
    } else  {
        readFile("https://raw.githubusercontent.com/artset/type/master/scraping/under_wave-lauren_groff.txt", 0);
    } 
    
}

// we are going to do ~interesting enjambment for these!
function firmFold() {
    document.getElementById("poem-title").innerHTML = "loading...";
    document.getElementById("text").innerHTML = "loading...";
    document.getElementById("author").innerHTML =  firmGrammar.expand();
    document.getElementById("text").style.fontFamily = "'Raleway', san-serif";
    var choose = Math.floor(Math.random() *3);
    if (choose%3 === 0) {
        readFile("https://raw.githubusercontent.com/artset/type/master/scraping/kino-haruki_murakami.txt", 1);
    } else if (choose%3 ===1) {
        readFile("https://raw.githubusercontent.com/artset/type/master/scraping/town_of_cats-haruki_murakami.txt", 1);
    } else {
        readFile("https://raw.githubusercontent.com/artset/type/master/scraping/samsa-haruki_murakami.txt", 1);
    }


    
}

// we are going to do ~interesting enjambment for these!
function modernMishap() {
    document.getElementById("poem-title").innerHTML = "loading...";
    document.getElementById("text").innerHTML = "loading...";
    document.getElementById("author").innerHTML =  modernGrammar.expand();
    document.getElementById("text").style.fontFamily = "'Inconsolata', monospace";
    var choose = Math.floor(Math.random() *2 );
    if (choose%2 === 0) {
        readFile("https://raw.githubusercontent.com/artset/type/master/scraping/tenth_dec-george_saunders.txt", 1);
    } else {
        readFile("https://raw.githubusercontent.com/artset/type/master/scraping/semplica_girls-george_saunders.txt", 1);
    } 
    
}

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
                poemGenerate(allText, ifEnjambment);
            }
        }
    }
    rawFile.send(null);
}

function titleGenerate(text, ifEnjambment) {
    text = text.toLowerCase();
    tokenized = text.split(" ");

    var title = "";
    var ifTitleChosen = 0;
    var poem ="";
    for (var i = 0; i < tokenized.length; i++) {
        var obj = getJSON("https://api.datamuse.com/words?sp=" + tokenized[i] + "&md=p&max=1");

        // if the title has already been chosen, we want to add 
        // the word after at random to some extent
        if (ifTitleChosen) {
            var toAdd = Math.floor(Math.random() * tokenized.length);
            if (toAdd %7 === 3 && tokenized[i] !== "<br" && tokenized[i] !== "/>") {
                title += " " + tokenized[i];
            }
        }
        // going through each of the tags
        if (obj.length > 0 && obj[0].tags && tokenized[i] !== "<br" && tokenized[i] !== "/>") {
            var tags = obj[0].tags;
            for (var q = 0; q < tags.length; q++) {
                if (tags[q] === "n" && obj[0].word !== "the") {
                    title = obj[0].word;
                }      
            }
        }
        ifTitleChosen = 1;

        // construct line breaker here if needed
        if (ifEnjambment) {
            poem += tokenized[i] + " ";

            // going through grammar tags again
            // if the tags happen to be noun or adj, we want to add a break after
            if (obj.length > 0 && obj[0].tags) {
                var tags = obj[0].tags;
                for (var q = 0; q < tags.length; q++) {
                    var lineBreak = Math.floor(Math.random() * tags.length);
                    if (tags[q] === "adj" && lineBreak%4 > 0) { // 3/4 chance
                        poem += " <br /> "
                    } else if (tags[q] === "n" && lineBreak%4 === 1) {
                        if (Math.floor(Math.random() * 2) %2 === 0) {
                            poem += " <br /> "
                        }
                    }    
                }
            } else { // default line break chance
                var lineBreak = Math.floor(Math.random() * 25);
                if (lineBreak % 4 === 0) {
                    poem += " <br /> ";
                }
            }

        }

    } //end of for loop

    if (ifEnjambment) {
        // console.log("used the enjambment breaker");
        document.getElementById("text").innerHTML = poem;
    }


    var adj = getJSON("https://api.datamuse.com/words?rel_jjb=" + title);
    if (adj.length > 0) {

        var describer = Math.floor(Math.random() * adj.length);
        if (describer > adj.length/2 + 1) {
            const randomizer =  Math.floor(Math.random() * 20);
            if (randomizer %5 !== 3) {
                describer = Math.floor(Math.random() * adj.length/4);
            }
        }
        title = adj[describer].word + " " + title;
    }
    
    document.getElementById("poem-title").innerHTML = title;
}
// problem currently with cors
function getJSON(file){
    var obj;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var str = rawFile.responseText;
                obj = JSON.parse(str);
            }
        }
    }
    rawFile.send(null);     
    return obj;   
}

function poemGenerate(text, ifEnjambment) {
    document.getElementById("text").innerHTML = ""
    rm = new RiMarkov(2);
    rm.loadText(text);
    sentences = rm.generateSentences(2);
    poem = "";

    for (var i = 0; i < sentences.length; i++) {
        poem += sentences[i] + " ";
    }


    if(!ifEnjambment){
        poem = lineBreaker(poem);
        document.getElementById("text").innerHTML =  poem;
    }

    title = titleGenerate(poem, ifEnjambment);

}

// random line breaker
function lineBreaker(text) {
    tokenized = text.split(" ");
    final = "";

    for (var i = 0; i < tokenized.length; i++) {
  
        final += tokenized[i] + " ";
        var last_char = tokenized[i].slice(-1);
        line_break = Math.floor(Math.random() * 20);
        if (last_char === "," || last_char === "." || last_char === ";" || last_char ==="?" || last_char === "!" ) {
            final += " <br /> ";
          } else if (line_break === 19) {
            final += " <br /> ";
        }

    }
    return final;
}