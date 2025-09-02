import type { Schema, Struct } from '@strapi/strapi';

export interface V1AboutTitleInfoLogoComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_about_title_info_logo_components';
  info: {
    displayName: 'aboutTitleInfoLogoComponent';
  };
  attributes: {
    info: Schema.Attribute.String;
    logoImage: Schema.Attribute.Component<'v1.logo', true>;
    title: Schema.Attribute.String;
  };
}

export interface V1CasestudyContent extends Struct.ComponentSchema {
  collectionName: 'components_v1_casestudy_contents';
  info: {
    displayName: 'casestudyContent';
  };
  attributes: {
    aboutDescription: Schema.Attribute.Text;
    aboutTitleInfoLogo: Schema.Attribute.Component<
      'v1.about-title-info-logo-component',
      true
    >;
    challangesDescription: Schema.Attribute.Text;
    heroImg: Schema.Attribute.Media<'images' | 'files'>;
    heroTitle: Schema.Attribute.Text;
    keyFeaturesImg: Schema.Attribute.Media<'images' | 'files'>;
    keyFeaturesList: Schema.Attribute.Component<
      'v1.key-features-list-component',
      true
    >;
    letsBuildDescription: Schema.Attribute.Text;
    letsBuildImg: Schema.Attribute.Media<'images' | 'files'>;
    letsBuildTitle: Schema.Attribute.String;
    ourApproachDescription: Schema.Attribute.Text;
    ourApproachTag: Schema.Attribute.Component<
      'v1.our-approach-tag-component',
      true
    >;
    percentageInfo: Schema.Attribute.Component<
      'v1.percentage-info-component',
      true
    >;
    projectImg1: Schema.Attribute.Media<'images' | 'files'>;
    projectImg2: Schema.Attribute.Media<'images' | 'files'>;
    projectResultDescription: Schema.Attribute.Text;
    solutionDescription: Schema.Attribute.Component<
      'v1.solution-description-component',
      true
    >;
  };
}

export interface V1HeadingAndBulletedRichText extends Struct.ComponentSchema {
  collectionName: 'components_v1_heading_and_bulleted_rich_texts';
  info: {
    displayName: 'heading&bulletedRichText';
  };
  attributes: {
    bulletedListRichText: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
  };
}

export interface V1HedingDescriptionImage extends Struct.ComponentSchema {
  collectionName: 'components_v1_heding_description_images';
  info: {
    displayName: 'hedingDescriptionImage';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface V1Image extends Struct.ComponentSchema {
  collectionName: 'components_v1_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface V1KeyBenefits extends Struct.ComponentSchema {
  collectionName: 'components_v1_key_benefits';
  info: {
    displayName: 'keyBenefits';
  };
  attributes: {
    headingDescription: Schema.Attribute.Component<
      'v1.title-description-component',
      true
    >;
    mainDescription: Schema.Attribute.Text;
    mainTitle: Schema.Attribute.String;
  };
}

export interface V1KeyFeaturesListComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_key_features_list_components';
  info: {
    displayName: 'keyFeaturesListComponent';
  };
  attributes: {
    list: Schema.Attribute.String;
  };
}

export interface V1Logo extends Struct.ComponentSchema {
  collectionName: 'components_v1_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    logoImg: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface V1OurApproachTagComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_our_approach_tag_components';
  info: {
    displayName: 'ourApproachTagComponent';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

export interface V1PercentageInfoComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_percentage_info_components';
  info: {
    displayName: 'percentageInfoComponent';
  };
  attributes: {
    info: Schema.Attribute.String;
    percentage: Schema.Attribute.Integer;
  };
}

export interface V1QueAnsComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_que_ans_components';
  info: {
    displayName: 'queAnsComponent';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface V1RichText extends Struct.ComponentSchema {
  collectionName: 'components_v1_rich_texts';
  info: {
    displayName: 'richText';
  };
  attributes: {
    richText: Schema.Attribute.Blocks;
  };
}

export interface V1SegmentsWeServeComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_segments_we_serve_components';
  info: {
    displayName: 'segmentsWeServeComponent';
  };
  attributes: {
    headingDescriptionImage: Schema.Attribute.Component<
      'v1.heding-description-image',
      true
    >;
    mainDescription: Schema.Attribute.Text;
    mainTitle: Schema.Attribute.String;
  };
}

export interface V1ServicePartnerComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_service_partner_components';
  info: {
    displayName: 'servicePartnerComponent';
  };
  attributes: {
    headingDescription: Schema.Attribute.Component<
      'v1.title-description-component',
      true
    >;
    mainDescription: Schema.Attribute.Text;
    mainTitle: Schema.Attribute.String;
  };
}

export interface V1ServicesInfoComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_services_info_components';
  info: {
    displayName: 'servicesInfoComponent';
  };
  attributes: {
    headingBulletedList: Schema.Attribute.Component<
      'v1.heading-and-bulleted-rich-text',
      true
    >;
    mainDescription: Schema.Attribute.Text;
    mainTitle: Schema.Attribute.String;
  };
}

export interface V1Skills extends Struct.ComponentSchema {
  collectionName: 'components_v1_skills';
  info: {
    displayName: 'skills';
  };
  attributes: {
    skillsItem: Schema.Attribute.String;
  };
}

export interface V1SolutionDescriptionComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_solution_description_components';
  info: {
    displayName: 'solutionDescriptionComponent';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

export interface V1Tags extends Struct.ComponentSchema {
  collectionName: 'components_v1_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

export interface V1TextComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_text_components';
  info: {
    displayName: 'textComponent';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface V1TitleDescriptionComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_title_description_components';
  info: {
    displayName: 'titleDescriptionComponent';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface V1WhyChooseUsComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_why_choose_us_components';
  info: {
    displayName: 'whyChooseUsComponent';
  };
  attributes: {
    headingDescription: Schema.Attribute.Component<
      'v1.title-description-component',
      true
    >;
    mainDescription: Schema.Attribute.Text;
    mainTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'v1.about-title-info-logo-component': V1AboutTitleInfoLogoComponent;
      'v1.casestudy-content': V1CasestudyContent;
      'v1.heading-and-bulleted-rich-text': V1HeadingAndBulletedRichText;
      'v1.heding-description-image': V1HedingDescriptionImage;
      'v1.image': V1Image;
      'v1.key-benefits': V1KeyBenefits;
      'v1.key-features-list-component': V1KeyFeaturesListComponent;
      'v1.logo': V1Logo;
      'v1.our-approach-tag-component': V1OurApproachTagComponent;
      'v1.percentage-info-component': V1PercentageInfoComponent;
      'v1.que-ans-component': V1QueAnsComponent;
      'v1.rich-text': V1RichText;
      'v1.segments-we-serve-component': V1SegmentsWeServeComponent;
      'v1.service-partner-component': V1ServicePartnerComponent;
      'v1.services-info-component': V1ServicesInfoComponent;
      'v1.skills': V1Skills;
      'v1.solution-description-component': V1SolutionDescriptionComponent;
      'v1.tags': V1Tags;
      'v1.text-component': V1TextComponent;
      'v1.title-description-component': V1TitleDescriptionComponent;
      'v1.why-choose-us-component': V1WhyChooseUsComponent;
    }
  }
}
