function calcularSustentabilidade() {
    // Pegar os valores selecionados convertidos em números inteiros
    const q1 = parseInt(document.getElementById('agua').value);
    const q2 = parseInt(document.getElementById('solo').value);
    const q3 = parseInt(document.getElementById('energia').value);
    const q4 = parseInt(document.getElementById('residuos').value);

    // Soma a pontuação (mínimo 4, máximo 12)
    const pontuacaoTotal = q1 + q2 + q3 + q4;

    // Selecionar os elementos de exibição
    const resultadoDiv = document.getElementById('resultado');
    const scoreText = document.getElementById('score-text');
    const dicaText = document.getElementById('dica-text');

    // Mostrar a caixinha de resultado tirando a classe 'hidden'
    resultadoDiv.classList.remove('hidden');

    // Lógica do diagnóstico baseado nos pontos
    if (pontuacaoTotal <= 6) {
        scoreText.innerHTML = `<strong>Nível: Alerta Crítico (Pontos: ${pontuacaoTotal}/12)</strong>`;
        dicaText.innerHTML = "<strong>Próximo Passo:</strong> Sua produção precisa de ajustes urgentes para encontrar o equilíbrio. Tente começar implementando a coleta seletiva e a logística reversa de embalagens, além de pesquisar sobre o Plantio Direto para proteger seu solo.";
        resultadoDiv.style.borderLeftColor = "#d32f2f"; // Vermelho
    } else if (pontuacaoTotal > 6 && pontuacaoTotal <= 9) {
        scoreText.innerHTML = `<strong>Nível: Em Desenvolvimento (Pontos: ${pontuacaoTotal}/12)</strong>`;
        dicaText.innerHTML = "<strong>Próximo Passo:</strong> Você já pratica ações sustentáveis! Para alcançar o nível máximo, planeje a transição para energia solar ou biogás e adote sensores ou gotejamento para economizar ainda mais água.";
        resultadoDiv.style.borderLeftColor = "#f57c00"; // Laranja
    } else {
        scoreText.innerHTML = `<strong>Nível: Agroforte Sustentável! (Pontos: ${pontuacaoTotal}/12)</strong>`;
        dicaText.innerHTML = "<strong>Parabéns!</strong> Sua propriedade é um espelho para o futuro do Agro. Você consegue produzir em alto rendimento mantendo o respeito e a conservação do ecossistema local.";
        resultadoDiv.style.borderLeftColor = "#2e6f40"; // Verde
    }

    // Rolar a página suavemente até o resultado
    resultadoDiv.scrollIntoView({ behavior: 'smooth' });
}