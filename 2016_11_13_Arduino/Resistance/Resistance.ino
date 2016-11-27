//Red wire from 5V on board to a side pin of pot
//Green wire from A0 on board to middle pin of pot
//Black wire from GND on board to other side pin on pot

void setup() {
  // put your setup code here, to run once:
  pinMode(A0, INPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:

  int resistance = analogRead(A0);
  Serial.println(resistance);

  delay(100);  //Small delay
}
