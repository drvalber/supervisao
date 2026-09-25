/* DIVA 2.0 (Kooij & Francken, 2010) - Partes 1 e 2, versão de autopreenchimento.
   Mesmos exemplos da versão integrada à plataforma Super.Visão.
   Este arquivo é compartilhado pela página (window.DIVA_DADOS) e pelo teste em Node. */
(function (root) {
  var PARTE1 = [
    {
      id: "A1",
      titulo: "Distração e erros por descuido",
      pergunta: "Você com frequência não presta atenção suficiente aos detalhes ou comete erros por distração, no trabalho ou em outras atividades?",
      adulto: [
        "Comete erros por distração",
        "Tem que trabalhar devagar para evitar erros",
        "Não lê as instruções com atenção",
        "Não é bom em trabalhos detalhados",
        "Precisa de muito tempo para os detalhes",
        "Perde-se nos detalhes",
        "Trabalha muito rápido e, por isso, comete erros"
      ],
      infancia: [
        "Cometia erros por distração nos trabalhos escolares",
        "Cometia erros devido a uma leitura errada das perguntas",
        "Deixava perguntas sem responder, por não tê-las lido corretamente",
        "Deixava sem responder as perguntas do verso da página nas provas",
        "Os outros comentavam sobre o seu trabalho desleixado",
        "Não revia as respostas dos trabalhos feitos em casa",
        "Precisava de muito tempo para os trabalhos detalhados"
      ]
    },
    {
      id: "A2",
      titulo: "Dificuldade em manter a concentração",
      pergunta: "Você com frequência tem dificuldade em manter-se concentrado durante a realização de tarefas ou atividades?",
      notaAdulto: "* A não ser que o assunto seja considerado muito interessante (ex.: jogar no computador ou passatempos)",
      notaInfancia: "* A não ser que o assunto fosse considerado muito interessante (ex.: jogar no computador ou passatempos)",
      adulto: [
        "Não consegue manter a atenção nas tarefas durante muito tempo*",
        "Distrai-se facilmente com as próprias associações/pensamentos",
        "Tem dificuldade em ver um filme ou ler um livro até o fim*",
        "Fica rapidamente entediado com os assuntos*",
        "Faz perguntas sobre assuntos que já foram discutidos"
      ],
      infancia: [
        "Tinha dificuldade em prestar atenção nos trabalhos escolares",
        "Tinha dificuldade em manter-se atento aos jogos*",
        "Distraía-se facilmente",
        "Tinha dificuldade em concentrar-se*",
        "Precisava de um ambiente muito estruturado para não se distrair",
        "Ficava rapidamente entediado com os assuntos*"
      ]
    },
    {
      id: "A3",
      titulo: "Parece não estar ouvindo",
      pergunta: "Você com frequência parece não estar ouvindo quando alguém lhe dirige a palavra?",
      adulto: [
        "Divaga ou parece ausente",
        "Tem dificuldade de concentrar-se numa conversa",
        "Não sabe do que se falou depois de uma conversa",
        "Muda frequentemente o assunto de uma conversa",
        "Os outros dizem que está com a cabeça em outro lugar"
      ],
      infancia: [
        "Não se lembrava do que os pais/professores diziam",
        "Estava frequentemente \"sonhando\" ou ausente",
        "Ouvia apenas quando olhavam nos seus olhos ou levantavam a voz",
        "Com frequência precisava ser chamado mais de uma vez",
        "As perguntas precisavam ser repetidas"
      ]
    },
    {
      id: "A4",
      titulo: "Não segue instruções ou não termina tarefas",
      pergunta: "Você com frequência não segue as instruções ou não termina as tarefas ou obrigações no trabalho?",
      adulto: [
        "Faz várias coisas ao mesmo tempo sem terminar nenhuma delas",
        "Tem dificuldade para finalizar as tarefas quando já não são mais novidade",
        "Necessita de prazos-limite para terminar as tarefas",
        "Tem dificuldade em terminar tarefas administrativas",
        "Tem dificuldade em seguir instruções de um manual"
      ],
      infancia: [
        "Tinha dificuldade em seguir a sequência das tarefas",
        "Tinha dificuldade com enunciados que envolvessem vários passos",
        "Não completava as tarefas",
        "Não acabava ou não entregava os trabalhos que levava para casa",
        "Precisava de um ambiente muito estruturado para finalizar as tarefas"
      ]
    },
    {
      id: "A5",
      titulo: "Dificuldade em organizar tarefas",
      pergunta: "Você com frequência tem dificuldade para organizar tarefas e atividades?",
      adulto: [
        "Tem dificuldade para planejar as tarefas diárias",
        "A casa e/ou local de trabalho ficam desarrumados",
        "Planeja coisas demais ou de modo ineficiente",
        "Tem frequentemente dois compromissos à mesma hora",
        "Chega atrasado",
        "Não utiliza a agenda de maneira consistente",
        "É inflexível, está \"preso\" a esquemas",
        "Tem pouca noção do tempo",
        "Faz planos e não os completa/realiza",
        "Precisa de outras pessoas para estruturar as próprias coisas"
      ],
      infancia: [
        "Tinha dificuldade em estar pronto na hora",
        "Quarto/mesa de trabalho ficavam desarrumados",
        "Tinha dificuldade de brincar sozinho",
        "Tinha dificuldade de planejar as tarefas ou o trabalho de casa",
        "Fazia várias coisas ao mesmo tempo",
        "Chegava com frequência atrasado",
        "Tinha pouca noção do tempo",
        "Tinha dificuldade em prestar atenção"
      ]
    },
    {
      id: "A6",
      titulo: "Evita tarefas que exigem esforço mental",
      pergunta: "Você com frequência evita, tem aversão ou reluta em envolver-se em tarefas que requeiram um esforço mental continuado?",
      adulto: [
        "Faz primeiro o que é o mais fácil ou divertido",
        "Adia sucessivamente as tarefas entediantes ou árduas",
        "Adia as tarefas e, em consequência, não cumpre prazos",
        "Evita os trabalhos monótonos como, por exemplo, os de natureza administrativa",
        "Não gosta de ler porque exige esforço mental",
        "Evita coisas que exigem muita concentração"
      ],
      infancia: [
        "Evitava ou detestava os trabalhos de casa",
        "Lia poucos livros ou não gostava de ler por isso exigir esforço mental",
        "Evitava coisas que exigiam muita concentração",
        "Detestava disciplinas que exigiam muita concentração",
        "Adiava sucessivamente tarefas entediantes ou árduas"
      ]
    },
    {
      id: "A7",
      titulo: "Perde objetos",
      pergunta: "Você com frequência perde objetos necessários para as tarefas ou atividades?",
      adulto: [
        "Perde a carteira, as chaves ou a agenda",
        "Deixa frequentemente coisas para trás",
        "Perde papéis do trabalho",
        "Perde muito tempo procurando as coisas",
        "Entra em pânico quando os outros mudam as coisas de lugar",
        "Arruma coisas no lugar errado",
        "Perde listas, números de telefone, anotações"
      ],
      infancia: [
        "Perdia a agenda, as canetas, equipamentos de ginástica ou outras coisas",
        "Perdia roupa, brinquedos ou trabalhos de casa",
        "Perdia muito tempo procurando as coisas",
        "Entrava em pânico quando os outros mudavam as coisas de lugar",
        "Recebia comentários dos pais/professores sobre o fato de perder as coisas"
      ]
    },
    {
      id: "A8",
      titulo: "Distrai-se facilmente com o que acontece em volta",
      pergunta: "Você com frequência se distrai facilmente com estímulos externos?",
      adulto: [
        "Tem dificuldade em ignorar estímulos externos",
        "Depois de se distrair, tem dificuldade em voltar ao assunto",
        "Distrai-se facilmente com barulhos ou com o que acontece à sua volta",
        "Escuta as conversas dos outros",
        "Tem dificuldade em filtrar/selecionar informação"
      ],
      infancia: [
        "Durante as aulas olhava muitas vezes para fora da janela",
        "Distraía-se facilmente com barulhos ou com o que acontecia à sua volta",
        "Depois de se distrair, tinha dificuldade em voltar ao assunto"
      ]
    },
    {
      id: "A9",
      titulo: "Esquece atividades do dia a dia",
      pergunta: "Você com frequência se esquece das atividades do dia a dia?",
      adulto: [
        "Esquece dos compromissos/outras obrigações",
        "Esquece agenda, chaves, etc.",
        "Precisa, muitas vezes, ser lembrado de compromissos",
        "Precisa voltar à casa para buscar coisas esquecidas",
        "Utiliza um método/rotina para não se esquecer das coisas",
        "Esquece de marcar ou de consultar a agenda"
      ],
      infancia: [
        "Esquecia de compromissos/marcações",
        "Precisava, muitas vezes, de ser lembrado das coisas",
        "Durante uma tarefa esquecia do que era preciso fazer",
        "Esquecia de levar o material escolar",
        "Esquecia coisas na escola ou nas casas dos amigos"
      ]
    }
  ];

  var PARTE2 = [
    {
      id: "H1",
      titulo: "Inquietação motora",
      pergunta: "Você com frequência mexe de forma irrequieta as mãos e os pés ou remexe-se na cadeira quando está sentado?",
      adulto: [
        "Tem dificuldade em ficar quieto(a) sentado(a)",
        "Balança as pernas",
        "Bate com a caneta ou brinca com qualquer coisa",
        "Rói as unhas ou mexe no cabelo",
        "Consegue controlar a inquietação motora, mas isso faz com que fique ainda mais tenso(a)"
      ],
      infancia: [
        "Os pais diziam muitas vezes para se sentar quieto(a) ou algo parecido",
        "Balançava as pernas",
        "Batia com a caneta ou brincava com qualquer coisa",
        "Roía as unhas ou mexia no cabelo",
        "Não conseguia ficar sentado(a) normalmente numa cadeira",
        "Conseguia controlar a inquietação motora, mas isso o(a) fazia ficar ainda mais tenso(a)"
      ]
    },
    {
      id: "H2",
      titulo: "Levanta-se em situações em que deveria ficar sentado",
      pergunta: "Você com frequência se levanta do lugar em situações em que é esperado que permaneça sentado?",
      adulto: [
        "Evita reuniões, conferências, igreja etc. por ter de ficar sentado",
        "Prefere andar a pé do que ficar sentado",
        "Não fica parado por muito tempo, está sempre em movimento",
        "Fica tenso por ter dificuldade em ficar quieto sentado",
        "Inventa desculpas para poder andar"
      ],
      infancia: [
        "Levantava-se muitas vezes durante as refeições ou nas aulas",
        "Tinha muita dificuldade em ficar sentado quieto nas aulas ou durante as refeições",
        "Era chamado(a) à atenção para ficar sentado(a)",
        "Inventava desculpas para poder andar"
      ]
    },
    {
      id: "H3",
      titulo: "Sensação de inquietação",
      pergunta: "Você com frequência se sente irrequieto?",
      adulto: [
        "Sente-se irrequieto ou agitado por dentro",
        "Tem a sensação de precisar estar ocupado",
        "Tem dificuldade em relaxar"
      ],
      infancia: [
        "Estava sempre correndo",
        "Subia nos móveis ou saltava em cima dos bancos",
        "Subia nas árvores",
        "Sentia-se agitado por dentro"
      ]
    },
    {
      id: "H4",
      titulo: "Dificuldade em atividades de lazer tranquilas",
      pergunta: "Você com frequência tem dificuldade em dedicar-se tranquilamente a atividades de lazer?",
      adulto: [
        "Fala durante atividades quando isto é inapropriado",
        "Em público tende a ser arrogante ou chamar atenção",
        "É barulhento em várias situações",
        "Tem dificuldade em fazer atividades sossegadamente",
        "Tem dificuldade em falar baixo"
      ],
      infancia: [
        "Era barulhento durante os jogos ou durante as aulas",
        "Não conseguia ver televisão ou filmes sossegadamente",
        "Era repreendido para ficar mais quieto/sossegado",
        "Em público tendia a destacar-se/chamar atenção"
      ]
    },
    {
      id: "H5",
      titulo: "\"A mil por hora\", como se estivesse ligado a um motor",
      pergunta: "Você com frequência \"está a mil por hora\" ou age como se estivesse \"ligado a um motor\"?",
      adulto: [
        "Está sempre em ação",
        "Tem muita energia, nunca para",
        "Vai além dos próprios limites",
        "Tem dificuldade em \"deixar as coisas acontecerem\", sempre está fazendo algo"
      ],
      infancia: [
        "Estava sempre ocupado",
        "Era ativo na escola ou em casa de maneira incomum",
        "Tinha energia em excesso",
        "Estava \"sempre a mil por hora\", sempre fazendo algo"
      ]
    },
    {
      id: "H6",
      titulo: "Fala excessivamente",
      pergunta: "Você com frequência fala excessivamente?",
      adulto: [
        "Fala de maneira tão agitada que os outros o acham cansativo",
        "Tem fama de ser muito falador",
        "Tem dificuldade em parar de falar",
        "Tem a tendência de falar excessivamente",
        "Não deixa os outros falarem numa conversa",
        "Precisa de muitas palavras para dizer qualquer coisa"
      ],
      infancia: [
        "Tinha fama de ser tagarela",
        "Os professores e os pais mandavam-no frequentemente calar-se",
        "Nos relatórios da escola tinha comentários acerca de falar demais",
        "Era castigado por falar em demasia",
        "Distraía os outros com conversas, quando faziam os trabalhos escolares",
        "Não deixava os outros falarem durante as conversas"
      ]
    },
    {
      id: "H7",
      titulo: "Responde antes de a pergunta terminar",
      pergunta: "Você com frequência dá as respostas antes que as perguntas tenham acabado?",
      adulto: [
        "Fala impulsivamente, fala sem pensar",
        "Diz o que lhe vem à cabeça",
        "Responde sem deixar o outro acabar a frase",
        "Completa as frases das outras pessoas",
        "É indelicado, grosseiro, sem tato"
      ],
      infancia: [
        "Falava impulsivamente, falava sem pensar no que dizia",
        "Queria ser o primeiro a responder às perguntas na escola",
        "Dizia a primeira resposta que lhe vinha à cabeça, mesmo que estivesse errada",
        "Interrompia os outros antes de acabarem a frase",
        "Era conhecido por ser indelicado, grosseiro, sem tato"
      ]
    },
    {
      id: "H8",
      titulo: "Dificuldade em esperar a vez",
      pergunta: "Você com frequência tem dificuldade em esperar pela sua vez?",
      adulto: [
        "Tem dificuldade em esperar nas filas e passa à frente das pessoas",
        "Tem dificuldade em manter a calma no trânsito e em esperar pacientemente nas filas de trânsito",
        "Tem dificuldade em esperar por sua vez nas conversas",
        "É impaciente",
        "Inicia subitamente relações e/ou empregos, ou os deixa de repente, por impaciência"
      ],
      infancia: [
        "Tinha dificuldade em esperar pela sua vez nos esportes/jogos/brincadeiras",
        "Tinha dificuldade em esperar pela sua vez na turma",
        "Queria ser sempre o primeiro",
        "Ficava impaciente com facilidade",
        "Atravessava a rua sem olhar"
      ]
    },
    {
      id: "H9",
      titulo: "Interrompe ou se intromete",
      pergunta: "Você com frequência interrompe ou interfere nas atividades dos outros?",
      adulto: [
        "Intromete-se facilmente nos assuntos dos outros",
        "Interrompe os outros",
        "Interrompe as pessoas nas suas atividades sem pedir licença",
        "Os outros comentam sobre ser intrometido",
        "Tem dificuldade em respeitar os limites dos outros",
        "Tem uma opinião sobre tudo e a expressa imediatamente"
      ],
      infancia: [
        "Intrometia-se nos jogos dos outros",
        "Interrompia as conversas dos outros",
        "Reagia a tudo",
        "Não era capaz de esperar"
      ]
    }
  ];

  var DADOS = {
    partes: [
      { id: "parte1", numero: 1, titulo: "Desatenção", itens: PARTE1 },
      { id: "parte2", numero: 2, titulo: "Hiperatividade e impulsividade", itens: PARTE2 }
    ],
    periodos: [
      { id: "adulto", titulo: "Hoje, na vida adulta", dica: "Pense nos últimos seis meses." },
      { id: "infancia", titulo: "Na infância", dica: "Pense em como você era entre os 5 e os 12 anos." }
    ]
  };

  if (typeof module !== "undefined" && module.exports) module.exports = DADOS;
  else root.DIVA_DADOS = DADOS;
})(typeof window !== "undefined" ? window : globalThis);
