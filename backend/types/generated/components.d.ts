import type { Schema, Struct } from '@strapi/strapi';

export interface SecurityCardItem extends Struct.ComponentSchema {
  collectionName: 'components_security_card_items';
  info: {
    description: '';
    displayName: 'card-item';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'security.card-item': SecurityCardItem;
    }
  }
}
