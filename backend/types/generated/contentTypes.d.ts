import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutBannerAboutBanner extends Struct.CollectionTypeSchema {
  collectionName: 'about_banners';
  info: {
    description: '';
    displayName: 'about-banner';
    pluralName: 'about-banners';
    singularName: 'about-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Get Started'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-banner.about-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAboutSiteAboutSite extends Struct.CollectionTypeSchema {
  collectionName: 'about_sites';
  info: {
    displayName: 'about-site';
    pluralName: 'about-sites';
    singularName: 'about-site';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    content_1: Schema.Attribute.Text & Schema.Attribute.Required;
    content_2: Schema.Attribute.Text & Schema.Attribute.Required;
    content_3: Schema.Attribute.Text & Schema.Attribute.Required;
    content_4: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-site.about-site'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAboutTeamAboutTeam extends Struct.CollectionTypeSchema {
  collectionName: 'about_teams';
  info: {
    description: '';
    displayName: 'about-team';
    pluralName: 'about-teams';
    singularName: 'about-team';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-team.about-team'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAboutToolAboutTool extends Struct.CollectionTypeSchema {
  collectionName: 'about_tools';
  info: {
    description: '';
    displayName: 'about-tool';
    pluralName: 'about-tools';
    singularName: 'about-tool';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-tool.about-tool'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAccessibilityBannerAccessibilityBanner
  extends Struct.CollectionTypeSchema {
  collectionName: 'accessibility_banners';
  info: {
    displayName: 'accessibility-banner';
    pluralName: 'accessibility-banners';
    singularName: 'accessibility-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::accessibility-banner.accessibility-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAccessibilityCard1AccessibilityCard1
  extends Struct.CollectionTypeSchema {
  collectionName: 'accessibility_card_1s';
  info: {
    description: '';
    displayName: 'accessibility-card-1';
    pluralName: 'accessibility-card-1s';
    singularName: 'accessibility-card-1';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::accessibility-card-1.accessibility-card-1'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'COURSE'>;
    main_title_1: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAccessibilityCard2AccessibilityCard2
  extends Struct.CollectionTypeSchema {
  collectionName: 'accessibility_card_2s';
  info: {
    description: '';
    displayName: 'accessibility-card-2';
    pluralName: 'accessibility-card-2s';
    singularName: 'accessibility-card-2';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'article'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::accessibility-card-2.accessibility-card-2'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAccessibilityCard3AccessibilityCard3
  extends Struct.CollectionTypeSchema {
  collectionName: 'accessibility_card_3s';
  info: {
    description: '';
    displayName: 'accessibility-card-3';
    pluralName: 'accessibility-card-3s';
    singularName: 'accessibility-card-3';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::accessibility-card-3.accessibility-card-3'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAccessibilityCard4AccessibilityCard4
  extends Struct.CollectionTypeSchema {
  collectionName: 'accessibility_card_4s';
  info: {
    description: '';
    displayName: 'accessibility-card-4';
    pluralName: 'accessibility-card-4s';
    singularName: 'accessibility-card-4';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Watch on YouTube'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::accessibility-card-4.accessibility-card-4'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoLink: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ApiAccessibilityJumpAccessibilityJump
  extends Struct.CollectionTypeSchema {
  collectionName: 'accessibility_jumps';
  info: {
    description: '';
    displayName: 'accessibility-jump';
    pluralName: 'accessibility-jumps';
    singularName: 'accessibility-jump';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::accessibility-jump.accessibility-jump'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAccessibilityNewToAccessibilityAccessibilityNewToAccessibility
  extends Struct.CollectionTypeSchema {
  collectionName: 'accessibility_new_to_accessibilities';
  info: {
    description: '';
    displayName: 'accessibility-new-to-accessibility';
    pluralName: 'accessibility-new-to-accessibilities';
    singularName: 'accessibility-new-to-accessibility';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn Accessibility'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::accessibility-new-to-accessibility.accessibility-new-to-accessibility'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text & Schema.Attribute.Required;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAiBannerAiBanner extends Struct.CollectionTypeSchema {
  collectionName: 'ai_banners';
  info: {
    displayName: 'ai-banner';
    pluralName: 'ai-banners';
    singularName: 'ai-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ai-banner.ai-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAiCardAiCard extends Struct.CollectionTypeSchema {
  collectionName: 'ai_cards';
  info: {
    displayName: 'ai-card';
    pluralName: 'ai-cards';
    singularName: 'ai-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read the doc'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ai-card.ai-card'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAiChrome1AiChrome1 extends Struct.CollectionTypeSchema {
  collectionName: 'ai_chrome_1s';
  info: {
    displayName: 'ai-chrome-1';
    pluralName: 'ai-chrome-1s';
    singularName: 'ai-chrome-1';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read the doc'>;
    button_1: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read the doc'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    content_1: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ai-chrome-1.ai-chrome-1'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    title_1: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAiChromeVideoTitleAiChromeVideoTitle
  extends Struct.CollectionTypeSchema {
  collectionName: 'ai_chrome_video_titles';
  info: {
    displayName: 'ai-chrome-video-title';
    pluralName: 'ai-chrome-video-titles';
    singularName: 'ai-chrome-video-title';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<' Watch the recordings'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'movie'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ai-chrome-video-title.ai-chrome-video-title'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Web AI Summit 2024'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAiChromeVideoAiChromeVideo
  extends Struct.CollectionTypeSchema {
  collectionName: 'ai_chrome_videos';
  info: {
    displayName: 'ai-chrome-video';
    pluralName: 'ai-chrome-videos';
    singularName: 'ai-chrome-video';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Watch on YouTube'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ai-chrome-video.ai-chrome-video'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoLink: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ApiAiChromeAiChrome extends Struct.CollectionTypeSchema {
  collectionName: 'ai_chromes';
  info: {
    displayName: 'ai-chrome';
    pluralName: 'ai-chromes';
    singularName: 'ai-chrome';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read the doc'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ai-chrome.ai-chrome'
    > &
      Schema.Attribute.Private;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAiGeminiAiGemini extends Struct.CollectionTypeSchema {
  collectionName: 'ai_geminis';
  info: {
    description: '';
    displayName: 'ai-gemini';
    pluralName: 'ai-geminis';
    singularName: 'ai-gemini';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text & Schema.Attribute.Required;
    button_1: Schema.Attribute.Text;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ai-gemini.ai-gemini'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAiGoogleVideoTitleAiGoogleVideoTitle
  extends Struct.CollectionTypeSchema {
  collectionName: 'ai_google_video_titles';
  info: {
    displayName: 'ai-google-video-title';
    pluralName: 'ai-google-video-titles';
    singularName: 'ai-google-video-title';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'movie'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ai-google-video-title.ai-google-video-title'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Watch to Learn'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAiGoogleVideoAiGoogleVideo
  extends Struct.CollectionTypeSchema {
  collectionName: 'ai_google_videos';
  info: {
    displayName: 'ai-google-video';
    pluralName: 'ai-google-videos';
    singularName: 'ai-google-video';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Watch on YouTube'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ai-google-video.ai-google-video'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoLink: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ApiAiRowAiRow extends Struct.CollectionTypeSchema {
  collectionName: 'ai_rows';
  info: {
    description: '';
    displayName: 'ai-row';
    pluralName: 'ai-rows';
    singularName: 'ai-row';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read the doc'>;
    button_1: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    content_1: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ai-row.ai-row'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    path_1: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    title_1: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBaselineBannerBaselineBanner
  extends Struct.CollectionTypeSchema {
  collectionName: 'baseline_banners';
  info: {
    displayName: 'baseline-banner';
    pluralName: 'baseline-banners';
    singularName: 'baseline-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::baseline-banner.baseline-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBaselineWorkBaselineWork
  extends Struct.CollectionTypeSchema {
  collectionName: 'baseline_works';
  info: {
    displayName: 'baseline-work';
    pluralName: 'baseline-works';
    singularName: 'baseline-work';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'check'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::baseline-work.baseline-work'
    > &
      Schema.Attribute.Private;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBaslineFindBaslineFind extends Struct.CollectionTypeSchema {
  collectionName: 'basline_finds';
  info: {
    description: '';
    displayName: 'basline-find';
    pluralName: 'basline-finds';
    singularName: 'basline-find';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::basline-find.basline-find'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBaslineJumpCardBaslineJumpCard
  extends Struct.CollectionTypeSchema {
  collectionName: 'basline_jump_cards';
  info: {
    displayName: 'basline-jump-card';
    pluralName: 'basline-jump-cards';
    singularName: 'basline-jump-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'check'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::basline-jump-card.basline-jump-card'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBaslineLatestNewBaslineLatestNew
  extends Struct.CollectionTypeSchema {
  collectionName: 'basline_latest_news';
  info: {
    description: '';
    displayName: 'basline-latest-new';
    pluralName: 'basline-latest-news';
    singularName: 'basline-latest-new';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::basline-latest-new.basline-latest-new'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBaslineLinkBaslineLink extends Struct.CollectionTypeSchema {
  collectionName: 'basline_links';
  info: {
    displayName: 'basline-link';
    pluralName: 'basline-links';
    singularName: 'basline-link';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    link_1: Schema.Attribute.Text;
    link_2: Schema.Attribute.Text;
    link_3: Schema.Attribute.String;
    link_4: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::basline-link.basline-link'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBaslineOverviewBaslineOverview
  extends Struct.CollectionTypeSchema {
  collectionName: 'basline_overviews';
  info: {
    description: '';
    displayName: 'basline-overview';
    pluralName: 'basline-overviews';
    singularName: 'basline-overview';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::basline-overview.basline-overview'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    title_1: Schema.Attribute.Text;
    title_2: Schema.Attribute.Text;
    title_3: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogBannerBlogBanner extends Struct.CollectionTypeSchema {
  collectionName: 'blog_banners';
  info: {
    displayName: 'blog-banner';
    pluralName: 'blog-banners';
    singularName: 'blog-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-banner.blog-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCaseBannerCaseBanner extends Struct.CollectionTypeSchema {
  collectionName: 'case_banners';
  info: {
    displayName: 'case-banner';
    pluralName: 'case-banners';
    singularName: 'case-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-banner.case-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCssAccessibiltieCssAccessibiltie
  extends Struct.CollectionTypeSchema {
  collectionName: 'css_accessibilties';
  info: {
    description: '';
    displayName: 'css-accessibiltie';
    pluralName: 'css-accessibilties';
    singularName: 'css-accessibiltie';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'article'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::css-accessibiltie.css-accessibiltie'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCssBannerCssBanner extends Struct.CollectionTypeSchema {
  collectionName: 'css_banners';
  info: {
    displayName: 'css-banner';
    pluralName: 'css-banners';
    singularName: 'css-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::css-banner.css-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCssJupmCssJupm extends Struct.CollectionTypeSchema {
  collectionName: 'css_jupms';
  info: {
    description: '';
    displayName: 'css-jupm';
    pluralName: 'css-jupms';
    singularName: 'css-jupm';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::css-jupm.css-jupm'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCssNewToCssCssNewToCss extends Struct.CollectionTypeSchema {
  collectionName: 'css_new_to_csses';
  info: {
    description: '';
    displayName: 'css-new-to-css';
    pluralName: 'css-new-to-csses';
    singularName: 'css-new-to-css';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn CSS!'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::css-new-to-css.css-new-to-css'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'COURSE'>;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCssPerformanceCssPerformance
  extends Struct.CollectionTypeSchema {
  collectionName: 'css_performances';
  info: {
    description: '';
    displayName: 'css-performance';
    pluralName: 'css-performances';
    singularName: 'css-performance';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'article'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::css-performance.css-performance'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCssPodcastCssPodcast extends Struct.CollectionTypeSchema {
  collectionName: 'css_podcasts';
  info: {
    displayName: 'css-podcast';
    pluralName: 'css-podcasts';
    singularName: 'css-podcast';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Listen Now!'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::css-podcast.css-podcast'
    > &
      Schema.Attribute.Private;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCssUiDesignCssUiDesign extends Struct.CollectionTypeSchema {
  collectionName: 'css_ui_designs';
  info: {
    description: '';
    displayName: 'css-ui-design';
    pluralName: 'css-ui-designs';
    singularName: 'css-ui-design';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'article'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::css-ui-design.css-ui-design'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCssnewfeatureCssnewfeature
  extends Struct.CollectionTypeSchema {
  collectionName: 'cssnewfeatures';
  info: {
    description: '';
    displayName: 'cssnewfeature';
    pluralName: 'cssnewfeatures';
    singularName: 'cssnewfeature';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'check'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cssnewfeature.cssnewfeature'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDiveIntoCssPatternDiveIntoCssPattern
  extends Struct.CollectionTypeSchema {
  collectionName: 'dive_into_css_patterns';
  info: {
    displayName: 'dive-into-css-pattern';
    pluralName: 'dive-into-css-patterns';
    singularName: 'dive-into-css-pattern';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'See Patterns'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::dive-into-css-pattern.dive-into-css-pattern'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiExploreBannerExploreBanner
  extends Struct.CollectionTypeSchema {
  collectionName: 'explore_banners';
  info: {
    displayName: 'explore-banner';
    pluralName: 'explore-banners';
    singularName: 'explore-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::explore-banner.explore-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiExploreBuildExcellentExploreBuildExcellent
  extends Struct.CollectionTypeSchema {
  collectionName: 'explore_build_excellents';
  info: {
    description: '';
    displayName: 'explore-build-excellent';
    pluralName: 'explore-build-excellents';
    singularName: 'explore-build-excellent';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::explore-build-excellent.explore-build-excellent'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiExploreExcellentWebsiteExploreExcellentWebsite
  extends Struct.CollectionTypeSchema {
  collectionName: 'explore_excellent_websites';
  info: {
    description: '';
    displayName: 'explore-excellent-website';
    pluralName: 'explore-excellent-websites';
    singularName: 'explore-excellent-website';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::explore-excellent-website.explore-excellent-website'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiExploreExplorationExploreExploration
  extends Struct.CollectionTypeSchema {
  collectionName: 'explore_explorations';
  info: {
    displayName: 'explore-exploration';
    pluralName: 'explore-explorations';
    singularName: 'explore-exploration';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Explore'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::explore-exploration.explore-exploration'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text & Schema.Attribute.Required;
    main_title_1: Schema.Attribute.Text & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiExploreExplore extends Struct.CollectionTypeSchema {
  collectionName: 'explores';
  info: {
    description: '';
    displayName: 'explore';
    pluralName: 'explores';
    singularName: 'explore';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::explore.explore'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeBannerHomeBanner extends Struct.CollectionTypeSchema {
  collectionName: 'home_banners';
  info: {
    displayName: 'home-banner';
    pluralName: 'home-banners';
    singularName: 'home-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-banner.home-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeBox1HomeBox1 extends Struct.CollectionTypeSchema {
  collectionName: 'home_box1s';
  info: {
    displayName: 'home-box1';
    pluralName: 'home-box1s';
    singularName: 'home-box1';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Explore CSS'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-box1.home-box1'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeBox2HomeBox2 extends Struct.CollectionTypeSchema {
  collectionName: 'home_box2s';
  info: {
    displayName: 'home-box2';
    pluralName: 'home-box2s';
    singularName: 'home-box2';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-box2.home-box2'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeBox3HomeBox3 extends Struct.CollectionTypeSchema {
  collectionName: 'home_box3s';
  info: {
    displayName: 'home-box3';
    pluralName: 'home-box3s';
    singularName: 'home-box3';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-box3.home-box3'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeBox4HomeBox4 extends Struct.CollectionTypeSchema {
  collectionName: 'home_box4s';
  info: {
    displayName: 'home-box4';
    pluralName: 'home-box4s';
    singularName: 'home-box4';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-box4.home-box4'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeBox5HomeBox5 extends Struct.CollectionTypeSchema {
  collectionName: 'home_box5s';
  info: {
    description: '';
    displayName: 'home-box5';
    pluralName: 'home-box5s';
    singularName: 'home-box5';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-box5.home-box5'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeCardHomeCard extends Struct.CollectionTypeSchema {
  collectionName: 'home_cards';
  info: {
    description: '';
    displayName: 'home-card';
    pluralName: 'home-cards';
    singularName: 'home-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-card.home-card'
    > &
      Schema.Attribute.Private;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeLink1HomeLink1 extends Struct.CollectionTypeSchema {
  collectionName: 'home_link1s';
  info: {
    displayName: 'home-link1';
    pluralName: 'home-link1s';
    singularName: 'home-link1';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    content_1: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-link1.home-link1'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    title_1: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeLink10HomeLink10 extends Struct.CollectionTypeSchema {
  collectionName: 'home_link10s';
  info: {
    displayName: 'home-link10';
    pluralName: 'home-link10s';
    singularName: 'home-link10';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    content_1: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-link10.home-link10'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    title_1: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeLink2HomeLink2 extends Struct.CollectionTypeSchema {
  collectionName: 'home_link2s';
  info: {
    displayName: 'home-link2';
    pluralName: 'home-link2s';
    singularName: 'home-link2';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    content_1: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-link2.home-link2'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    title_1: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeLink3HomeLink3 extends Struct.CollectionTypeSchema {
  collectionName: 'home_link3s';
  info: {
    displayName: 'home-link3';
    pluralName: 'home-link3s';
    singularName: 'home-link3';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    content_1: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-link3.home-link3'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    title_1: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeLink4HomeLink4 extends Struct.CollectionTypeSchema {
  collectionName: 'home_link4s';
  info: {
    displayName: 'home-link4';
    pluralName: 'home-link4s';
    singularName: 'home-link4';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    content_1: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-link4.home-link4'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    title_1: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeLink5HomeLink5 extends Struct.CollectionTypeSchema {
  collectionName: 'home_link5s';
  info: {
    displayName: 'home-link5';
    pluralName: 'home-link5s';
    singularName: 'home-link5';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    content_1: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-link5.home-link5'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    title_1: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeLink6HomeLink6 extends Struct.CollectionTypeSchema {
  collectionName: 'home_link6s';
  info: {
    displayName: 'home-link6';
    pluralName: 'home-link6s';
    singularName: 'home-link6';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    content_1: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-link6.home-link6'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    title_1: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeLink7HomeLink7 extends Struct.CollectionTypeSchema {
  collectionName: 'home_link7s';
  info: {
    description: '';
    displayName: 'home-link7';
    pluralName: 'home-link7s';
    singularName: 'home-link7';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    content_1: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-link7.home-link7'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    title_1: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeLink8HomeLink8 extends Struct.CollectionTypeSchema {
  collectionName: 'home_link8s';
  info: {
    displayName: 'home-link8';
    pluralName: 'home-link8s';
    singularName: 'home-link8';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    content_1: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-link8.home-link8'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    title_1: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeLink9HomeLink9 extends Struct.CollectionTypeSchema {
  collectionName: 'home_link9s';
  info: {
    displayName: 'home-link9';
    pluralName: 'home-link9s';
    singularName: 'home-link9';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    content_1: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-link9.home-link9'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    title_1: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeNewHomeNew extends Struct.CollectionTypeSchema {
  collectionName: 'home_news';
  info: {
    description: '';
    displayName: 'home-new';
    pluralName: 'home-news';
    singularName: 'home-new';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-new.home-new'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHtmlAccessibilitieHtmlAccessibilitie
  extends Struct.CollectionTypeSchema {
  collectionName: 'html_accessibilities';
  info: {
    description: '';
    displayName: 'html-accessibilitie';
    pluralName: 'html-accessibilities';
    singularName: 'html-accessibilitie';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'article'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::html-accessibilitie.html-accessibilitie'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHtmlBannerHtmlBanner extends Struct.CollectionTypeSchema {
  collectionName: 'html_banners';
  info: {
    displayName: 'html-banner';
    pluralName: 'html-banners';
    singularName: 'html-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::html-banner.html-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHtmlCourseHtmlCourse extends Struct.CollectionTypeSchema {
  collectionName: 'html_courses';
  info: {
    description: '';
    displayName: 'html-course';
    pluralName: 'html-courses';
    singularName: 'html-course';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::html-course.html-course'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHtmlDevtoolHtmlDevtool extends Struct.CollectionTypeSchema {
  collectionName: 'html_devtools';
  info: {
    description: '';
    displayName: 'html-devtool';
    pluralName: 'html-devtools';
    singularName: 'html-devtool';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'code'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::html-devtool.html-devtool'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHtmlJumpHtmlJump extends Struct.CollectionTypeSchema {
  collectionName: 'html_jumps';
  info: {
    displayName: 'html-jump';
    pluralName: 'html-jumps';
    singularName: 'html-jump';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::html-jump.html-jump'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHtmlNewToHtmlHtmlNewToHtml
  extends Struct.CollectionTypeSchema {
  collectionName: 'html_new_to_htmls';
  info: {
    description: '';
    displayName: 'html-new-to-html';
    pluralName: 'html-new-to-htmls';
    singularName: 'html-new-to-html';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn HTML!'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::html-new-to-html.html-new-to-html'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'COURSE'>;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHtmlPerformanceHtmlPerformance
  extends Struct.CollectionTypeSchema {
  collectionName: 'html_performances';
  info: {
    displayName: 'html-performance';
    pluralName: 'html-performances';
    singularName: 'html-performance';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'article'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::html-performance.html-performance'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHtmlnewfeatureHtmlnewfeature
  extends Struct.CollectionTypeSchema {
  collectionName: 'htmlnewfeatures';
  info: {
    description: '';
    displayName: 'htmlnewfeature';
    pluralName: 'htmlnewfeatures';
    singularName: 'htmlnewfeature';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'check'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::htmlnewfeature.htmlnewfeature'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIdentityBannerIdentityBanner
  extends Struct.CollectionTypeSchema {
  collectionName: 'identity_banners';
  info: {
    displayName: 'identity-banner';
    pluralName: 'identity-banners';
    singularName: 'identity-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::identity-banner.identity-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIdentityCard1IdentityCard1
  extends Struct.CollectionTypeSchema {
  collectionName: 'identity_card_1s';
  info: {
    description: '';
    displayName: 'identity-card-1';
    pluralName: 'identity-card-1s';
    singularName: 'identity-card-1';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read case study'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::identity-card-1.identity-card-1'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIdentityLink1IdentityLink1
  extends Struct.CollectionTypeSchema {
  collectionName: 'identity_link_1s';
  info: {
    displayName: 'identity-link-1';
    pluralName: 'identity-link-1s';
    singularName: 'identity-link-1';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    link_1: Schema.Attribute.Text;
    link_2: Schema.Attribute.Text;
    link_3: Schema.Attribute.Text;
    link_4: Schema.Attribute.Text;
    link_5: Schema.Attribute.Text;
    link_6: Schema.Attribute.Text;
    link_7: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::identity-link-1.identity-link-1'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIdentityLink2IdentityLink2
  extends Struct.CollectionTypeSchema {
  collectionName: 'identity_link_2s';
  info: {
    displayName: 'identity-link-2';
    pluralName: 'identity-link-2s';
    singularName: 'identity-link-2';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    link_1: Schema.Attribute.Text;
    link_2: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::identity-link-2.identity-link-2'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIdentityLinkIdentityLink
  extends Struct.CollectionTypeSchema {
  collectionName: 'identity_links';
  info: {
    displayName: 'identity-link';
    pluralName: 'identity-links';
    singularName: 'identity-link';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    link_1: Schema.Attribute.Text;
    link_2: Schema.Attribute.Text;
    link_3: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::identity-link.identity-link'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIdentityOverview1IdentityOverview1
  extends Struct.CollectionTypeSchema {
  collectionName: 'identity_overview_1s';
  info: {
    displayName: 'identity-overview-1';
    pluralName: 'identity-overview-1s';
    singularName: 'identity-overview-1';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::identity-overview-1.identity-overview-1'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIdentityOverview2IdentityOverview2
  extends Struct.CollectionTypeSchema {
  collectionName: 'identity_overview_2s';
  info: {
    displayName: 'identity-overview-2';
    pluralName: 'identity-overview-2s';
    singularName: 'identity-overview-2';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::identity-overview-2.identity-overview-2'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIdentityOverviewIdentityOverview
  extends Struct.CollectionTypeSchema {
  collectionName: 'identity_overviews';
  info: {
    displayName: 'identity-overview';
    pluralName: 'identity-overviews';
    singularName: 'identity-overview';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::identity-overview.identity-overview'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIdentityPmc1IdentityPmc1
  extends Struct.CollectionTypeSchema {
  collectionName: 'identity_pmc_1s';
  info: {
    description: '';
    displayName: 'identity-pmc-1';
    pluralName: 'identity-pmc-1s';
    singularName: 'identity-pmc-1';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::identity-pmc-1.identity-pmc-1'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIdentityPmcTitleIdentityPmcTitle
  extends Struct.CollectionTypeSchema {
  collectionName: 'identity_pmc_titles';
  info: {
    displayName: 'identity-pmc-title';
    pluralName: 'identity-pmc-titles';
    singularName: 'identity-pmc-title';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::identity-pmc-title.identity-pmc-title'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIdentityPmcIdentityPmc extends Struct.CollectionTypeSchema {
  collectionName: 'identity_pmcs';
  info: {
    displayName: 'identity-pmc';
    pluralName: 'identity-pmcs';
    singularName: 'identity-pmc';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::identity-pmc.identity-pmc'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInpBannerInpBanner extends Struct.CollectionTypeSchema {
  collectionName: 'inp_banners';
  info: {
    displayName: 'inp-banner';
    pluralName: 'inp-banners';
    singularName: 'inp-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::inp-banner.inp-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInpLinkInpLink extends Struct.CollectionTypeSchema {
  collectionName: 'inp_links';
  info: {
    description: '';
    displayName: 'inp-link';
    pluralName: 'inp-links';
    singularName: 'inp-link';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    link_1: Schema.Attribute.Text;
    link_2: Schema.Attribute.Text;
    link_3: Schema.Attribute.Text;
    link_4: Schema.Attribute.Text;
    link_5: Schema.Attribute.Text;
    link_6: Schema.Attribute.Text;
    link_7: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::inp-link.inp-link'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInpOverviewInpOverview extends Struct.CollectionTypeSchema {
  collectionName: 'inp_overviews';
  info: {
    displayName: 'inp-overview';
    pluralName: 'inp-overviews';
    singularName: 'inp-overview';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::inp-overview.inp-overview'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiJavascriptThirdPartieJavascriptThirdPartie
  extends Struct.CollectionTypeSchema {
  collectionName: 'javascript_third_parties';
  info: {
    displayName: 'javascript-third-partie';
    pluralName: 'javascript-third-parties';
    singularName: 'javascript-third-partie';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'article'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::javascript-third-partie.javascript-third-partie'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiJsBannerJsBanner extends Struct.CollectionTypeSchema {
  collectionName: 'js_banners';
  info: {
    displayName: 'js-banner';
    pluralName: 'js-banners';
    singularName: 'js-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::js-banner.js-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiJsDiveIntoJsPatternJsDiveIntoJsPattern
  extends Struct.CollectionTypeSchema {
  collectionName: 'js_dive_into_js_patterns';
  info: {
    displayName: 'js-dive-into-js-pattern';
    pluralName: 'js-dive-into-js-patterns';
    singularName: 'js-dive-into-js-pattern';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'See Patterns'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::js-dive-into-js-pattern.js-dive-into-js-pattern'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiJsJumpJsJump extends Struct.CollectionTypeSchema {
  collectionName: 'js_jumps';
  info: {
    displayName: 'js-jump';
    pluralName: 'js-jumps';
    singularName: 'js-jump';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::js-jump.js-jump'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiJsNewToJsJsNewToJs extends Struct.CollectionTypeSchema {
  collectionName: 'js_new_to_jses';
  info: {
    displayName: 'js-new-to-js';
    pluralName: 'js-new-to-jses';
    singularName: 'js-new-to-js';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn Javascript!'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::js-new-to-js.js-new-to-js'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiJscommonuseJscommonuse extends Struct.CollectionTypeSchema {
  collectionName: 'jscommonuses';
  info: {
    description: '';
    displayName: 'jscommonuse';
    pluralName: 'jscommonuses';
    singularName: 'jscommonuse';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'article'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::jscommonuse.jscommonuse'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiJsnewfeatureJsnewfeature
  extends Struct.CollectionTypeSchema {
  collectionName: 'jsnewfeatures';
  info: {
    displayName: 'jsnewfeature';
    pluralName: 'jsnewfeatures';
    singularName: 'jsnewfeature';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'check'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::jsnewfeature.jsnewfeature'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiJsoptimizepoorJsoptimizepoor
  extends Struct.CollectionTypeSchema {
  collectionName: 'jsoptimizepoors';
  info: {
    displayName: 'jsoptimizepoor';
    pluralName: 'jsoptimizepoors';
    singularName: 'jsoptimizepoor';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'article'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::jsoptimizepoor.jsoptimizepoor'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.Text;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnAccessibilityItemLearnAccessibilityItem
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_accessibility_items';
  info: {
    displayName: 'learn-accessibility-item';
    pluralName: 'learn-accessibility-items';
    singularName: 'learn-accessibility-item';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articleLink: Schema.Attribute.Text;
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read Article'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-accessibility-item.learn-accessibility-item'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnBannerLearnBanner extends Struct.CollectionTypeSchema {
  collectionName: 'learn_banners';
  info: {
    displayName: 'learn-banner';
    pluralName: 'learn-banners';
    singularName: 'learn-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-banner.learn-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnCssItemLearnCssItem
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_css_items';
  info: {
    displayName: 'learn-css-item';
    pluralName: 'learn-css-items';
    singularName: 'learn-css-item';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articleLink: Schema.Attribute.Text;
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read Article'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-css-item.learn-css-item'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnDesignItemLearnDesignItem
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_design_items';
  info: {
    displayName: 'learn-design-item';
    pluralName: 'learn-design-items';
    singularName: 'learn-design-item';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articleLink: Schema.Attribute.Text & Schema.Attribute.Required;
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read Article'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-design-item.learn-design-item'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnFormItemLearnFormItem
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_form_items';
  info: {
    displayName: 'learn-form-item';
    pluralName: 'learn-form-items';
    singularName: 'learn-form-item';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articleLink: Schema.Attribute.Text;
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read Article'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-form-item.learn-form-item'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnHtmlItemLearnHtmlItem
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_html_items';
  info: {
    displayName: 'learn-html-item';
    pluralName: 'learn-html-items';
    singularName: 'learn-html-item';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articleLink: Schema.Attribute.Text;
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read Article'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-html-item.learn-html-item'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnImageItemLearnImageItem
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_image_items';
  info: {
    displayName: 'learn-image-item';
    pluralName: 'learn-image-items';
    singularName: 'learn-image-item';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articleLink: Schema.Attribute.Text & Schema.Attribute.Required;
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read Article'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-image-item.learn-image-item'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnJavascriptItemLearnJavascriptItem
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_javascript_items';
  info: {
    displayName: 'learn-javascript-item';
    pluralName: 'learn-javascript-items';
    singularName: 'learn-javascript-item';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articleLink: Schema.Attribute.Text & Schema.Attribute.Required;
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read Article'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-javascript-item.learn-javascript-item'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnNavItemLearnNavItem
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_nav_items';
  info: {
    displayName: 'learn-nav-item';
    pluralName: 'learn-nav-items';
    singularName: 'learn-nav-item';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-nav-item.learn-nav-item'
    > &
      Schema.Attribute.Private;
    path: Schema.Attribute.Text & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnPerformanceItemLearnPerformanceItem
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_performance_items';
  info: {
    displayName: 'learn-performance-item';
    pluralName: 'learn-performance-items';
    singularName: 'learn-performance-item';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articleLink: Schema.Attribute.Text;
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'bookmark'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-performance-item.learn-performance-item'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnPrivacyItemLearnPrivacyItem
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_privacy_items';
  info: {
    displayName: 'learn-privacy-item';
    pluralName: 'learn-privacy-items';
    singularName: 'learn-privacy-item';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articleLink: Schema.Attribute.Text;
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read Article'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-privacy-item.learn-privacy-item'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnPwaItemLearnPwaItem
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_pwa_items';
  info: {
    displayName: 'learn-pwa-item';
    pluralName: 'learn-pwa-items';
    singularName: 'learn-pwa-item';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articleLink: Schema.Attribute.Text;
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read Article'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-pwa-item.learn-pwa-item'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnRowBanner1LearnRowBanner1
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_row_banner_1s';
  info: {
    displayName: 'learn-row-banner-1';
    pluralName: 'learn-row-banner-1s';
    singularName: 'learn-row-banner-1';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activities: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'bookmark'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-row-banner-1.learn-row-banner-1'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnRowBanner10LearnRowBanner10
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_row_banner_10s';
  info: {
    displayName: 'learn-row-banner-10';
    pluralName: 'learn-row-banner-10s';
    singularName: 'learn-row-banner-10';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activities: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'bookmark'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-row-banner-10.learn-row-banner-10'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnRowBanner11LearnRowBanner11
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_row_banner_11s';
  info: {
    displayName: 'learn-row-banner-11';
    pluralName: 'learn-row-banner-11s';
    singularName: 'learn-row-banner-11';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activities: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'bookmark'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-row-banner-11.learn-row-banner-11'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnRowBanner12LearnRowBanner12
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_row_banner_12s';
  info: {
    displayName: 'learn-row-banner-12';
    pluralName: 'learn-row-banner-12s';
    singularName: 'learn-row-banner-12';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activities: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'bookmark'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-row-banner-12.learn-row-banner-12'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnRowBanner2LearnRowBanner2
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_row_banner_2s';
  info: {
    displayName: 'learn-row-banner-2';
    pluralName: 'learn-row-banner-2s';
    singularName: 'learn-row-banner-2';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activities: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'bookmark'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-row-banner-2.learn-row-banner-2'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnRowBanner3LearnRowBanner3
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_row_banner_3s';
  info: {
    displayName: 'learn-row-banner-3';
    pluralName: 'learn-row-banner-3s';
    singularName: 'learn-row-banner-3';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activities: Schema.Attribute.Text;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'bookmark'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-row-banner-3.learn-row-banner-3'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnRowBanner4LearnRowBanner4
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_row_banner_4s';
  info: {
    displayName: 'learn-row-banner-4';
    pluralName: 'learn-row-banner-4s';
    singularName: 'learn-row-banner-4';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activities: Schema.Attribute.Text;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'bookmark'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-row-banner-4.learn-row-banner-4'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnRowBanner5LearnRowBanner5
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_row_banner_5s';
  info: {
    displayName: 'learn-row-banner-5';
    pluralName: 'learn-row-banner-5s';
    singularName: 'learn-row-banner-5';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activities: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'bookmark'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-row-banner-5.learn-row-banner-5'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnRowBanner8LearnRowBanner8
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_row_banner_8s';
  info: {
    displayName: 'learn-row-banner-8';
    pluralName: 'learn-row-banner-8s';
    singularName: 'learn-row-banner-8';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activities: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'bookmark'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-row-banner-8.learn-row-banner-8'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnRowBanner9LearnRowBanner9
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_row_banner_9s';
  info: {
    displayName: 'learn-row-banner-9';
    pluralName: 'learn-row-banner-9s';
    singularName: 'learn-row-banner-9';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activities: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'bookmark'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-row-banner-9.learn-row-banner-9'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnRowBannerLearnRowBanner
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_row_banners';
  info: {
    displayName: 'learn-row-banner';
    pluralName: 'learn-row-banners';
    singularName: 'learn-row-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activities: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'bookmark'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-row-banner.learn-row-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnTestingItemLearnTestingItem
  extends Struct.CollectionTypeSchema {
  collectionName: 'learn_testing_items';
  info: {
    displayName: 'learn-testing-item';
    pluralName: 'learn-testing-items';
    singularName: 'learn-testing-item';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articleLink: Schema.Attribute.Text;
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read Article'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::learn-testing-item.learn-testing-item'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLearnLearn extends Struct.CollectionTypeSchema {
  collectionName: 'learns';
  info: {
    displayName: 'learn';
    pluralName: 'learns';
    singularName: 'learn';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Start Course'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::learn.learn'> &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Course'>;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNewsletterBannerNewsletterBanner
  extends Struct.CollectionTypeSchema {
  collectionName: 'newsletter_banners';
  info: {
    displayName: 'newsletter-banner';
    pluralName: 'newsletter-banners';
    singularName: 'newsletter-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::newsletter-banner.newsletter-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNewsletterCardNewsletterCard
  extends Struct.CollectionTypeSchema {
  collectionName: 'newsletter_cards';
  info: {
    displayName: 'newsletter-card';
    pluralName: 'newsletter-cards';
    singularName: 'newsletter-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::newsletter-card.newsletter-card'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPatternPattern extends Struct.CollectionTypeSchema {
  collectionName: 'patterns';
  info: {
    displayName: 'pattern';
    pluralName: 'patterns';
    singularName: 'pattern';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'See Patterns'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pattern.pattern'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPerformanceBannerPerformanceBanner
  extends Struct.CollectionTypeSchema {
  collectionName: 'performance_banners';
  info: {
    displayName: 'performance-banner';
    pluralName: 'performance-banners';
    singularName: 'performance-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::performance-banner.performance-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPerformanceCaseStudieTitlePerformanceCaseStudieTitle
  extends Struct.CollectionTypeSchema {
  collectionName: 'performance_case_studie_titles';
  info: {
    description: '';
    displayName: 'performance-case-studie-title';
    pluralName: 'performance-case-studie-titles';
    singularName: 'performance-case-studie-title';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::performance-case-studie-title.performance-case-studie-title'
    > &
      Schema.Attribute.Private;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPerformanceCaseStudiePerformanceCaseStudie
  extends Struct.CollectionTypeSchema {
  collectionName: 'performance_case_studies';
  info: {
    description: '';
    displayName: 'performance-case-studie';
    pluralName: 'performance-case-studies';
    singularName: 'performance-case-studie';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'speed'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::performance-case-studie.performance-case-studie'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPerformanceCoreWebTitlePerformanceCoreWebTitle
  extends Struct.CollectionTypeSchema {
  collectionName: 'performance_core_web_titles';
  info: {
    description: '';
    displayName: 'performance-core-web-title';
    pluralName: 'performance-core-web-titles';
    singularName: 'performance-core-web-title';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::performance-core-web-title.performance-core-web-title'
    > &
      Schema.Attribute.Private;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPerformanceCoreWebPerformanceCoreWeb
  extends Struct.CollectionTypeSchema {
  collectionName: 'performance_core_webs';
  info: {
    displayName: 'performance-core-web';
    pluralName: 'performance-core-webs';
    singularName: 'performance-core-web';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::performance-core-web.performance-core-web'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPerformanceDebugTitlePerformanceDebugTitle
  extends Struct.CollectionTypeSchema {
  collectionName: 'performance_debug_titles';
  info: {
    description: '';
    displayName: 'performance-debug-title';
    pluralName: 'performance-debug-titles';
    singularName: 'performance-debug-title';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::performance-debug-title.performance-debug-title'
    > &
      Schema.Attribute.Private;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPerformanceDebugPerformanceDebug
  extends Struct.CollectionTypeSchema {
  collectionName: 'performance_debugs';
  info: {
    displayName: 'performance-debug';
    pluralName: 'performance-debugs';
    singularName: 'performance-debug';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::performance-debug.performance-debug'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPerformanceDivePerformanceDive
  extends Struct.CollectionTypeSchema {
  collectionName: 'performance_dives';
  info: {
    description: '';
    displayName: 'performance-dive';
    pluralName: 'performance-dives';
    singularName: 'performance-dive';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::performance-dive.performance-dive'
    > &
      Schema.Attribute.Private;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPerformanceJumpPerformanceJump
  extends Struct.CollectionTypeSchema {
  collectionName: 'performance_jumps';
  info: {
    description: '';
    displayName: 'performance-jump';
    pluralName: 'performance-jumps';
    singularName: 'performance-jump';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::performance-jump.performance-jump'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text;
    path: Schema.Attribute.Text & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPerformanceNewToPerformancePerformanceNewToPerformance
  extends Struct.CollectionTypeSchema {
  collectionName: 'performance_new_to_performances';
  info: {
    displayName: 'performance-new-to-performance';
    pluralName: 'performance-new-to-performances';
    singularName: 'performance-new-to-performance';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn Preformance'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::performance-new-to-performance.performance-new-to-performance'
    > &
      Schema.Attribute.Private;
    main_title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Course'>;
    path: Schema.Attribute.Text & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPerformanceNewlyBaslineTitlePerformanceNewlyBaslineTitle
  extends Struct.CollectionTypeSchema {
  collectionName: 'performance_newly_basline_titles';
  info: {
    description: '';
    displayName: 'performance-newly-basline-title';
    pluralName: 'performance-newly-basline-titles';
    singularName: 'performance-newly-basline-title';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::performance-newly-basline-title.performance-newly-basline-title'
    > &
      Schema.Attribute.Private;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPerformanceNewlyBaslinePerformanceNewlyBasline
  extends Struct.CollectionTypeSchema {
  collectionName: 'performance_newly_baslines';
  info: {
    description: '';
    displayName: 'performance-newly-basline';
    pluralName: 'performance-newly-baslines';
    singularName: 'performance-newly-basline';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icons: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'check'>;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::performance-newly-basline.performance-newly-basline'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPerformanceOptimizeTitlePerformanceOptimizeTitle
  extends Struct.CollectionTypeSchema {
  collectionName: 'performance_optimize_titles';
  info: {
    description: '';
    displayName: 'performance-optimize-title';
    pluralName: 'performance-optimize-titles';
    singularName: 'performance-optimize-title';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::performance-optimize-title.performance-optimize-title'
    > &
      Schema.Attribute.Private;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPerformanceOptimizePerformanceOptimize
  extends Struct.CollectionTypeSchema {
  collectionName: 'performance_optimizes';
  info: {
    displayName: 'performance-optimize';
    pluralName: 'performance-optimizes';
    singularName: 'performance-optimize';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn More'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::performance-optimize.performance-optimize'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPerformancePageSpeedPerformancePageSpeed
  extends Struct.CollectionTypeSchema {
  collectionName: 'performance_page_speeds';
  info: {
    displayName: 'performance-page-speed';
    pluralName: 'performance-page-speeds';
    singularName: 'performance-page-speed';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Get Started'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::performance-page-speed.performance-page-speed'
    > &
      Schema.Attribute.Private;
    path: Schema.Attribute.Text & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProgressiveBannerProgressiveBanner
  extends Struct.CollectionTypeSchema {
  collectionName: 'progressive_banners';
  info: {
    displayName: 'progressive-banner';
    pluralName: 'progressive-banners';
    singularName: 'progressive-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::progressive-banner.progressive-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProgressiveLinkProgressiveLink
  extends Struct.CollectionTypeSchema {
  collectionName: 'progressive_links';
  info: {
    displayName: 'progressive-link';
    pluralName: 'progressive-links';
    singularName: 'progressive-link';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    link_1: Schema.Attribute.Text;
    link_2: Schema.Attribute.Text;
    link_3: Schema.Attribute.Text;
    link_4: Schema.Attribute.String;
    link_5: Schema.Attribute.Text;
    link_6: Schema.Attribute.Text;
    link_7: Schema.Attribute.Text;
    link_8: Schema.Attribute.Text;
    link_9: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::progressive-link.progressive-link'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProgressiveOverviewProgressiveOverview
  extends Struct.CollectionTypeSchema {
  collectionName: 'progressive_overviews';
  info: {
    displayName: 'progressive-overview';
    pluralName: 'progressive-overviews';
    singularName: 'progressive-overview';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::progressive-overview.progressive-overview'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSecurityBannerSecurityBanner
  extends Struct.CollectionTypeSchema {
  collectionName: 'security_banners';
  info: {
    displayName: 'security-banner';
    pluralName: 'security-banners';
    singularName: 'security-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::security-banner.security-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSecurityLink2SecurityLink2
  extends Struct.CollectionTypeSchema {
  collectionName: 'security_link_2s';
  info: {
    description: '';
    displayName: 'security-link-2';
    pluralName: 'security-link-2s';
    singularName: 'security-link-2';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    link_1: Schema.Attribute.Text;
    link_2: Schema.Attribute.Text;
    link_3: Schema.Attribute.Text;
    link_4: Schema.Attribute.Text;
    link_5: Schema.Attribute.Text;
    link_6: Schema.Attribute.Text;
    link_7: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::security-link-2.security-link-2'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSecurityLink3SecurityLink3
  extends Struct.CollectionTypeSchema {
  collectionName: 'security_link_3s';
  info: {
    displayName: 'security-link-3';
    pluralName: 'security-link-3s';
    singularName: 'security-link-3';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    link_1: Schema.Attribute.Text;
    link_2: Schema.Attribute.Text;
    link_3: Schema.Attribute.Text;
    link_4: Schema.Attribute.Text;
    link_5: Schema.Attribute.Text;
    link_6: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::security-link-3.security-link-3'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSecurityLinkSecurityLink
  extends Struct.CollectionTypeSchema {
  collectionName: 'security_links';
  info: {
    displayName: 'security-link';
    pluralName: 'security-links';
    singularName: 'security-link';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    link_1: Schema.Attribute.Text;
    link_2: Schema.Attribute.Text;
    link_3: Schema.Attribute.Text;
    link_4: Schema.Attribute.Text;
    link_5: Schema.Attribute.Text;
    link_6: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::security-link.security-link'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSecurityOverview1SecurityOverview1
  extends Struct.CollectionTypeSchema {
  collectionName: 'security_overview_1s';
  info: {
    displayName: 'security-overview-1';
    pluralName: 'security-overview-1s';
    singularName: 'security-overview-1';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::security-overview-1.security-overview-1'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSecurityOverview2SecurityOverview2
  extends Struct.CollectionTypeSchema {
  collectionName: 'security_overview_2s';
  info: {
    displayName: 'security-overview-2';
    pluralName: 'security-overview-2s';
    singularName: 'security-overview-2';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::security-overview-2.security-overview-2'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSecurityOverviewSecurityOverview
  extends Struct.CollectionTypeSchema {
  collectionName: 'security_overviews';
  info: {
    displayName: 'security-overview';
    pluralName: 'security-overviews';
    singularName: 'security-overview';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::security-overview.security-overview'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiShowsBannerShowsBanner extends Struct.CollectionTypeSchema {
  collectionName: 'shows_banners';
  info: {
    displayName: 'shows-banner';
    pluralName: 'shows-banners';
    singularName: 'shows-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::shows-banner.shows-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiShowsCardShowsCard extends Struct.CollectionTypeSchema {
  collectionName: 'shows_cards';
  info: {
    displayName: 'shows-card';
    pluralName: 'shows-cards';
    singularName: 'shows-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imglink: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::shows-card.shows-card'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiShowsNavItemShowsNavItem
  extends Struct.CollectionTypeSchema {
  collectionName: 'shows_nav_items';
  info: {
    displayName: 'shows-nav-item';
    pluralName: 'shows-nav-items';
    singularName: 'shows-nav-item';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Text & Schema.Attribute.Required;
    key: Schema.Attribute.Integer & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::shows-nav-item.shows-nav-item'
    > &
      Schema.Attribute.Private;
    path: Schema.Attribute.Text & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about-banner.about-banner': ApiAboutBannerAboutBanner;
      'api::about-site.about-site': ApiAboutSiteAboutSite;
      'api::about-team.about-team': ApiAboutTeamAboutTeam;
      'api::about-tool.about-tool': ApiAboutToolAboutTool;
      'api::accessibility-banner.accessibility-banner': ApiAccessibilityBannerAccessibilityBanner;
      'api::accessibility-card-1.accessibility-card-1': ApiAccessibilityCard1AccessibilityCard1;
      'api::accessibility-card-2.accessibility-card-2': ApiAccessibilityCard2AccessibilityCard2;
      'api::accessibility-card-3.accessibility-card-3': ApiAccessibilityCard3AccessibilityCard3;
      'api::accessibility-card-4.accessibility-card-4': ApiAccessibilityCard4AccessibilityCard4;
      'api::accessibility-jump.accessibility-jump': ApiAccessibilityJumpAccessibilityJump;
      'api::accessibility-new-to-accessibility.accessibility-new-to-accessibility': ApiAccessibilityNewToAccessibilityAccessibilityNewToAccessibility;
      'api::ai-banner.ai-banner': ApiAiBannerAiBanner;
      'api::ai-card.ai-card': ApiAiCardAiCard;
      'api::ai-chrome-1.ai-chrome-1': ApiAiChrome1AiChrome1;
      'api::ai-chrome-video-title.ai-chrome-video-title': ApiAiChromeVideoTitleAiChromeVideoTitle;
      'api::ai-chrome-video.ai-chrome-video': ApiAiChromeVideoAiChromeVideo;
      'api::ai-chrome.ai-chrome': ApiAiChromeAiChrome;
      'api::ai-gemini.ai-gemini': ApiAiGeminiAiGemini;
      'api::ai-google-video-title.ai-google-video-title': ApiAiGoogleVideoTitleAiGoogleVideoTitle;
      'api::ai-google-video.ai-google-video': ApiAiGoogleVideoAiGoogleVideo;
      'api::ai-row.ai-row': ApiAiRowAiRow;
      'api::baseline-banner.baseline-banner': ApiBaselineBannerBaselineBanner;
      'api::baseline-work.baseline-work': ApiBaselineWorkBaselineWork;
      'api::basline-find.basline-find': ApiBaslineFindBaslineFind;
      'api::basline-jump-card.basline-jump-card': ApiBaslineJumpCardBaslineJumpCard;
      'api::basline-latest-new.basline-latest-new': ApiBaslineLatestNewBaslineLatestNew;
      'api::basline-link.basline-link': ApiBaslineLinkBaslineLink;
      'api::basline-overview.basline-overview': ApiBaslineOverviewBaslineOverview;
      'api::blog-banner.blog-banner': ApiBlogBannerBlogBanner;
      'api::case-banner.case-banner': ApiCaseBannerCaseBanner;
      'api::css-accessibiltie.css-accessibiltie': ApiCssAccessibiltieCssAccessibiltie;
      'api::css-banner.css-banner': ApiCssBannerCssBanner;
      'api::css-jupm.css-jupm': ApiCssJupmCssJupm;
      'api::css-new-to-css.css-new-to-css': ApiCssNewToCssCssNewToCss;
      'api::css-performance.css-performance': ApiCssPerformanceCssPerformance;
      'api::css-podcast.css-podcast': ApiCssPodcastCssPodcast;
      'api::css-ui-design.css-ui-design': ApiCssUiDesignCssUiDesign;
      'api::cssnewfeature.cssnewfeature': ApiCssnewfeatureCssnewfeature;
      'api::dive-into-css-pattern.dive-into-css-pattern': ApiDiveIntoCssPatternDiveIntoCssPattern;
      'api::explore-banner.explore-banner': ApiExploreBannerExploreBanner;
      'api::explore-build-excellent.explore-build-excellent': ApiExploreBuildExcellentExploreBuildExcellent;
      'api::explore-excellent-website.explore-excellent-website': ApiExploreExcellentWebsiteExploreExcellentWebsite;
      'api::explore-exploration.explore-exploration': ApiExploreExplorationExploreExploration;
      'api::explore.explore': ApiExploreExplore;
      'api::home-banner.home-banner': ApiHomeBannerHomeBanner;
      'api::home-box1.home-box1': ApiHomeBox1HomeBox1;
      'api::home-box2.home-box2': ApiHomeBox2HomeBox2;
      'api::home-box3.home-box3': ApiHomeBox3HomeBox3;
      'api::home-box4.home-box4': ApiHomeBox4HomeBox4;
      'api::home-box5.home-box5': ApiHomeBox5HomeBox5;
      'api::home-card.home-card': ApiHomeCardHomeCard;
      'api::home-link1.home-link1': ApiHomeLink1HomeLink1;
      'api::home-link10.home-link10': ApiHomeLink10HomeLink10;
      'api::home-link2.home-link2': ApiHomeLink2HomeLink2;
      'api::home-link3.home-link3': ApiHomeLink3HomeLink3;
      'api::home-link4.home-link4': ApiHomeLink4HomeLink4;
      'api::home-link5.home-link5': ApiHomeLink5HomeLink5;
      'api::home-link6.home-link6': ApiHomeLink6HomeLink6;
      'api::home-link7.home-link7': ApiHomeLink7HomeLink7;
      'api::home-link8.home-link8': ApiHomeLink8HomeLink8;
      'api::home-link9.home-link9': ApiHomeLink9HomeLink9;
      'api::home-new.home-new': ApiHomeNewHomeNew;
      'api::html-accessibilitie.html-accessibilitie': ApiHtmlAccessibilitieHtmlAccessibilitie;
      'api::html-banner.html-banner': ApiHtmlBannerHtmlBanner;
      'api::html-course.html-course': ApiHtmlCourseHtmlCourse;
      'api::html-devtool.html-devtool': ApiHtmlDevtoolHtmlDevtool;
      'api::html-jump.html-jump': ApiHtmlJumpHtmlJump;
      'api::html-new-to-html.html-new-to-html': ApiHtmlNewToHtmlHtmlNewToHtml;
      'api::html-performance.html-performance': ApiHtmlPerformanceHtmlPerformance;
      'api::htmlnewfeature.htmlnewfeature': ApiHtmlnewfeatureHtmlnewfeature;
      'api::identity-banner.identity-banner': ApiIdentityBannerIdentityBanner;
      'api::identity-card-1.identity-card-1': ApiIdentityCard1IdentityCard1;
      'api::identity-link-1.identity-link-1': ApiIdentityLink1IdentityLink1;
      'api::identity-link-2.identity-link-2': ApiIdentityLink2IdentityLink2;
      'api::identity-link.identity-link': ApiIdentityLinkIdentityLink;
      'api::identity-overview-1.identity-overview-1': ApiIdentityOverview1IdentityOverview1;
      'api::identity-overview-2.identity-overview-2': ApiIdentityOverview2IdentityOverview2;
      'api::identity-overview.identity-overview': ApiIdentityOverviewIdentityOverview;
      'api::identity-pmc-1.identity-pmc-1': ApiIdentityPmc1IdentityPmc1;
      'api::identity-pmc-title.identity-pmc-title': ApiIdentityPmcTitleIdentityPmcTitle;
      'api::identity-pmc.identity-pmc': ApiIdentityPmcIdentityPmc;
      'api::inp-banner.inp-banner': ApiInpBannerInpBanner;
      'api::inp-link.inp-link': ApiInpLinkInpLink;
      'api::inp-overview.inp-overview': ApiInpOverviewInpOverview;
      'api::javascript-third-partie.javascript-third-partie': ApiJavascriptThirdPartieJavascriptThirdPartie;
      'api::js-banner.js-banner': ApiJsBannerJsBanner;
      'api::js-dive-into-js-pattern.js-dive-into-js-pattern': ApiJsDiveIntoJsPatternJsDiveIntoJsPattern;
      'api::js-jump.js-jump': ApiJsJumpJsJump;
      'api::js-new-to-js.js-new-to-js': ApiJsNewToJsJsNewToJs;
      'api::jscommonuse.jscommonuse': ApiJscommonuseJscommonuse;
      'api::jsnewfeature.jsnewfeature': ApiJsnewfeatureJsnewfeature;
      'api::jsoptimizepoor.jsoptimizepoor': ApiJsoptimizepoorJsoptimizepoor;
      'api::learn-accessibility-item.learn-accessibility-item': ApiLearnAccessibilityItemLearnAccessibilityItem;
      'api::learn-banner.learn-banner': ApiLearnBannerLearnBanner;
      'api::learn-css-item.learn-css-item': ApiLearnCssItemLearnCssItem;
      'api::learn-design-item.learn-design-item': ApiLearnDesignItemLearnDesignItem;
      'api::learn-form-item.learn-form-item': ApiLearnFormItemLearnFormItem;
      'api::learn-html-item.learn-html-item': ApiLearnHtmlItemLearnHtmlItem;
      'api::learn-image-item.learn-image-item': ApiLearnImageItemLearnImageItem;
      'api::learn-javascript-item.learn-javascript-item': ApiLearnJavascriptItemLearnJavascriptItem;
      'api::learn-nav-item.learn-nav-item': ApiLearnNavItemLearnNavItem;
      'api::learn-performance-item.learn-performance-item': ApiLearnPerformanceItemLearnPerformanceItem;
      'api::learn-privacy-item.learn-privacy-item': ApiLearnPrivacyItemLearnPrivacyItem;
      'api::learn-pwa-item.learn-pwa-item': ApiLearnPwaItemLearnPwaItem;
      'api::learn-row-banner-1.learn-row-banner-1': ApiLearnRowBanner1LearnRowBanner1;
      'api::learn-row-banner-10.learn-row-banner-10': ApiLearnRowBanner10LearnRowBanner10;
      'api::learn-row-banner-11.learn-row-banner-11': ApiLearnRowBanner11LearnRowBanner11;
      'api::learn-row-banner-12.learn-row-banner-12': ApiLearnRowBanner12LearnRowBanner12;
      'api::learn-row-banner-2.learn-row-banner-2': ApiLearnRowBanner2LearnRowBanner2;
      'api::learn-row-banner-3.learn-row-banner-3': ApiLearnRowBanner3LearnRowBanner3;
      'api::learn-row-banner-4.learn-row-banner-4': ApiLearnRowBanner4LearnRowBanner4;
      'api::learn-row-banner-5.learn-row-banner-5': ApiLearnRowBanner5LearnRowBanner5;
      'api::learn-row-banner-8.learn-row-banner-8': ApiLearnRowBanner8LearnRowBanner8;
      'api::learn-row-banner-9.learn-row-banner-9': ApiLearnRowBanner9LearnRowBanner9;
      'api::learn-row-banner.learn-row-banner': ApiLearnRowBannerLearnRowBanner;
      'api::learn-testing-item.learn-testing-item': ApiLearnTestingItemLearnTestingItem;
      'api::learn.learn': ApiLearnLearn;
      'api::newsletter-banner.newsletter-banner': ApiNewsletterBannerNewsletterBanner;
      'api::newsletter-card.newsletter-card': ApiNewsletterCardNewsletterCard;
      'api::pattern.pattern': ApiPatternPattern;
      'api::performance-banner.performance-banner': ApiPerformanceBannerPerformanceBanner;
      'api::performance-case-studie-title.performance-case-studie-title': ApiPerformanceCaseStudieTitlePerformanceCaseStudieTitle;
      'api::performance-case-studie.performance-case-studie': ApiPerformanceCaseStudiePerformanceCaseStudie;
      'api::performance-core-web-title.performance-core-web-title': ApiPerformanceCoreWebTitlePerformanceCoreWebTitle;
      'api::performance-core-web.performance-core-web': ApiPerformanceCoreWebPerformanceCoreWeb;
      'api::performance-debug-title.performance-debug-title': ApiPerformanceDebugTitlePerformanceDebugTitle;
      'api::performance-debug.performance-debug': ApiPerformanceDebugPerformanceDebug;
      'api::performance-dive.performance-dive': ApiPerformanceDivePerformanceDive;
      'api::performance-jump.performance-jump': ApiPerformanceJumpPerformanceJump;
      'api::performance-new-to-performance.performance-new-to-performance': ApiPerformanceNewToPerformancePerformanceNewToPerformance;
      'api::performance-newly-basline-title.performance-newly-basline-title': ApiPerformanceNewlyBaslineTitlePerformanceNewlyBaslineTitle;
      'api::performance-newly-basline.performance-newly-basline': ApiPerformanceNewlyBaslinePerformanceNewlyBasline;
      'api::performance-optimize-title.performance-optimize-title': ApiPerformanceOptimizeTitlePerformanceOptimizeTitle;
      'api::performance-optimize.performance-optimize': ApiPerformanceOptimizePerformanceOptimize;
      'api::performance-page-speed.performance-page-speed': ApiPerformancePageSpeedPerformancePageSpeed;
      'api::progressive-banner.progressive-banner': ApiProgressiveBannerProgressiveBanner;
      'api::progressive-link.progressive-link': ApiProgressiveLinkProgressiveLink;
      'api::progressive-overview.progressive-overview': ApiProgressiveOverviewProgressiveOverview;
      'api::security-banner.security-banner': ApiSecurityBannerSecurityBanner;
      'api::security-link-2.security-link-2': ApiSecurityLink2SecurityLink2;
      'api::security-link-3.security-link-3': ApiSecurityLink3SecurityLink3;
      'api::security-link.security-link': ApiSecurityLinkSecurityLink;
      'api::security-overview-1.security-overview-1': ApiSecurityOverview1SecurityOverview1;
      'api::security-overview-2.security-overview-2': ApiSecurityOverview2SecurityOverview2;
      'api::security-overview.security-overview': ApiSecurityOverviewSecurityOverview;
      'api::shows-banner.shows-banner': ApiShowsBannerShowsBanner;
      'api::shows-card.shows-card': ApiShowsCardShowsCard;
      'api::shows-nav-item.shows-nav-item': ApiShowsNavItemShowsNavItem;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
