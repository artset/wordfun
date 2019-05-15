INDULGE /  a poem that lives a double life of lighthearted delight and a darker form of decadence
 - structured via recipe, human curated lines from text generated from an LSTM network of The Portrait of Dorian Gray, the actual text, and me.
 
Motivation:

Essence / This  poem  forces the reader to simultaneously consume a lighthearted ultra sweet recipe and a poem that draws text from The Portrait of Dorian Gray, a novel that deals heavily with indulgence to the point of greed and moral decay. I thought the juxtaposition of these two texts would provide interesting tension. Additionally, I liked the idea of having a text retain the unassuming look of a recipe upon no interaction, that would transform into something more.

Technical process / After my last project that focused more on the preservation of the literary voice in Markov Chain generated texts, I decided I wanted to take a different approach. Rather than focusing on something that generated infinitely or something that was completely algorithmically produced, I wanted to use other texts as something that was assistive in conveying a message, rather than composing the entire piece itself. In addition, to use the computer screen and mouse interface as a form of interaction, something that I would not be able to achieve with a print book. Thus, this project itself isn't that coding rigorous in the construction of the actual text of the poem (honestly, most of the code I did end up not going into the final product). I used a LSTM network (see credits below) to generate text from Dorian Gray and curated a combination of the actual text + my own writing to construct the poem (Control F was my best friend). Each line of the recipe contains a word that contributes to the poem and the hover poem is formatted to emphasize this link. 
 
 
initial thoughtz: Tie in the thick, golden literaure of Oscar Wilde w/ yummy decadent baking recipes!! (the word gold occurs like 60 times in the book? pretty crazy! although like 20% the time it's just describing Dorian's angelic locks)

Credits from the LSTM network: https://github.com/minimaxir/textgenrnn
Original Text: Oscar Wilde
Recipes: https://www.bonappetit.com/
Typefaces: Ivy Mode, Lora
