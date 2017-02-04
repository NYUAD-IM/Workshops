
//Using PWM pins 9, 10, 11 for RGB LED

int r = 0;
int g = 1;
int b = 0;
void setup() {
  // put your setup code here, to run once:
  pinMode(13, OUTPUT);
  pinMode(A0, INPUT);

  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);

  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT);
  
  digitalWrite(9, HIGH);
  digitalWrite(10, HIGH);
  digitalWrite(11, HIGH);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  int resistance = 1000;
  
  
  
  analogWrite(9, r);
  analogWrite(10, g);
  analogWrite(11, b);
  delay(100);

  r+=7;
  g+=5;
  b+=2;

  if(r > 255){
    r = 0;
  }
  if(g > 255){
    g = 0;
  }
  if(b > 255){
    b = 0;
  }
}
