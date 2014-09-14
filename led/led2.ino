int r = 3;
int g = 5;
int b = 6;

int rc = 255;
int gc = 128;
int bc = 0;

int rd = 255;
int gd = 255;
int bd = 255;

void setup() {
  // put your setup code here, to run once:
  pinMode(r, OUTPUT);
  pinMode(g, OUTPUT);
  pinMode(b, OUTPUT);

}

void loop() {
  // put your main code here, to run repeatedly:
  analogWrite(r, rc);
  analogWrite(g, gc);
  analogWrite(b, bc);
}