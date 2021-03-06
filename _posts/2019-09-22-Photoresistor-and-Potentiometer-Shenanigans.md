My original idea was to use the potentiometer and photoresistor as well as 2 LED's. When the light was sufficient enough, I would use the potentiometer to increase the brightness of a red LED, and when it was darker a white led would turn on to illminate the red light. 

However when i plugged in the potentiometer by itself and a resistor randomly onto the board and changed something by accident in the code, the white LED somehow started to crazy by itself and what looked like just rapid blinking. I investigated this by adjusting the delay to see what would happen and when I changed it from 10 to 100 I noticed something really cool. From the data returned by the photoresistor, the data started from 0 for a few, then randomly jumped numbers all the way to 1023 where it stayed for a bit and then went back to zero. My plan then became to try and get the photoresistor to control this process manually. 

the output for delay of 100
![img](https://i.imgur.com/qSkywQd.mp4) 

Light behavior with delay of 10
![img](https://i.imgur.com/JiqvqTn.mp4)

Light behavior of delay 50
![img](https://i.imgur.com/0WUXxlE.mp4)


Being utterly confused by this, I changed stuff in the code like the map values and found that had no impact on the seeminly automatic analog output being produced by the LED. I then plugged and unplugged some stuff on the breadboard and found that the photoresistor helped to increase the range of brightness on the LED greatly, but even if I unplugged it, the led would still go from dark to light but it would be a lot dimmer and the sensor data lower too. I then tried to remove the photoresistor also but when I did the light stopped working. I reconnected it but found that the light still didn't work. I retraced my steps and found that I also unplugged the resistor I originally added. I managed to find how exactly I had connected it previously and found that once I put it back the light came back on and went from light to dark once again. 

The resistor and photoresistor placement
![img](https://i.imgur.com/4pZwxJT.jpg)

Wiggling stuff around and making it not work 
![img](https://i.imgur.com/2SaDPyG.mp4)

After all this I looked up the code for making the photoresistor control an LED and attempted to make it work with that I have. The code online assumed that the LED would be freestanding and not already hooked up to another analog resistor. I coded it as if it were just by itself but couldn't figure out how exactly to combine multiple sensorValue variables and void loops/void setups. 

![img](https://i.imgur.com/zDsvTfP.png)
