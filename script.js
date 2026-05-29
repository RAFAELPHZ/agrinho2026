// Demo interativa
// =============================================
//  SoilSniff – script.js
//  Lógica da simulação interativa (seção Demo)
// =============================================

const sliders = {
    umidade: document.getElementById('umidadeSlider'),
    metano:  document.getElementById('metanoSlider'),
    sulfeto: document.getElementById('sulfetoSlider'),
    amonia:  document.getElementById('amoniaSlider'),
};

const valores = {
    umidade: document.getElementById('umidadeValor'),
    metano:  document.getElementById('metanoValor'),
    sulfeto: document.getElementById('sulfetoValor'),
    amonia:  document.getElementById('amoniaValor'),
};

const led    = document.getElementById('demoLed');
const status = document.getElementById('demoStatus');

// ---------- Algoritmo de decisão ----------
function diagnosticar(umidade, metano, sulfeto, amonia) {
    if (umidade < 20 || umidade > 80) {
        return {
            cor:     '#ef4444',
            sombra:  'rgba(239,68,68,0.5)',
            emoji:   '🔴',
            texto:   'Estresse Hídrico Severo',
            dica:    umidade < 20 ? 'Irrigar urgentemente!' : 'Solo encharcado — verificar drenagem.',
        };
    }
    if (metano > 30 || sulfeto > 5) {
        return {
            cor:    '#ef4444',
            sombra: 'rgba(239,68,68,0.5)',
            emoji:  '🔴',
            texto:  'Solo Doente',
            dica:   'Gases nocivos detectados. Verificar compactação ou putrefação.',
        };
    }
    if (amonia > 5 && amonia < 50) {
        return {
            cor:    '#eab308',
            sombra: 'rgba(234,179,8,0.5)',
            emoji:  '🟡',
            texto:  'Atenção — Monitorar Solo',
            dica:   'Matéria orgânica em decomposição. Aplicar composto se necessário.',
        };
    }
    return {
        cor:    '#22c55e',
        sombra: 'rgba(34,197,94,0.5)',
        emoji:  '🟢',
        texto:  'Solo Fértil e Saudável',
        dica:   'Condições ideais. Continuar manejo normal.',
    };
}

// ---------- Atualizar interface ----------
function atualizar() {
    const umidade = Number(sliders.umidade.value);
    const metano  = Number(sliders.metano.value);
    const sulfeto = Number(sliders.sulfeto.value);
    const amonia  = Number(sliders.amonia.value);

    // Atualiza os rótulos dos sliders
    valores.umidade.textContent = umidade;
    valores.metano.textContent  = metano;
    valores.sulfeto.textContent = sulfeto;
    valores.amonia.textContent  = amonia;

    // Roda o algoritmo
    const resultado = diagnosticar(umidade, metano, sulfeto, amonia);

    // Atualiza LED
    led.style.backgroundColor = resultado.cor;
    led.style.boxShadow = `0 0 30px 10px ${resultado.sombra}`;

    // Atualiza texto de status
    status.textContent = `${resultado.emoji} ${resultado.texto} — ${resultado.dica}`;
}

// ---------- Eventos ----------
Object.values(sliders).forEach(slider => {
    slider.addEventListener('input', atualizar);
});

// ---------- Estado inicial ----------
atualizar();