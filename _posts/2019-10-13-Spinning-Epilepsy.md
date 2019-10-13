At first I wasn't sure what I wanted and I thought I'd do something super lame like having a black circle as the background then using the potentiometer to make a second, white, circle appear in the middle and be like a hold growing from inside.
As I was looking into how to do transformations, I came across a Coding Train video that went though all the different types. In one video Dan showed how to use rotate and he was messing around with a rectangle on a line. I thought that was really cool
so I went and initialy attatched two rectangles 

Like so:


I got it to rotate and played around with adding other lines and rectangles but none of those looked cool. Eventually I had the idea of putting a circle in the middle as like a wheel and I really liked the look of that. To make it prettier I used the random color command to make them flash and give people seizures. I then went back in the code and tried to figure out what I wanted to control using Serial. I decided that the speed in which the objects were rotating would be cool and so I'd just replace the value added onto 'angle' with 'data'. 

Now this was all good in theory especially since I finally found a microusb cable to use... turns out theres two kinds of these cables. One is only for power and the other is actually for transferring data. Lucky me, I got one that was just for power. To simulate what the rotation would look like with a potentiometer, I took videos at intervals of +50 rotations (per second) to show how it looks different at each interval. (Hint: On the 255 and 1000000 videos, spin your eyes clockwise and counterclockwise to see the shapes change directions!) 

20:

![img](https://i.imgur.com/9Ntn2qZ.mp4)

50:
![img(]https://i.imgur.com/CFL5tGF.mp4)

100: (Looks way slower than 50)
![img](https://i.imgur.com/AqubOUA.mp4) 

200:
![img](https://i.imgur.com/CdhAR4l.mp4)

255:
![img](https://i.imgur.com/aYVNqpZ.mp4)

1000000: 


