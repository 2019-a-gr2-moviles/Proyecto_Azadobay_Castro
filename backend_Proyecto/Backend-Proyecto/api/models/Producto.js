/**
 * Producto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreProducto:{
      type: 'string',
      required: true
    },

    descripcionProducto:{
      type: 'string',
      required: true
    },

    codigoProducto:{
      type: 'string',
      required: true
    },

    PVP:{
      type: 'float',
      required: true
    },

    productoDeBodega: {
      collection: 'BodegaProducto',
      via: 'fkProducto'
    },

    fkTipo: {
      model: 'Tipo'
    }

  },

};

