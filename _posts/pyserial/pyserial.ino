
int buttonPin = 2;
int buttonState = 0;
void setup() {
  // put your setup code here, to run once:
pinMode(buttonPin, INPUT);
Serial.begin(9600);
}

void loop() {
  buttonState = digitalRead(buttonPin);
  
  if( buttonState == HIGH) {
    Serial.println("1");
    //Serial.write("1");
    delay(1000);
  }
  if(buttonState == LOW) {
    Serial.println("0");
    //Serial.write("0");
    delay(1000); // hold down for one second! 
  }
}
