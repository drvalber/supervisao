/* Gera o PDF do questionário DIVA 2.0 (Partes 1 e 2) preenchido pelo paciente.
   Compartilhado pela página (window.gerarPdfDiva) e pelo teste em Node.
   Usa só a fonte padrão do jsPDF (Helvetica, WinAnsi): evitar símbolos fora do Latin-1. */
(function (root) {
  var A4_W = 210, A4_H = 297, MARGEM = 18, LARGURA = A4_W - MARGEM * 2;
  var NAVY = [7, 17, 31], GOLD = [201, 162, 39], INK = [31, 41, 55], MUTED = [107, 114, 128], LINHA = [220, 224, 230];

  function limpar(texto) {
    // troca caracteres que a Helvetica do jsPDF não desenha
    return String(texto || "")
      .replace(/[—–]/g, "-")
      .replace(/…/g, "...")
      .replace(/[“”]/g, "\"")
      .replace(/[‘’]/g, "'")
      .replace(/≥/g, ">=")
      .replace(/·/g, "-");
  }

  function gerarPdfDiva(jsPDF, dados, respostas) {
    var doc = new jsPDF({ unit: "mm", format: "a4" });
    var y = 0;
    var totalPaginas = 1;

    function rodape() {
      var n = doc.getNumberOfPages();
      for (var p = 1; p <= n; p++) {
        doc.setPage(p);
        doc.setFont("helvetica", "normal").setFontSize(8).setTextColor(MUTED[0], MUTED[1], MUTED[2]);
        doc.text("DIVA 2.0 - questionário de autopreenchimento (Partes 1 e 2) - Instrumento de apoio; não constitui diagnóstico.", MARGEM, A4_H - 10);
        doc.text("Página " + p + " de " + n, A4_W - MARGEM, A4_H - 10, { align: "right" });
      }
    }

    function novaPagina() {
      doc.addPage();
      totalPaginas++;
      y = MARGEM;
    }

    function garantir(altura) {
      if (y + altura > A4_H - 18) novaPagina();
    }

    function paragrafo(texto, tamanho, cor, estilo, recuo) {
      recuo = recuo || 0;
      doc.setFont("helvetica", estilo || "normal").setFontSize(tamanho).setTextColor(cor[0], cor[1], cor[2]);
      var linhas = doc.splitTextToSize(limpar(texto), LARGURA - recuo);
      var alturaLinha = tamanho * 0.42;
      for (var i = 0; i < linhas.length; i++) {
        garantir(alturaLinha + 1);
        doc.text(linhas[i], MARGEM + recuo, y);
        y += alturaLinha;
      }
    }

    // Cabeçalho
    doc.setFillColor(NAVY[0], NAVY[1], NAVY[2]).rect(0, 0, A4_W, 34, "F");
    doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]).rect(0, 34, A4_W, 1.2, "F");
    doc.setFont("helvetica", "bold").setFontSize(9).setTextColor(GOLD[0], GOLD[1], GOLD[2]);
    doc.text("SUPER.VISÃO - DR. VALBER DIAS PINTO", MARGEM, 12);
    doc.setFontSize(17).setTextColor(255, 255, 255);
    doc.text("DIVA 2.0 - Questionário preenchido pelo paciente", MARGEM, 22);
    doc.setFont("helvetica", "normal").setFontSize(9);
    doc.text("Partes 1 (desatenção) e 2 (hiperatividade/impulsividade) - exemplos marcados pelo próprio paciente", MARGEM, 29);
    y = 44;

    // Identificação
    var ident = respostas.identificacao || {};
    doc.setFillColor(245, 247, 251).rect(MARGEM, y, LARGURA, 22, "F");
    doc.setFont("helvetica", "bold").setFontSize(8).setTextColor(MUTED[0], MUTED[1], MUTED[2]);
    doc.text("NOME", MARGEM + 4, y + 6);
    doc.text("IDADE", MARGEM + 110, y + 6);
    doc.text("DATA DO PREENCHIMENTO", MARGEM + 140, y + 6);
    doc.setFont("helvetica", "normal").setFontSize(11).setTextColor(INK[0], INK[1], INK[2]);
    doc.text(limpar(ident.nome || "-"), MARGEM + 4, y + 14, { maxWidth: 100 });
    doc.text(limpar(ident.idade || "-"), MARGEM + 110, y + 14);
    doc.text(limpar(ident.data || "-"), MARGEM + 140, y + 14);
    y += 30;

    // Totais (contagem simples de exemplos marcados, sem interpretação)
    var totais = contarTotais(dados, respostas);
    paragrafo("Exemplos marcados - vida adulta: " + totais.adulto + "   |   infância: " + totais.infancia + "   |   blocos respondidos: " + totais.blocosRespondidos + " de " + totais.blocos, 9.5, INK, "bold");
    y += 2;
    paragrafo("Cada pergunta traz exemplos para a vida adulta e para a infância (5 a 12 anos). O paciente marcou os que fazem sentido para ele. \"Nenhum se aplica\" indica que ele leu o bloco e não se reconheceu em nenhum exemplo. A conclusão clínica é responsabilidade do médico, na consulta.", 8.5, MUTED);
    y += 4;

    dados.partes.forEach(function (parte) {
      garantir(16);
      doc.setFillColor(NAVY[0], NAVY[1], NAVY[2]).rect(MARGEM, y - 1, LARGURA, 8, "F");
      doc.setFont("helvetica", "bold").setFontSize(10.5).setTextColor(255, 255, 255);
      doc.text("PARTE " + parte.numero + " - " + limpar(parte.titulo).toUpperCase(), MARGEM + 3, y + 4.6);
      y += 12;

      parte.itens.forEach(function (item) {
        var r = (respostas[parte.id] && respostas[parte.id][item.id]) || {};
        garantir(24);
        paragrafo(item.id + " - " + item.titulo, 10.5, NAVY, "bold");
        paragrafo(item.pergunta, 8.5, MUTED, "italic");
        y += 1;

        dados.periodos.forEach(function (periodo) {
          var bloco = r[periodo.id] || {};
          var marcados = bloco.marcados || [];
          var rotulo = periodo.id === "adulto" ? "Vida adulta" : "Infância";
          var texto;
          if (bloco.nenhum) texto = "Nenhum se aplica.";
          else if (marcados.length) texto = marcados.map(function (m) { return "[x] " + m; }).join("\n");
          else texto = "Bloco não respondido.";
          garantir(10);
          doc.setFont("helvetica", "bold").setFontSize(9).setTextColor(GOLD[0] - 60, GOLD[1] - 60, 0);
          doc.text(rotulo + (marcados.length ? " (" + marcados.length + ")" : ""), MARGEM + 3, y);
          y += 4.2;
          texto.split("\n").forEach(function (linha) { paragrafo(linha, 9, INK, "normal", 7); });
          if (bloco.outros && String(bloco.outros).trim()) paragrafo("Em suas palavras: " + bloco.outros.trim(), 9, INK, "italic", 7);
          y += 1.5;
        });

        doc.setDrawColor(LINHA[0], LINHA[1], LINHA[2]).setLineWidth(0.2).line(MARGEM, y, A4_W - MARGEM, y);
        y += 4;
      });
    });

    if (respostas.observacoes && String(respostas.observacoes).trim()) {
      garantir(20);
      paragrafo("Algo mais que o paciente quis contar", 10.5, NAVY, "bold");
      paragrafo(respostas.observacoes.trim(), 9, INK);
    }

    rodape();
    return doc;
  }

  function contarTotais(dados, respostas) {
    var adulto = 0, infancia = 0, blocos = 0, blocosRespondidos = 0;
    dados.partes.forEach(function (parte) {
      parte.itens.forEach(function (item) {
        var r = (respostas[parte.id] && respostas[parte.id][item.id]) || {};
        dados.periodos.forEach(function (periodo) {
          blocos++;
          var bloco = r[periodo.id] || {};
          var n = (bloco.marcados || []).length;
          if (bloco.nenhum || n > 0 || (bloco.outros && String(bloco.outros).trim())) blocosRespondidos++;
          if (periodo.id === "adulto") adulto += n; else infancia += n;
        });
      });
    });
    return { adulto: adulto, infancia: infancia, blocos: blocos, blocosRespondidos: blocosRespondidos };
  }

  var api = { gerarPdfDiva: gerarPdfDiva, contarTotais: contarTotais, limpar: limpar };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else { root.gerarPdfDiva = gerarPdfDiva; root.contarTotaisDiva = contarTotais; }
})(typeof window !== "undefined" ? window : globalThis);
