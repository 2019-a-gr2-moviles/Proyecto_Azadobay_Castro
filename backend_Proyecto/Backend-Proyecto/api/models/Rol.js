/**
 * Rol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    tipoRol:{
      type: 'string',
      requiered: true,
      isIn: ['administrador', 'usuario'] 
    },

    rolCliente: {
      collection: 'RolUsuario',
      via: 'fkRol'
    }


  },

};

