---
Fun with Musical Lights
---


My project idea initially started out with a basic vision for multiple lights that would somehow blink after one another or in some sort of organized sequence. 
When I thought more about my personal experiences, I realized I could sync the lights together with music as I'd played piano for 10 years.
I picked something that I found really fun to play back in the day, which was Beethoven's Fifth. 
![Notes](https://i.imgur.com/BxXeczj.jpg)

I tried at first to see if there was anyway to maybe convert the mp3 and put it into a program that would give me the timestamp as the music played so I would know 
the time between notes. When that didn't work out I realized I could get the same result with the 'lap' function on my phone's timer. I played the music and whenever 
each new note would play I pressed the lap button, and if the note was longer I'd just let it run for a while as well. 

![time](https://i.imgur.com/iIDL2U2.jpg)

I did this a few times to get the most accurate times and checked if they were around the same range. Then I wrote it down on paper to try and see if there
were any of the same patterns of time that I could maybe make a function out of and just call that in my code. Unfortunately, there weren't many repeated patterns
and functions in Andruino work way differently than in Python so I decided to just write out each note manually for the first 30 seconds. 

![img](https://i.imgur.com/lX9BocE.jpg)
![img](https://i.imgur.com/SPuUSyK.jpg)

Looking at my timesheet though, I could tell there was a pretty big difference between the shorter staccato notes and more drawn out ones. I realized that here I could add a 
second LED and assign that the longer notes instead of having everything play on just one LED. I got a second, red, LED and looking at how the first one was wired with the resistor
and all, hopefully managed to connect it correctly and into D5 on the Arduino. 

![img](https://i.imgur.com/mrBlgkn.jpg)


Afterwards I went back into my code and reassigned the long notes to the second LED and changed the code for the First LED to delay longer
and not flash at all while the second one was on. 

![img](https://i.imgur.com/6pBYxvH.jpg)






