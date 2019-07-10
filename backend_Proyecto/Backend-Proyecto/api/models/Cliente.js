/**
 * Cliente.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreCliente: {
      type: 'string',
      required: true
    },

    apellidoCliente:{
      type: 'string',
      required: true
    },

    nombreUsuario: {
      type: 'string',
      required: true
    },

    contrasenia: {
      type: 'string',
      required: true
    },

    clienteRol: {
      collection: 'RolUsuario',
      via: 'fkCliente'
    },

  },

};

