int r = 3;
int g = 5;
int b = 6;

int rc = 255;
int gc = 128;
int bc = 0;

int rd = 0;
int gd = 1;
int bd = 1;

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
//  Red direction
  if (rd == 1) {
    rc = rc + 1;
    if (rc >= 255) {
      rd = 0; 
    }
  }
  else {
    rc = rc -1;
    if (rc <= 0) {
      rd = 1; 
    }    
  }
//  Green direction
  if (gd == 1) {
    gc = gc + 1;
    if (gc >= 255) {
      gd = 0; 
    }
  }
  else {
    gc = gc -1;
    if (gc <= 0) {
      gd = 1; 
    }    
  }
//  Blue direction
   if (bd == 1) {
    bc = bc + 1;
    if (bc >= 255) {
      bd = 0; 
    }
  }
  else {
    bc = bc -1;
    if (bc <= 0) {
      bd = 1; 
    }    
  }
}

