## Agrinho
* introdução
# 🌽 SoilSniff – Sensor de "Cheiro" do Solo para Milho

### Monitoramento precoce de estresse hídrico e saúde do solo via nariz eletrônico

[![Licença](https://img.shields.io/badge/Licença-MIT-green)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Protótipo%20Funcional-yellow)]()
[![Arduino](https://img.shields.io/badge/Platform-Arduino_Uno-blue)]()
[![Feito em](https://img.shields.io/badge/Feito_em-Capanema--PR-brightgreen)]()

---


## Estrutura

 raiz/
├── index.html
├── style.css
├── script.js
├── /paginas
│   ├── pagina1_contexto.html
│   ├── pagina2_problema.html
│   ├── pagina3_solucao.html
│   ├── pagina4_hardware.html
│   ├── pagina5_algoritmo.html
│   ├── pagina6_demo.html
│   └── pagina7_contribuir.html
├── /img
│   ├── placeholder1.svg
│   └── placeholder2.svg
├── /css
│   ├── text.css
│   └── divs.css
└── /referencias
    └── referencias.txt

## 📌 Índice

- [Contexto e Motivação](#contexto-e-motivação)
- [O Problema](#o-problema)
- [A Solução](#a-solução)
- [Como Funciona](#como-funciona)
- [Hardware Utilizado](#hardware-utilizado)
- [Esquema de Ligação](#esquema-de-ligação)
- [Código Arduino](#código-arduino)
- [Algoritmo de Decisão](#algoritmo-de-decisão)
- [Resultados Esperados](#resultados-esperados)
- [Próximos Passos](#próximos-passos)
- [Como Contribuir](#como-contribuir)
- [Equipe e Contato](#equipe-e-contato)
- [Licença](#licença)
- [Agradecimentos](#agradecimentos)

---

## 🌾 Contexto e Motivação

**Capanema-PR, Abril de 2026** – O sudoeste do Paraná enfrenta sua pior estiagem em uma década. As perdas na cultura do milho já ultrapassam **R$ 69 milhões** na região, com lavouras completamente comprometidas.

Agricultores familiares e produtores de médio porte não têm acesso a tecnologias caras de agricultura de precisão. Eles precisam de **soluções simples, de baixo custo e que funcionem no campo real**.

Foi pensando nisso que nasceu o **SoilSniff**: um dispositivo que você enterra no solo e ele "cheira" os compostos voláteis liberados por micróbios e raízes – informando, em segundos, se a terra está saudável, precisando de adubo ou já em estresse hídrico.

> 🎯 **Missão**: Democratizar o acesso ao diagnóstico do solo, reduzindo perdas na lavoura e aumentando a resiliência climática do pequeno produtor.

---

## ⚠️ O Problema

| Problema | Impacto |
|----------|---------|
| **Estiagem severa** | Planta não demonstra sede visível até que o dano seja irreversível |
| **Diagnóstico tardio** | Quando o milho enrola as folhas, 30-50% da produtividade já foi perdida |
| **Falta de laboratórios** | Análise química do solo leva semanas e custa caro |
| **Tecnologia inacessível** | Sensores de umidade profissionais custam mais de R$ 5.000 |

**A pergunta que move o projeto**:  
> *"E se o próprio solo pudesse falar, através do seu cheiro, que está ficando doente ou seco antes que a planta murche?"*

---

## 💡 A Solução

**SoilSniff** é um **nariz eletrônico** de baixo custo que:

- Enterrado a 10-15 cm de profundidade, próximo às raízes do milho
- Detecta **compostos orgânicos voláteis (VOCs)** liberados por micróbios e pela própria planta
- Interpreta o padrão desses gases através de um algoritmo simples
- Mostra o resultado em um **LED colorido** ou via **app Bluetooth** (futuro)

| LED | Significado | Ação sugerida |
|-----|-------------|----------------|
| 🟢 **Verde** | Solo fértil e úmido | Continuar manejo normal |
| 🟡 **Amarelo** | Matéria orgânica baixa ou início de estresse | Aplicar composto orgânico / Monitorar irrigação |
| 🔴 **Vermelho** | Solo doente (compactado/encharcado) ou estresse hídrico severo | Irrigar urgentemente ou colher antecipadamente |

---

## 🔧 Como Funciona

### Fluxo simplificado

### Princípio técnico

Em condições normais, o solo saudável libera uma mistura equilibrada de **amônia** (decomposição aeróbica), **CO₂** (respiração de raízes) e baixos níveis de **metano**.

Quando o solo **entra em estresse hídrico**:
- A atividade microbiana diminui → amônia cai
- As raízes liberam compostos de defesa (ácido jasmônico, etileno)
- Se há compactação ou encharcamento → metano e sulfeto de hidrogênio aumentam

O algoritmo compara as leituras em tempo real com uma **base de assinaturas químicas** pré-calibradas.

---

## 🛠️ Hardware Utilizado

### Componentes (versão protótipo – custo total ~R$ 180)

| Componente | Modelo | Função | Preço aprox. |
|------------|--------|--------|---------------|
| Microcontrolador | Arduino Nano | Processamento | R$ 40 |
| Sensor de amônia | MQ-135 | Detecta decomposição aeróbica | R$ 35 |
| Sensor de metano | MQ-4 | Detecta solo compactado/anaeróbico | R$ 35 |
| Sensor de sulfeto | MQ-136 | Detecta putrefação/doença | R$ 45 |
| Sensor de umidade | Higrômetro resistivo | Corrige leituras dos gases | R$ 15 |
| Indicação | LED RGB | Feedback visual imediato | R$ 5 |
| Alimentação | Bateria 9V | Energia para ~100 leituras | R$ 10 |

### Encapsulamento
- Caixa estanque (garrafa PET reciclável ou resina epóxi)
- Membrana permeável a gás (tecido fino ou papel filtro) na parte inferior
- Eletrônica protegida contra umidade com silicone ou verniz acrílico

---

## 🔌 Esquema de Ligação

| Arduino Nano | Componente | Pino |
|--------------|------------|------|
| 5V | VCC de todos sensores | - |
| GND | GND de todos sensores | - |
| A0 | Sensor MQ-135 (amônia) | Sinal |
| A1 | Sensor MQ-4 (metano) | Sinal |
| A2 | Sensor MQ-136 (sulfeto) | Sinal |
| A3 | Higrômetro de solo | Sinal |
| D3 | LED RGB - Pino Vermelho | - |
| D4 | LED RGB - Pino Verde | - |
| D5 | LED RGB - Pino Azul | - |

> **Nota**: Sensores MQ precisam de pré-aquecimento de 5-10 minutos antes de leituras precisas.

---

## 💻 Código Arduino

```cpp
/*
 * SoilSniff - Sensor de Cheiro do Solo
 * Capanema-PR, Abril 2026
 * 
 * Monitora amônia, metano, sulfeto e umidade do solo
 * Classifica a saúde do solo em 3 níveis via LED RGB
 */

// Definição dos pinos
#define PIN_MQ135    A0  // Amônia / CO2
#define PIN_MQ4      A1  // Metano
#define PIN_MQ136    A2  // Sulfeto de hidrogênio
#define PIN_UMIDADE  A3  // Higrômetro de solo
#define PIN_LED_R    3   // LED Vermelho
#define PIN_LED_G    4   // LED Verde
#define PIN_LED_B    5   // LED Azul

// Thresholds calibrados (valores iniciais - ajustar após testes em campo)
#define THRESH_AMONIA_BAIXO   5.0   // ppm
#define THRESH_AMONIA_ALTO    50.0  // ppm
#define THRESH_METANO_ALTO    30.0  // ppm
#define THRESH_SULFETO        5.0   // ppm
#define THRESH_UMIDADE_SECO   20.0  // %
#define THRESH_UMIDADE_ENCHARC 80.0 // %

// Variáveis globais
float amonia = 0;
float metano = 0;
float sulfeto = 0;
float umidade = 0;
int status_anterior = -1; // 0=verde, 1=amarelo, 2=vermelho

void setup() {
  Serial.begin(9600);
  
  pinMode(PIN_LED_R, OUTPUT);
  pinMode(PIN_LED_G, OUTPUT);
  pinMode(PIN_LED_B, OUTPUT);
  
  Serial.println("SoilSniff - Inicializando...");
  Serial.println("Aguardando aquecimento dos sensores (5 segundos)");
  delay(5000);
  
  // Desliga todos os LEDs
  apagarLEDs();
  
  Serial.println("Pronto para leitura!");
}

void loop() {
  // Leitura dos sensores
  amonia = lerSensorMQ135();
  metano = lerSensorMQ4();
  sulfeto = lerSensorMQ136();
  umidade = lerHigrometro();
  
  // Exibe valores no Serial Monitor
  Serial.println("=== LEITURAS ATUAIS ===");
  Serial.print("Amônia: "); Serial.print(amonia); Serial.println(" ppm");
  Serial.print("Metano: "); Serial.print(metano); Serial.println(" ppm");
  Serial.print("Sulfeto: "); Serial.print(sulfeto); Serial.println(" ppm");
  Serial.print("Umidade: "); Serial.print(umidade); Serial.println(" %");
  
  // Classifica e acende o LED correspondente
  int status = classificarSolo();
  
  if (status != status_anterior) {
    acenderLEDporStatus(status);
    status_anterior = status;
  }
  
  Serial.print("Status do solo: ");
  switch(status) {
    case 0: Serial.println("🟢 FÉRTIL E SAUDÁVEL"); break;
    case 1: Serial.println("🟡 MATÉRIA ORGÂNICA BAIXA / INÍCIO DE ESTRESSE"); break;
    case 2: Serial.println("🔴 SOLO DOENTE / ESTRESSE HÍDRICO SEVERO"); break;
  }
  Serial.println("-----------------------");
  
  // Aguarda 1 minuto antes da próxima leitura
  delay(60000);
}

/*
 * Classifica o solo com base nas leituras
 * Retorna:
 * 0 = Verde (solo saudável)
 * 1 = Amarelo (atenção)
 * 2 = Vermelho (crítico)
 */
int classificarSolo() {
  // Caso 1: Estresse hídrico severo
  if (umidade < THRESH_UMIDADE_SECO) {
    Serial.println(">> ALERTA: Solo muito seco! Irrigue imediatamente.");
    return 2;
  }
  
  // Caso 2: Solo encharcado/compactado
  if (umidade > THRESH_UMIDADE_ENCHARC) {
    Serial.println(">> ALERTA: Solo encharcado! Suspenda irrigação.");
    return 2;
  }
  
  // Caso 3: Solo doente (gases tóxicos)
  if (metano > THRESH_METANO_ALTO || sulfeto > THRESH_SULFETO) {
    Serial.println(">> ALERTA: Gases tóxicos detectados! Solo doente/compactado.");
    return 2;
  }
  
  // Caso 4: Matéria orgânica em decomposição (atenção)
  if (amonia > THRESH_AMONIA_BAIXO && amonia < THRESH_AMONIA_ALTO) {
    return 1;
  }
  
  // Caso 5: Solo saudável
  return 0;
}

void acenderLEDporStatus(int status) {
  apagarLEDs();
  
  switch(status) {
    case 0:  // Verde
      digitalWrite(PIN_LED_G, HIGH);
      break;
    case 1:  // Amarelo = Vermelho + Verde
      digitalWrite(PIN_LED_R, HIGH);
      digitalWrite(PIN_LED_G, HIGH);
      break;
    case 2:  // Vermelho
      digitalWrite(PIN_LED_R, HIGH);
      break;
  }
}

void apagarLEDs() {
  digitalWrite(PIN_LED_R, LOW);
  digitalWrite(PIN_LED_G, LOW);
  digitalWrite(PIN_LED_B, LOW);
}

/*
 * Funções de leitura dos sensores
 * (valores calibrados - ajustar conforme necessidade)
 */
float lerSensorMQ135() {
  int valorADC = analogRead(PIN_MQ135);
  // Conversão aproximada: ADC 0-1023 para 10-200 ppm
  float ppm = map(valorADC, 100, 800, 10, 200);
  return constrain(ppm, 0, 200);
}

float lerSensorMQ4() {
  int valorADC = analogRead(PIN_MQ4);
  // Conversão aproximada: ADC para 0-100 ppm
  float ppm = map(valorADC, 50, 600, 0, 100);
  return constrain(ppm, 0, 100);
}

float lerSensorMQ136() {
  int valorADC = analogRead(PIN_MQ136);
  // Conversão aproximada: ADC para 0-20 ppm
  float ppm = map(valorADC, 50, 800, 0, 20);
  return constrain(ppm, 0, 20);
}

float lerHigrometro() {
  int valorADC = analogRead(PIN_UMIDADE);
  // Higrômetro resistivo: seco = ~1023, úmido = ~200
  float porcentagem = map(valorADC, 200, 1023, 100, 0);
  return constrain(porcentagem, 0, 100);
}
1.  Ler sensor_amonia (MQ135)
2.  Ler sensor_metano (MQ4)
3.  Ler sensor_sulfeto (MQ136)
4.  Ler umidade_solo (higrômetro)

5.  Se umidade_solo < 20%:
        status = "ESTRESSE_HIDRICO_SEVERO"
        LED = VERMELHO
        Alertar: "Irrigue imediatamente ou colha"

6.  Senão se umidade_solo > 80%:
        status = "SOLO_ENCHARCADO"
        LED = VERMELHO
        Alertar: "Suspenda irrigação, aerar solo"

7.  Senão se metano > 30 ppm OU sulfeto > 5 ppm:
        status = "SOLO_DOENTE (Compactado/Encharcado)"
        LED = VERMELHO
        Alertar: "Aerar solo, verificar drenagem"

8.  Senão se amonia > 5 ppm E amonia < 50 ppm:
        status = "MATERIA_ORGANICA_EM_DECOMPOSICAO"
        LED = AMARELO
        Alertar: "Aplicar composto orgânico"

9.  Senão:
        status = "SOLO_FERTIL_E_SAUDAVEL"
        LED = VERDE
  Alertar: "Manejo normal"