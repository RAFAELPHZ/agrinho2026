// Demo interativa
const umidadeSlider = document.getElementById('umidadeSlider');
const metanoSlider = document.getElementById('metanoSlider');
const sulfetoSlider = document.getElementById('sulfetoSlider');
const amoniaSlider = document.getElementById('amoniaSlider');

const umidadeValor = document.getElementById('umidadeValor');
const metanoValor = document.getElementById('metanoValor');
const sulfetoValor = document.getElementById('sulfetoValor');
const amoniaValor = document.getElementById('amoniaValor');

const demoLed = document.getElementById('demoLed');
const demoStatus = document.getElementById('demoStatus');

function atualizarDemo() {
    const umidade = parseFloat(umidadeSlider.value);
    const metano = parseFloat(metanoSlider.value);
    const sulfeto = parseFloat(sulfetoSlider.value);
    const amonia = parseFloat(amoniaSlider.value);

    umidadeValor.textContent = umidade;
    metanoValor.textContent = metano;
    sulfetoValor.textContent = sulfeto;
    amoniaValor.textContent = amonia;

    let status = "";
    let cor = "";

    if (umidade < 20) {
        status = "🔴 ESTRESSE HÍDRICO SEVERO - Irrigue imediatamente!";
        cor = "#ef4444";
    } else if (umidade > 80) {
        status = "🔴 SOLO ENCHARCADO - Suspenda irrigação";
        cor = "#ef4444";
    } else if (metano > 30 || sulfeto > 5) {
        status = "🔴 SOLO DOENTE - Aerar solo e verificar drenagem";
        cor = "#ef4444";
    } else if (amonia > 5 && amonia < 50) {
        status = "🟡 MATÉRIA ORGÂNICA EM DECOMPOSIÇÃO - Aplicar composto";
        cor = "#eab308";
    } else {
        status = "🟢 SOLO FÉRTIL E SAUDÁVEL - Manejo normal";
        cor = "#22c55e";
    }

    demoStatus.textContent = status;
    demoLed.style.backgroundColor = cor;
    demoLed.style.boxShadow = `0 0 20px ${cor}`;
}

[umidadeSlider, metanoSlider, sulfetoSlider, amoniaSlider].forEach(slider => {
    slider.addEventListener('input', atualizarDemo);
});

atualizarDemo();