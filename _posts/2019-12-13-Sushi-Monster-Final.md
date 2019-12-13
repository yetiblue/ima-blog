---
Physical Computing Final Project
---

  My Idea for this final was conceived at the start of the semester when I was randomly browsing through public sculptures online. This Plastic monster was really cool in the sense that it definitely created the desired effect and served a bigger purpose than just looking cool. 

Here it is: 

![Inspiration](https://i.imgur.com/Db4TjIC.png)

  At the time we had just begun working with Physical Computing so I'd heard about the various sensors that are available and the idea of having the statue "turning on" when someone looked at it or came too close came to mind. When it came online it would yell at people angrily for creating so much trash. I'd originally planned to build something around the size of my inspiration during Winter break or something. 

  When thinking of Ideas for my final, I added this idea to the end of list because at that point we've learned a lot more in class and I had ideas for other projects too that used concepts like Machine learning. Gabriella convince me to stay with the statue, however, because it was the only one of my projects that included a message bigger than itself, so I decided to go along with it. 

  The first day, I couldn't focus on the code side of things so I procrastinated by figuring out how exactly I was going to put all these sushi containers together. A couple hours later of trying to fight gravity with no glue, I came up with a concept that I liked and decided to finish protyping it by quickly drawing what was missing.


![Built](https://i.imgur.com/RgHIx3i.jpg)
![Drawn](https://i.imgur.com/z2eWtWO.jpg)

---
---

  After prototyping, it was time to move onto the Arduino side of things. Initially my list of material consisted of 3 different parts: A webcam, a distance sensor, and a button. Unbeknownst to me, this was already way more work than I was aware of. As the deadline approached, the webcam went away because it seemed it had the least functional ability (It would've added additional audio when someone looked in the direction of the statue).

  Moving forward, the button was the first thing I tackled. I wrote the arduino code (the easy part) then spent an hour trying to figure out where I'd managed to wire a button incorectly because it was displaying the wrong serial data. Finally I got it working when I realized that my arduino wasn't wired to power. 

![button](https://i.imgur.com/2nphLkL.jpg)

---
---

  Having worked with Python before, I had this idea to allow the user to press the button and it'll execute a python script that would use PyAutoGUI to navigate the mouse cursor to a page where users can sign a petition to NYU saying to reduce plastic usage. Using PySerial I was able to connect to my arduino, and of course, nothing happened when I ran the script. The error lay in how python needed to read '0' was a byte instead of just a string so adding a 'b' in front of '('0')' fixed the issue. 

![python](https://i.imgur.com/zaditsr.png)

---
---

  Next came the distance sensor - a fiendish device. Three days, three arduinos, and three different sensors later, it still refused to work. 

![distance](https://i.imgur.com/lBXmQUf.jpg)
![distance2](https://i.imgur.com/r3NVcQt.jpg)

---
---


  Last minute, I decided to swap out the sensor's function with a button and just manually try to emulate the effect it would've had. With much of my P5 code already written for serial read for the sensor, I only needed to change a few things there, and focused on discovering how to count button presses on the Arduino. I would now have the user step closer to the statue like before but I'd manually press the button to play the audio when they got within a certain range. 

  The buttonCounter code worked successfully, but there were a couple bugs I didn't have time to deal with. The main issue being that if the counter was an even number, it would include the audio from previous counts. For example because 4 was a multiple of two, it would alternate between serial writing '4' and '2'. 



---
---

Finally, the last thing was to actually build Chompy the Scottish Sushi Monster:

![chompy](https://i.imgur.com/Fj2itw8.jpg)



