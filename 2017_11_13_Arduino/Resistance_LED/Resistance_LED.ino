//Use the on-board LED from pin 13

void setup() {
  // put your setup code here, to run once:
  pinMode(13, OUTPUT);
  pinMode(A0, INPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  int resistance = analogRead(A0);
  
  digitalWrite(13, HIGH);
  delay(resistance);  //Small delay
  digitalWrite(13,LOW);
  delay(resistance);  //Small delay
  
}
