# 🌽 SoilSniff — Sensor de "Cheiro" do Solo para Milho

> Monitoramento precoce de estresse hídrico e saúde do solo via nariz eletrônico de baixo custo.

![MIT License](https://img.shields.io/badge/license-MIT-green)
![Protótipo](https://img.shields.io/badge/status-Protótipo%20Funcional-brightgreen)
![Arduino](https://img.shields.io/badge/hardware-Arduino%20Nano-blue)
![Localização](https://img.shields.io/badge/local-Capanema--PR-yellow)

---

## 📖 Sobre o Projeto

**Capanema-PR, Abril de 2026** — O sudoeste do Paraná enfrenta sua pior estiagem em uma década. As perdas na cultura do milho já ultrapassam **R$ 69 milhões** na região, com lavouras completamente comprometidas.

Agricultores familiares e produtores de médio porte não têm acesso a tecnologias caras de agricultura de precisão. O **SoilSniff** nasceu para mudar isso.

É um **nariz eletrônico** enterrado no solo que detecta os compostos voláteis liberados por micróbios e raízes — e traduz tudo isso em uma cor de LED simples, sem precisar de aplicativo, internet ou conhecimento técnico.

**Custo total do protótipo: ~R$ 180.**

---

## ⚠️ O Problema

| Problema | Descrição |
|----------|-----------|
| 🌡️ Estiagem severa | A planta não demonstra sede visível até que o dano seja irreversível |
| ⏰ Diagnóstico tardio | Quando o milho enrola as folhas, 30–50% da produtividade já foi perdida |
| 🔬 Falta de laboratórios | Análise química do solo leva semanas e custa caro |
| 💸 Tecnologia inacessível | Sensores profissionais custam mais de R$ 5.000 |

---

## 💡 A Solução

O SoilSniff é instalado a **10–15 cm de profundidade**, próximo às raízes do milho. Ele detecta **compostos orgânicos voláteis (VOCs)** liberados pelo solo e indica o resultado via **LED RGB**:

| LED | Significado | Ação |
|-----|-------------|------|
| 🟢 Verde | Solo fértil e úmido | Continuar manejo normal |
| 🟡 Amarelo | Início de estresse ou matéria orgânica baixa | Aplicar composto / monitorar irrigação |
| 🔴 Vermelho | Solo doente ou estresse hídrico severo | Irrigar urgente ou colher antecipado |

---

## 🛠️ Hardware

| Componente | Modelo | Função | Preço |
|------------|--------|--------|-------|
| Microcontrolador | Arduino Nano | Processamento central | R$ 40 |
| Sensor de amônia | MQ-135 | Detecta decomposição aeróbica | R$ 35 |
| Sensor de metano | MQ-4 | Detecta solo compactado | R$ 35 |
| Sensor de sulfeto | MQ-136 | Detecta putrefação/doença | R$ 45 |
| Sensor de umidade | Higrômetro | Corrige leituras dos gases | R$ 15 |
| Indicação visual | LED RGB | Feedback imediato | R$ 5 |
| Alimentação | Bateria 9V | Energia para ~100 leituras | R$ 10 |

**Total: ~R$ 180**

### Esquema de Pinos (Arduino Nano)

```
A0  → MQ-135 (amônia)
A1  → MQ-4   (metano)
A2  → MQ-136 (sulfeto)
A3  → Higrômetro (umidade)
D3  → LED RGB — Vermelho
D4  → LED RGB — Verde
D5  → LED RGB — Azul
5V  → VCC de todos os sensores
GND → GND de todos os sensores
```

---

## 🧠 Algoritmo de Decisão

```
1. Ler sensor_amonia  (MQ-135)
2. Ler sensor_metano  (MQ-4)
3. Ler sensor_sulfeto (MQ-136)
4. Ler umidade_solo   (higrômetro)

5. SE umidade_solo < 20%:                        → 🔴 VERMELHO
6. SENÃO SE umidade_solo > 80%:                  → 🔴 VERMELHO
7. SENÃO SE metano > 30ppm OU sulfeto > 5ppm:    → 🔴 VERMELHO
8. SENÃO SE amonia > 5ppm E amonia < 50ppm:      → 🟡 AMARELO
9. SENÃO:                                        → 🟢 VERDE
```

### Limiares calibrados

| Sensor | Faixa segura | Acima disso |
|--------|-------------|-------------|
| Umidade | 20–80% | Vermelho imediato |
| Amônia | 5–50 ppm | Amarelo (atenção) |
| Metano | < 30 ppm | Vermelho (solo compactado) |
| Sulfeto | < 5 ppm | Vermelho (putrefação) |

---

## 📁 Estrutura do Projeto

```
agrinho2026/
├── index.html              # Página inicial
├── style.css               # Estilos globais
├── script.js               # Scripts globais
├── css/
│   ├── text.css
│   └── divs.css
└── paginas/
    ├── pagina1.html        # Contexto e Motivação
    ├── pagina2.html        # O Problema
    ├── pagina3.html        # A Solução
    ├── pagina4.html        # Hardware
    ├── pagina5.html        # Algoritmo
    ├── pagina6.html        # Demo Interativa
    └── pagina7.html        # Como Contribuir
```

---

## 🚀 Como Usar

1. Clone o repositório:
```bash
git clone https://github.com/RAFAELPHZ/agrinho2026.git
```

2. Abra o arquivo `index.html` no seu navegador — não precisa de servidor.

3. Para montar o hardware, siga o esquema de pinos acima e carregue o firmware no Arduino Nano.

> ⚠️ Os sensores MQ precisam de **5–10 minutos de pré-aquecimento** antes de fornecer leituras precisas.

---

## 🎯 Resultados Esperados

| Métrica | Meta |
|---------|------|
| Acurácia na detecção | 85% |
| Tempo de resposta | < 2 minutos |
| Custo final em lote | ~R$ 100 |
| Redução de perdas | 20–30% |

---

## 🤝 Como Contribuir

Toda ajuda é bem-vinda! Você pode contribuir com:

- 🧪 **Dados de campo** — amostras de solo ou padrões de leitura da sua região
- 💻 **Código** — melhorar o algoritmo, adicionar sensores, otimizar energia
- 🔧 **Hardware** — sugerir componentes mais baratos ou projetos de PCB
- 📝 **Documentação** — traduzir, criar tutoriais em vídeo
- 🐛 **Bugs** — abrir uma issue se encontrar algum problema

```bash
# Para contribuir:
git fork https://github.com/RAFAELPHZ/agrinho2026
git checkout -b minha-melhoria
git commit -m "feat: minha melhoria"
git push origin minha-melhoria
# Abra um Pull Request!
```

---

## 📍 Contexto

Projeto desenvolvido para o **Agrinho 2026**, em **Capanema-PR**, sudoeste do Paraná.

Agradecemos a todos os agricultores que compartilharam suas histórias — é por vocês e com vocês que esse projeto existe. ❤️

---

## 👨‍💻 Autores

| Papel | Nome |
|-------|------|
| 🧑‍🌾 Criador e Desenvolvedor | **Rafael Rosa** |
| 👨‍🏫 Orientador | **Prof. Gustavo de Medeiros** |

---

## 📜 Licença

Distribuído sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.

---

<p align="center">Feito com ❤️ e terra nas mãos em Capanema-PR, Sudoeste do Paraná.</p>
<p align="center">por <strong>Rafael Rosa</strong> com orientação do <strong>Prof. Gustavo de Medeiros</strong></p>