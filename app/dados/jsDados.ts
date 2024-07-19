const jsDados = [
    {
      tag: 'item-1', title: 'Sintaxe Básica', content: [
        {theme: 'Variáveis', subTheme:'var, let, const', page: '/variaveis'},
        {theme: 'Tipos de Dados',subTheme:'undefined, null, boolean, number, string, symbol', page: '/tipos-de-dados'},
        {theme: 'Operadores', subTheme:'Aritméticos, Atribuição, Comparação, Lógicos, Bitwise, Ternários', page: '/operadores'}
      ]
    }, 
    {
      tag: 'item-2', title: 'Estruturas de Controle', content: [
        {theme: 'Condicionais', subTheme:'if, else, else if, switch', page: '/objAssign'},
        {theme: 'Loops',subTheme:'for, while, do-while, for...in, for...of',page: '/objAssign'},
        {theme: 'Controles de Fluxo', subTheme:'break, continue, return', page: '/objAssign'}
      ]
    }, 
    {
      tag: 'item-3', title: 'Funções', content: [
        {theme: 'Declaração de funções', subTheme: null, page: '/objAssign'},
        {theme: 'Parâmetros e argumentos',subTheme:null,page: '/objAssign'},
        {theme: 'Funções anônimas', subTheme:null,page: '/objAssign'},
        {theme: 'Arrow Functions', subTheme:null,page: '/objAssign'},
        {theme: 'Callback Functions', subTheme:null,page: '/objAssign'},
        {theme: 'High order functions', subTheme:null,page: '/objAssign'},
        {theme: 'Parâmetros padrão', subTheme:null,page: '/objAssign'},
        {theme: 'Parâmetros rest', subTheme:null,page: '/objAssign'},
        {theme: 'Operador spread', subTheme:null,page: '/objAssign'},
        {theme: 'IIFE', subTheme: null,page: '/objAssign'},
      ]
    }, 
    {
      tag: 'item-4', title: 'Arrays', content: [
        {theme: 'Destructuring', subTheme: null, page: '/objAssign'},
        {theme: 'MI-forEach', subTheme: null,page: '/objAssign'},
        {theme: 'MI-map', subTheme: null,page: '/objAssign'},
        {theme: 'MI-filter', subTheme:null,page: '/objAssign'},
        {theme: 'MI-reduce', subTheme: null,page: '/objAssign'},
        {theme: 'MI-reduceRight', subTheme: null,page: '/objAssign'},
        {theme: 'MI-some', subTheme: null,page: '/objAssign'},
        {theme: 'MI-every', subTheme:null,page: '/objAssign'},
        {theme: 'MI-find', subTheme:null,page: '/objAssign'},
        {theme: 'MI-findIndex', subTheme:null,page: '/objAssign'},
        {theme: 'MM-push', subTheme: null,page: '/objAssign'},
        {theme: 'MM-pop', subTheme: null,page: '/objAssign'},
        {theme: 'MM-shift', subTheme: null,page: '/objAssign'},
        {theme: 'MM-unshift', subTheme: null,page: '/objAssign'},
        {theme: 'MM-splice', subTheme: null,page: '/objAssign'},
        {theme: 'MM-sort', subTheme: null,page: '/objAssign'},
        {theme: 'MM-reverse', subTheme: null,page: '/objAssign'},
        {theme: 'MM-fill', subTheme:null,page: '/objAssign'},
        {theme: 'MA-concat',subTheme:null,page: '/objAssign'},
        {theme: 'MA-slice', subTheme: null,page: '/objAssign'},
        {theme: 'MA-includes', subTheme: null,page: '/objAssign'},
        {theme: 'MA-indexOf', subTheme: null,page: '/objAssign'},
        {theme: 'MA-lastIndexOf', subTheme: null,page: '/objAssign'},
        {theme: 'MA-join', subTheme: null,page: '/objAssign'},
        {theme: 'MA-flat', subTheme: null,page: '/objAssign'},
        {theme: 'MA-flatMap', subTheme: null,page: '/objAssign'},
        {theme: 'MA-copyWithin', subTheme:null,page: '/objAssign'},
        {theme: 'MC-toString', subTheme: null,page: '/objAssign'},
        {theme: 'MC-toLocaleString', subTheme: null,page: '/objAssign'},
        {theme: 'from', subTheme: null,page: '/objAssign'},
        {theme: 'isArray', subTheme: null,page: '/objAssign'},
        {theme: 'of', subTheme: null,page: '/objAssign'},
        {theme: 'entries', subTheme:null,page: '/objAssign'},
        {theme: 'keys', subTheme: null,page: '/objAssign'},
        {theme: 'values', subTheme: null,page: '/objAssign'},
      ]
    }, 
    {
      tag: 'item-5', title: 'Objects', content: [
        {theme: 'Destructuring', subTheme: null, page: null},
        {theme: 'Object.assign', subTheme: 'Copia valores de todas as propriedades enumeráveis de um ou mais objetos de origem para um objeto de destino.', page: '/objAssign'},
        {theme: 'MI-map', subTheme: null, page: '/objAssign'},
        {theme: 'MI-filter', subTheme:null, page: '/objAssign'},
        {theme: 'MI-reduce', subTheme: null, page: '/objAssign'},
        {theme: 'MI-reduceRight', subTheme: null, page: '/objAssign'},
        {theme: 'MI-some', subTheme: null, page: '/objAssign'},
        {theme: 'MI-every', subTheme:null, page: '/objAssign'},
        {theme: 'MI-find', subTheme:null, page: '/objAssign'},
        {theme: 'MI-findIndex', subTheme:null, page: '/objAssign'},
        {theme: 'MM-push', subTheme: null, page: '/objAssign'},
        {theme: 'MM-pop', subTheme: null, page: '/objAssign'},
        {theme: 'MM-shift', subTheme: null, page: '/objAssign'},
        {theme: 'MM-unshift', subTheme: null, page: '/objAssign'},
        {theme: 'MM-splice', subTheme: null, page: '/objAssign'},
        {theme: 'MM-sort', subTheme: null, page: '/objAssign'},
        {theme: 'MM-reverse', subTheme: null, page: '/objAssign'},
        {theme: 'MM-fill', subTheme:null, page: '/objAssign'},
        {theme: 'MA-concat',subTheme:null, page: '/objAssign'},
        {theme: 'MA-slice', subTheme: null, page: '/objAssign'},
        {theme: 'MA-includes', subTheme: null, page: '/objAssign'},
        {theme: 'MA-indexOf', subTheme: null, page: '/objAssign'},
        {theme: 'MA-lastIndexOf', subTheme: null, page: '/objAssign'},
        {theme: 'MA-join', subTheme: null, page: '/objAssign'},
        {theme: 'MA-flat', subTheme: null, page: '/objAssign'},
        {theme: 'MA-flatMap', subTheme: null, page: '/objAssign'},
        {theme: 'MA-copyWithin', subTheme:null, page: '/objAssign'},
        {theme: 'MC-toString', subTheme: null, page: '/objAssign'},
        {theme: 'MC-toLocaleString', subTheme: null, page: '/objAssign'},
        {theme: 'from', subTheme: null, page: '/objAssign'},
        {theme: 'isArray', subTheme: null, page: '/objAssign'},
        {theme: 'of', subTheme: null, page: '/objAssign'},
        {theme: 'entries', subTheme:null, page: '/objAssign'},
        {theme: 'keys', subTheme: null, page: '/objAssign'},
        {theme: 'values', subTheme: null, page: '/objAssign'},
      ]
    }, 
  ]

export default jsDados;