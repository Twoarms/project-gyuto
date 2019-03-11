'use strict';

/**
 * Albums.js controller
 *
 * @description: A set of functions called "actions" for managing `Albums`.
 */

module.exports = {

  /**
   * Retrieve albums records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.albums.search(ctx.query);
    } else {
      return strapi.services.albums.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a albums record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.albums.fetch(ctx.params);
  },

  /**
   * Count albums records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.albums.count(ctx.query);
  },

  /**
   * Create a/an albums record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.albums.add(ctx.request.body);
  },

  /**
   * Update a/an albums record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.albums.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an albums record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.albums.remove(ctx.params);
  }
};
