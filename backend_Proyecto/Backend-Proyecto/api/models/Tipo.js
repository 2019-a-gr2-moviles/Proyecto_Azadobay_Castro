/**
 * Tipo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreTipo: {
      type: 'string',
      required: true,
      isIn: ['mujer', 'hombre', 'niños']
    },

    tipoDeProducto:{
      collection: 'Producto',
      via: 'fkTipo'
    }

  },

};

