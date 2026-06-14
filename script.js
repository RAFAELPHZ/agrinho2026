// =============================================
//  SoilSniff – script.js
//  Lógica global e da simulação interativa
// =============================================

// ---------- 1. Alternância de Tema (Modo Escuro/Claro) ----------
// Função para alternar modo escuro e salvar preferência do usuário
function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;

    // Verifica preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeBtn.textContent = '☀️';
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        
        // Atualiza o ícone e salva no localStorage
        if (isLight) {
            themeBtn.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        } else {
            themeBtn.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        }
    });
}

// ---------- 2. Simulador da Página 6 ----------
// Função para lidar com a lógica do simulador de solo
function initSimulator() {
    const sliderUmidade = document.getElementById('sliderUmidade');
    const sliderMetano  = document.getElementById('sliderMetano');
    const sliderSulfeto = document.getElementById('sliderSulfeto');
    const sliderAmonia  = document.getElementById('sliderAmonia');

    // Se os elementos não existirem na página, encerra a função
    if (!sliderUmidade || !sliderMetano || !sliderSulfeto || !sliderAmonia) return;

    // Função para atualizar a simulação com base nos valores
    function atualizar() {
        const umidade = parseInt(sliderUmidade.value);
        const metano  = parseInt(sliderMetano.value);
        const sulfeto = parseInt(sliderSulfeto.value);
        const amonia  = parseInt(sliderAmonia.value);

        document.getElementById('valUmidade').textContent = umidade + '%';
        document.getElementById('valMetano').textContent  = metano + ' ppm';
        document.getElementById('valSulfeto').textContent = sulfeto + ' ppm';
        document.getElementById('valAmonia').textContent  = amonia + ' ppm';

        const led    = document.getElementById('ledCircle');
        const label  = document.getElementById('ledLabel');
        const action = document.getElementById('ledAction');

        let status;
        if (umidade < 20)                           status = 'vermelho';
        else if (umidade > 80)                      status = 'vermelho';
        else if (metano > 30 || sulfeto > 5)        status = 'vermelho';
        else if (amonia > 5 && amonia < 50)         status = 'amarelo';
        else                                        status = 'verde';

        led.className    = 'led-circle ' + status;
        label.className  = 'led-label ' + status;

        if (status === 'verde') {
            label.textContent  = '🟢 Solo Fértil e Saudável';
            action.textContent = '→ Continuar manejo normal';
        } else if (status === 'amarelo') {
            label.textContent  = '🟡 Matéria Orgânica / Início de Estresse';
            action.textContent = '→ Aplicar composto orgânico / monitorar irrigação';
        } else {
            if (umidade < 20)         action.textContent = '→ Irrigar urgentemente!';
            else if (umidade > 80)    action.textContent = '→ Suspender irrigação, aeração necessária';
            else                      action.textContent = '→ Solo doente, verificar drenagem';
            label.textContent = '🔴 Solo em Estado Crítico';
        }
    }

    // Função para carregar um cenário pré-definido
    function loadScenario(umidade, metano, sulfeto, amonia) {
        sliderUmidade.value = umidade;
        sliderMetano.value  = metano;
        sliderSulfeto.value = sulfeto;
        sliderAmonia.value  = amonia;
        atualizar();
    }

    // Adiciona eventos aos sliders (funcional em vez de oninput inline)
    [sliderUmidade, sliderMetano, sliderSulfeto, sliderAmonia].forEach(slider => {
        slider.addEventListener('input', atualizar);
    });

    // Adiciona eventos aos botões de cenário (funcional em vez de onclick inline)
    const scenarioBtns = document.querySelectorAll('.scenario-btn');
    scenarioBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // O botão pode ter um filho clicado, busca o botão ou a tag com data-scenario
            const targetBtn = e.target.closest('.scenario-btn');
            const data = targetBtn.getAttribute('data-scenario');
            if (data) {
                const parts = data.split(',');
                loadScenario(parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2]), parseInt(parts[3]));
            }
        });
    });

    // Estado inicial da simulação
    atualizar();
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initSimulator();
});