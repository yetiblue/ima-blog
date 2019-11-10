At first I wanted to do something completely different like displaying the population of vegetarians in the world. The challenges I came across there involved actually finding a data file with that information (I found a table on wikipedia and then looked up a super confusing video of someone messing with API's to convert into JSON but that was way over my head). The other issue was how I would actually try and make that a visual besides just a boring graph. 
Eventually I gave up and decided to follow Dan's video on how to map earthquake data and then tried to figure out how the code works. 

![img](https://i.imgur.com/M1ssTv2.png)
This I agree was pretty scary at first but when Dan explained what all the greek symbols were it made more sense in terms of how to plug numbers in but so much how it was created in the first place. But it was also cool to see how the equations and math coule be translated into variables here.
![img](]https://i.imgur.com/j3FYHW1.png)

The one part that I didn't quite get the logic was this section 
![img](https://i.imgur.com/0dZEhck.png)
Dan just quickly explained that the subtraction of the 2 different longitude and latitude locations was necessary to pinpoint the circle correctly. 


At the end of the video Dan mentioned someone could make this more robust by animating the data. So afterwards I did a bit of searching and came upon a mapbox documentation script which used a slider to show the location of magnitude 6+ earthquakes over the course of a year. 
![img](https://i.imgur.com/GsN6AEP.png)

The code for this was kind of confusing to dissect, and I wasn't able to pinpoint how exactly the slider was connected to the array of months. I think it had something to do with the filter function they included but I can't really see how it's tied together so that moving the slider one section over translates to another month and different circles. 

![img](https://i.imgur.com/FALXcoC.png)

Lastly I also couldn't quite figure out how to make the setup for the 'map' of a mapboxgl map to work properly. I tried it in a new document and it worked. But in my current project the error says that it doesn't recognize what mapboxgl is. 

![img](https://i.imgur.com/8jISoOc.png)
