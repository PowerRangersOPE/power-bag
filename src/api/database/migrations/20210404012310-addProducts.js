const { v4 } = require('uuid');

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert('produto', [
      {
        id: v4(),
        tipo: 'saia',
        valor: '82.34',
        genero: 'menino',
        fx_etaria: 'bebe',
        estacao_ano: 'primavera',
        necessidade: 'escola',
        cor: 'branco',
        tipo_estampa: 'floral',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'G',
        tamanho_sapato: 17,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'vestido',
        valor: '38.16',
        genero: 'menino',
        fx_etaria: 'crianca',
        estacao_ano: 'outono',
        necessidade: 'sair a noite',
        cor: 'verde',
        tipo_estampa: 'desenho',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'P',
        tamanho_sapato: 34,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'vestido',
        valor: '54.95',
        genero: 'menino',
        fx_etaria: 'adolescente',
        estacao_ano: 'verao',
        necessidade: 'sair a noite',
        cor: 'vermelho',
        tipo_estampa: 'onça',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'G',
        tamanho_sapato: 14,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'camiseta',
        valor: '95.96',
        genero: 'menino',
        fx_etaria: 'bebe',
        estacao_ano: 'outono',
        necessidade: 'social',
        cor: 'branco',
        tipo_estampa: 'listrado',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'PP',
        tamanho_sapato: 18,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'saia',
        valor: '43.16',
        genero: 'menino',
        fx_etaria: 'bebe',
        estacao_ano: 'primavera',
        necessidade: 'sair a noite',
        cor: 'laranja',
        tipo_estampa: 'onça',
        tipo_tenis: 'esportivo',
        tamanho_camisa: 'M',
        tamanho_sapato: 27,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'vestido',
        valor: '92.39',
        genero: 'menina',
        fx_etaria: 'adolescente',
        estacao_ano: 'verao',
        necessidade: 'escola',
        cor: 'azul',
        tipo_estampa: 'tie dye',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'GG',
        tamanho_sapato: 31,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'vestido',
        valor: '57.02',
        genero: 'menina',
        fx_etaria: 'crianca',
        estacao_ano: 'outono',
        necessidade: 'escola',
        cor: 'amarelo',
        tipo_estampa: 'liso',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'M',
        tamanho_sapato: 18,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'saia',
        valor: '43.2',
        genero: 'menino',
        fx_etaria: 'adolescente',
        estacao_ano: 'verao',
        necessidade: 'banho',
        cor: 'amarelo',
        tipo_estampa: 'liso',
        tipo_tenis: 'esportivo',
        tamanho_camisa: 'GG',
        tamanho_sapato: 27,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'camiseta',
        valor: '38.66',
        genero: 'menino',
        fx_etaria: 'adolescente',
        estacao_ano: 'inverno',
        necessidade: 'escola',
        cor: 'marrom',
        tipo_estampa: 'floral',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'M',
        tamanho_sapato: 31,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'camiseta',
        valor: '58.99',
        genero: 'menino',
        fx_etaria: 'adolescente',
        estacao_ano: 'inverno',
        necessidade: 'escola',
        cor: 'branco',
        tipo_estampa: 'zebra',
        tipo_tenis: 'esportivo',
        tamanho_camisa: 'P',
        tamanho_sapato: 26,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'camiseta',
        valor: '70.29',
        genero: 'menina',
        fx_etaria: 'preAdolescente',
        estacao_ano: 'primavera',
        necessidade: 'sair a noite',
        cor: 'azul',
        tipo_estampa: 'desenho',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'P',
        tamanho_sapato: 27,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'tenis',
        valor: '55.39',
        genero: 'menina',
        fx_etaria: 'adolescente',
        estacao_ano: 'primavera',
        necessidade: 'social',
        cor: 'amarelo',
        tipo_estampa: 'listrado',
        tipo_tenis: 'esportivo',
        tamanho_camisa: 'P',
        tamanho_sapato: 36,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'camiseta',
        valor: '74.6',
        genero: 'menino',
        fx_etaria: 'bebe',
        estacao_ano: 'outono',
        necessidade: 'banho',
        cor: 'verde',
        tipo_estampa: 'tropical',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'PP',
        tamanho_sapato: 23,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'vestido',
        valor: '72.83',
        genero: 'menino',
        fx_etaria: 'adolescente',
        estacao_ano: 'primavera',
        necessidade: 'social',
        cor: 'branco',
        tipo_estampa: 'liso',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'G',
        tamanho_sapato: 29,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'sandalia',
        valor: '64.48',
        genero: 'menino',
        fx_etaria: 'preAdolescente',
        estacao_ano: 'primavera',
        necessidade: 'banho',
        cor: 'rosa',
        tipo_estampa: 'floral',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'M',
        tamanho_sapato: 33,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'tenis',
        valor: '35.1',
        genero: 'menino',
        fx_etaria: 'crianca',
        estacao_ano: 'primavera',
        necessidade: 'sair a noite',
        cor: 'laranja',
        tipo_estampa: 'tropical',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'G',
        tamanho_sapato: 19,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'sandalia',
        valor: '89.92',
        genero: 'menina',
        fx_etaria: 'preAdolescente',
        estacao_ano: 'primavera',
        necessidade: 'social',
        cor: 'lilas',
        tipo_estampa: 'listrado',
        tipo_tenis: 'esportivo',
        tamanho_camisa: 'M',
        tamanho_sapato: 22,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'vestido',
        valor: '51.97',
        genero: 'menina',
        fx_etaria: 'bebe',
        estacao_ano: 'inverno',
        necessidade: 'sair a noite',
        cor: 'azul',
        tipo_estampa: 'zebra',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'G',
        tamanho_sapato: 27,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'camiseta',
        valor: '45.65',
        genero: 'menina',
        fx_etaria: 'bebe',
        estacao_ano: 'outono',
        necessidade: 'escola',
        cor: 'vermelho',
        tipo_estampa: 'poá',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'G',
        tamanho_sapato: 15,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'vestido',
        valor: '72.74',
        genero: 'menina',
        fx_etaria: 'preAdolescente',
        estacao_ano: 'verao',
        necessidade: 'passear',
        cor: 'verde',
        tipo_estampa: 'poá',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'G',
        tamanho_sapato: 26,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'bermuda',
        valor: '85.14',
        genero: 'menino',
        fx_etaria: 'preAdolescente',
        estacao_ano: 'outono',
        necessidade: 'passear',
        cor: 'verde',
        tipo_estampa: 'onça',
        tipo_tenis: 'esportivo',
        tamanho_camisa: 'PP',
        tamanho_sapato: 16,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'saia',
        valor: '42.64',
        genero: 'menina',
        fx_etaria: 'preAdolescente',
        estacao_ano: 'outono',
        necessidade: 'passear',
        cor: 'rosa',
        tipo_estampa: 'tie dye',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'G',
        tamanho_sapato: 35,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'saia',
        valor: '60.38',
        genero: 'menino',
        fx_etaria: 'crianca',
        estacao_ano: 'verao',
        necessidade: 'sair a noite',
        cor: 'amarelo',
        tipo_estampa: 'desenho',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'M',
        tamanho_sapato: 28,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'vestido',
        valor: '83.14',
        genero: 'menina',
        fx_etaria: 'adolescente',
        estacao_ano: 'outono',
        necessidade: 'sair a noite',
        cor: 'vermelho',
        tipo_estampa: 'liso',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'GG',
        tamanho_sapato: 15,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'bermuda',
        valor: '45.85',
        genero: 'menina',
        fx_etaria: 'adolescente',
        estacao_ano: 'outono',
        necessidade: 'social',
        cor: 'marrom',
        tipo_estampa: 'floral',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'GG',
        tamanho_sapato: 29,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'tenis',
        valor: '67.69',
        genero: 'menina',
        fx_etaria: 'preAdolescente',
        estacao_ano: 'verao',
        necessidade: 'sair a noite',
        cor: 'marrom',
        tipo_estampa: 'tie dye',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'GG',
        tamanho_sapato: 33,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'tenis',
        valor: '91.34',
        genero: 'menino',
        fx_etaria: 'preAdolescente',
        estacao_ano: 'inverno',
        necessidade: 'sair a noite',
        cor: 'lilas',
        tipo_estampa: 'poá',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'G',
        tamanho_sapato: 32,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'tenis',
        valor: '60.54',
        genero: 'menina',
        fx_etaria: 'bebe',
        estacao_ano: 'inverno',
        necessidade: 'banho',
        cor: 'branco',
        tipo_estampa: 'zebra',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'PP',
        tamanho_sapato: 33,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'vestido',
        valor: '36.53',
        genero: 'menina',
        fx_etaria: 'preAdolescente',
        estacao_ano: 'inverno',
        necessidade: 'social',
        cor: 'lilas',
        tipo_estampa: 'tropical',
        tipo_tenis: 'esportivo',
        tamanho_camisa: 'P',
        tamanho_sapato: 35,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'sandalia',
        valor: '96.39',
        genero: 'menino',
        fx_etaria: 'crianca',
        estacao_ano: 'verao',
        necessidade: 'social',
        cor: 'verde',
        tipo_estampa: 'onça',
        tipo_tenis: 'esportivo',
        tamanho_camisa: 'M',
        tamanho_sapato: 31,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'sandalia',
        valor: '86.06',
        genero: 'menino',
        fx_etaria: 'bebe',
        estacao_ano: 'verao',
        necessidade: 'passear',
        cor: 'marrom',
        tipo_estampa: 'listrado',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'PP',
        tamanho_sapato: 30,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'saia',
        valor: '49.82',
        genero: 'menino',
        fx_etaria: 'crianca',
        estacao_ano: 'verao',
        necessidade: 'social',
        cor: 'branco',
        tipo_estampa: 'tropical',
        tipo_tenis: 'esportivo',
        tamanho_camisa: 'GG',
        tamanho_sapato: 36,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'saia',
        valor: '91.9',
        genero: 'menino',
        fx_etaria: 'bebe',
        estacao_ano: 'primavera',
        necessidade: 'sair a noite',
        cor: 'amarelo',
        tipo_estampa: 'onça',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'GG',
        tamanho_sapato: 26,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'saia',
        valor: '60.34',
        genero: 'menino',
        fx_etaria: 'preAdolescente',
        estacao_ano: 'verao',
        necessidade: 'sair a noite',
        cor: 'azul',
        tipo_estampa: 'poá',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'G',
        tamanho_sapato: 29,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'camiseta',
        valor: '94.89',
        genero: 'menina',
        fx_etaria: 'preAdolescente',
        estacao_ano: 'outono',
        necessidade: 'social',
        cor: 'lilas',
        tipo_estampa: 'onça',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'PP',
        tamanho_sapato: 30,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'saia',
        valor: '40.36',
        genero: 'menina',
        fx_etaria: 'adolescente',
        estacao_ano: 'outono',
        necessidade: 'sair a noite',
        cor: 'amarelo',
        tipo_estampa: 'tie dye',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'PP',
        tamanho_sapato: 31,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'camiseta',
        valor: '60.02',
        genero: 'menina',
        fx_etaria: 'adolescente',
        estacao_ano: 'inverno',
        necessidade: 'social',
        cor: 'vermelho',
        tipo_estampa: 'tropical',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'G',
        tamanho_sapato: 19,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'sandalia',
        valor: '94.45',
        genero: 'menino',
        fx_etaria: 'bebe',
        estacao_ano: 'outono',
        necessidade: 'social',
        cor: 'marrom',
        tipo_estampa: 'tie dye',
        tipo_tenis: 'esportivo',
        tamanho_camisa: 'GG',
        tamanho_sapato: 19,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'camiseta',
        valor: '90.8',
        genero: 'menino',
        fx_etaria: 'crianca',
        estacao_ano: 'primavera',
        necessidade: 'passear',
        cor: 'vermelho',
        tipo_estampa: 'listrado',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'P',
        tamanho_sapato: 15,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'vestido',
        valor: '96.57',
        genero: 'menino',
        fx_etaria: 'preAdolescente',
        estacao_ano: 'inverno',
        necessidade: 'banho',
        cor: 'vermelho',
        tipo_estampa: 'floral',
        tipo_tenis: 'esportivo',
        tamanho_camisa: 'PP',
        tamanho_sapato: 13,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'vestido',
        valor: '78.26',
        genero: 'menino',
        fx_etaria: 'preAdolescente',
        estacao_ano: 'verao',
        necessidade: 'social',
        cor: 'vermelho',
        tipo_estampa: 'liso',
        tipo_tenis: 'esportivo',
        tamanho_camisa: 'M',
        tamanho_sapato: 24,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'bermuda',
        valor: '62.1',
        genero: 'menina',
        fx_etaria: 'bebe',
        estacao_ano: 'outono',
        necessidade: 'escola',
        cor: 'vermelho',
        tipo_estampa: 'onça',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'P',
        tamanho_sapato: 19,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'camiseta',
        valor: '59.43',
        genero: 'menina',
        fx_etaria: 'adolescente',
        estacao_ano: 'primavera',
        necessidade: 'social',
        cor: 'branco',
        tipo_estampa: 'zebra',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'G',
        tamanho_sapato: 18,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'vestido',
        valor: '82.22',
        genero: 'menina',
        fx_etaria: 'adolescente',
        estacao_ano: 'inverno',
        necessidade: 'passear',
        cor: 'branco',
        tipo_estampa: 'floral',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'M',
        tamanho_sapato: 21,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'camiseta',
        valor: '98.54',
        genero: 'menina',
        fx_etaria: 'bebe',
        estacao_ano: 'verao',
        necessidade: 'social',
        cor: 'marrom',
        tipo_estampa: 'poá',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'PP',
        tamanho_sapato: 17,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'camiseta',
        valor: '48.33',
        genero: 'menino',
        fx_etaria: 'crianca',
        estacao_ano: 'inverno',
        necessidade: 'sair a noite',
        cor: 'rosa',
        tipo_estampa: 'listrado',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'G',
        tamanho_sapato: 27,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'tenis',
        valor: '39.78',
        genero: 'menino',
        fx_etaria: 'crianca',
        estacao_ano: 'outono',
        necessidade: 'social',
        cor: 'verde',
        tipo_estampa: 'liso',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'GG',
        tamanho_sapato: 34,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'saia',
        valor: '79.67',
        genero: 'menino',
        fx_etaria: 'bebe',
        estacao_ano: 'inverno',
        necessidade: 'social',
        cor: 'azul',
        tipo_estampa: 'desenho',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'M',
        tamanho_sapato: 13,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'tenis',
        valor: '60.51',
        genero: 'menina',
        fx_etaria: 'crianca',
        estacao_ano: 'primavera',
        necessidade: 'banho',
        cor: 'vermelho',
        tipo_estampa: 'floral',
        tipo_tenis: 'sandalia',
        tamanho_camisa: 'M',
        tamanho_sapato: 21,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
      {
        id: v4(),
        tipo: 'camiseta',
        valor: '39.51',
        genero: 'menina',
        fx_etaria: 'adolescente',
        estacao_ano: 'inverno',
        necessidade: 'sair a noite',
        cor: 'verde',
        tipo_estampa: 'liso',
        tipo_tenis: 'sneaker',
        tamanho_camisa: 'PP',
        tamanho_sapato: 34,
        tipo_estilo: 'ignore',
        tamanho_calca: 'ignore',
        created_at: '2021-04-04T01:38:58.940Z',
        updated_at: '2021-04-04T01:38:58.940Z',
      },
    ]),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('produto', null, {}),
};