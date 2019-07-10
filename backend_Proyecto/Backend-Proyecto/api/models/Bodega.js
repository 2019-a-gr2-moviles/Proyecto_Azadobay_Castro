/**
 * Bodega.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreBodega: {
      type: 'string',
      required: true,
    },

    latitud: {
      type: 'string',
      required: true
    },

    longitud: {
      type: 'string',
      required: true
    },

    bodegaDeProducto:{
      collection: 'BodegaProducto',
      via: 'fkBodega'
    }



  },

};

