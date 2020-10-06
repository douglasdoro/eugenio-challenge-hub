#include <Arduino.h>

#define SENSOR_PIN_1 PD4    //  --> PD4
#define SENSOR_PIN_2 PD5    //  --> PD5
#define SENSOR_PIN_3 PD6    //  --> PD6
#define SENSOR_PIN_4 PD7    //  --> PD7

#define MOTOR_A 8
#define MOTOR_B 9
#define MOTOR_C 10
#define MOTOR_D 11

unsigned long int currentTime;

namespace SENSOR_STATE {
  enum {
    NO_HAND,
    WITH_HAND,
    LEFT,
    RIGHT,
    ENTER,
  };
}

void setup() {
  
pinMode(SENSOR_PIN_1,OUTPUT);
pinMode(SENSOR_PIN_2,OUTPUT);
pinMode(SENSOR_PIN_3,OUTPUT);
pinMode(SENSOR_PIN_4,OUTPUT);

pinMode(MOTOR_A,OUTPUT);
pinMode(MOTOR_B,OUTPUT);
pinMode(MOTOR_C,OUTPUT);
pinMode(MOTOR_D,OUTPUT);

Serial.begin(115200);


}

void loop() {
  currentTime = millis();

  while (millis()  - currentTime <= 500 ){
    switch (getDataFromRaspbarry())
    {
      case 'a' :   // Ativar o perfume A, Representado pelo LED A
      digitalWrite(MOTOR_A,HIGH);
      _delay_ms(500);
      digitalWrite(MOTOR_A,LOW);
      break;
      case 'b' :   // Ativar o perfume B, Representado pelo LED A
      digitalWrite(MOTOR_B,HIGH);
      _delay_ms(500);
      digitalWrite(MOTOR_B,LOW);
      break;
      case 'c' :   // Ativar o perfume C , Representado pelo LED A
      digitalWrite(MOTOR_C,HIGH);
      _delay_ms(500);
      digitalWrite(MOTOR_C,LOW);
      break;
      case 'd' :   // Ativar o perfume D , Representado pelo LED A
      digitalWrite(MOTOR_D,HIGH);
      _delay_ms(500);
      digitalWrite(MOTOR_D,LOW);
      break;
      
    
    default:
      break;
    }
  }
  
  
  switch (getSensorPosition()) {
    case SENSOR_STATE::NO_HAND :
    break;

    case SENSOR_STATE::ENTER:
    Serial.println("Enter");
    break;

    case SENSOR_STATE::RIGHT:
    Serial.println("Direita");
    break;

     case SENSOR_STATE::LEFT:
    Serial.println("Esquerda");
    break;

    default: Serial.println("Mao detectada");

  }



}



uint8_t getSensorPosition() {
    
    if((PIND & (SENSOR_PIN_1 | SENSOR_PIN_2 | SENSOR_PIN_3 | SENSOR_PIN_4)) == (SENSOR_PIN_1 | SENSOR_PIN_2 | SENSOR_PIN_3 | SENSOR_PIN_4)) {
    return SENSOR_STATE::NO_HAND;
  } else if((PIND & (SENSOR_PIN_1 | SENSOR_PIN_3) == (SENSOR_PIN_1 | SENSOR_PIN_3)) && !(PIND & (SENSOR_PIN_1 | SENSOR_PIN_3) == (SENSOR_PIN_1 | SENSOR_PIN_3))) {
    return SENSOR_STATE::ENTER;
  } else if(PIND & (SENSOR_PIN_2) == (SENSOR_PIN_2) && !(PIND & (SENSOR_PIN_4) == (SENSOR_PIN_4))) {
    return SENSOR_STATE::LEFT;
  } else if(PIND & (SENSOR_PIN_4) == (SENSOR_PIN_4) && !(PIND & (SENSOR_PIN_2) == (SENSOR_PIN_2))) {
  return SENSOR_STATE::RIGHT;
  } else return SENSOR_STATE::WITH_HAND;
}

char getDataFromRaspbarry() { // Recebe os dados da Raspbarry via porta serial
  if(Serial.available()){
    return Serial.read();
  } else return NULL;
}