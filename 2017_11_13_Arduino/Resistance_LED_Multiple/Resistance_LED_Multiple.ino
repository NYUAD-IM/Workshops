void setup() {
  // put your setup code here, to run once:
  pinMode(13, OUTPUT);
  pinMode(A0, INPUT);

  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  int resistance = analogRead(A0);
  
  digitalWrite(13, HIGH);
  digitalWrite(2, HIGH);
  digitalWrite(3, LOW);
  delay(resistance);  //Small delay
  digitalWrite(13,LOW);
  digitalWrite(2, LOW);
  digitalWrite(3, HIGH);
  delay(resistance);  //Small delay
  
}
