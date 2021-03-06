const { resolve } = require('path');

class listItensBag {
  constructor({ ejs, modelCliente, modelBag, findProduto }) {
    this.ejs = ejs;
    this.cliente = modelCliente;
    this.bag = modelBag;
    this.findProdutos = findProduto;
  }

  async createHTMLTable({ produtos, totalValueProdutos, nome }) {
    try {
      const filePath = resolve(
        __dirname,
        '..',
        '..',
        '..',
        'api',
        'views',
        'listProducts',
        'template.ejs'
      );

      const formartProdutos = produtos.map((produto) =>
        Object.assign(produto, {
          valor: Number(produto.valor).toFixed(2).replace('.', ','),
        })
      );

      const html = await this.ejs.renderFile(
        filePath,
        { produtos: formartProdutos, totalValueProdutos, nome },
        { async: true }
      );

      return html;
    } catch (error) {
      throw error;
    }
  }

  async getProdutos({ perfil }) {
    try {
      const {
        genero,
        fx_etaria,
        estacao_ano,
        tamanho_sapato,
        tamanho_calca,
        tamanho_camisa,
        cor,
        tipo_estampa,
        tipo_tenis,
        tipo_estilo,
      } = perfil;

      const requiredConditionals = [{ genero }, { fx_etaria }];

      const optionalConditionals = [
        { estacao_ano },
        { cor },
        { tipo_tenis },
        { tipo_estampa },
        { tipo_estilo },
        { tamanho_sapato },
        { tamanho_calca },
        { tamanho_camisa },
      ];

      const { produtos, totalValueProdutos } = await this.findProdutos.execute(
        requiredConditionals,
        optionalConditionals
      );

      return { produtos, totalValueProdutos };
    } catch (error) {
      throw error;
    }
  }

  async getClienteData({ bagID }) {
    try {
      const { cliente_id } = await this.bag.findByPk(bagID);
      const { perfil, nome } = await this.cliente.findByPk(cliente_id, {
        include: [{ association: 'perfil' }],
      });

      return { perfil, nome };
    } catch (error) {
      throw error;
    }
  }

  async execute({ bagID }) {
    try {
      const { perfil, nome } = await this.getClienteData({ bagID });
      const { produtos, totalValueProdutos } = await this.getProdutos({
        perfil,
      });
      const html = await this.createHTMLTable({
        produtos,
        nome,
        totalValueProdutos,
      });

      return html;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = listItensBag;
