/**
 * Pedido.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    direccionCliente: {
      type: 'string',
      required: true
    },

    subtotal: {
      type: 'float',
      required: true
    },

    total: {
      type: 'float',
      required: true
    },

    cedula: {
      type: 'dtring',
      required: true,
      unique: true,
      minLength: 10,
      maxLength: 25,
      
    },

    

  },

};

