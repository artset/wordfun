


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
                rm = new RiMarkov(2);
                rm.loadText(allText);
                sentences = rm.generateSentences(2);
                console.log(rm.generateUntil("dark"));
            }
        }
    }
    rawFile.send(null);
}
