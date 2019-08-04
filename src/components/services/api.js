export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 01 de NodeJS',
            labels: ['#2f59c1'],
            user: 'https://api.adorable.io/avatars/199/abott@adorable.io.png'
          },
          {
            id: 2,
            content: 'Criar Tabela de Preço',
            labels: ['#2f59c1'],
            user: 'https://api.adorable.io/avatars/199/abott@adorable.io.png'
          },
          {
            id: 3,
            content: 'Estudar módulo 03 de React Native',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/199/abott@adorable.io.png'
          },
          {
            id: 4,
            content: 'Publicar Página Trabalhe Conosco"',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/199/abott@adorable.io.png'
          },
          {
            id: 5,
            content: 'Ver Conciliação Bancária',
            labels: ['red'],
            user: 'https://api.adorable.io/avatars/199/abott@adorable.io.png'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Recriando clone do Pipefy',
            labels: [],
            user: 'https://api.adorable.io/avatars/199/abott@adorable.io.png'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Ver sobre Geolocalização e mapas com React Native',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/199/abott@adorable.io.png'
          },
          {
            id: 8,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/199/abott@adorable.io.png'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Estudar RectJS',
            labels: [],
          },
          {
            id: 12,
            content: 'Ver testes e deploy ReactJS',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Ver sobre "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }