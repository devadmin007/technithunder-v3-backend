import type { Attribute, Schema } from '@strapi/strapi';

export interface V1AboutTitleInfoLogoComponent extends Schema.Component {
  collectionName: 'components_v1_about_title_info_logo_components';
  info: {
    displayName: 'aboutTitleInfoLogoComponent';
  };
  attributes: {
    info: Attribute.String;
    logoImage: Attribute.Component<'v1.logo', true>;
    title: Attribute.String;
  };
}

export interface V1CasestudyContent extends Schema.Component {
  collectionName: 'components_v1_casestudy_contents';
  info: {
    displayName: 'casestudyContent';
  };
  attributes: {
    aboutDescription: Attribute.Text;
    aboutTitleInfoLogo: Attribute.Component<
      'v1.about-title-info-logo-component',
      true
    >;
    challangesDescription: Attribute.Text;
    heroImg: Attribute.Media<'images' | 'files'>;
    heroTitle: Attribute.Text;
    keyFeaturesImg: Attribute.Media<'images' | 'files'>;
    keyFeaturesList: Attribute.Component<
      'v1.key-features-list-component',
      true
    >;
    letsBuildDescription: Attribute.Text;
    letsBuildImg: Attribute.Media<'images' | 'files'>;
    letsBuildTitle: Attribute.String;
    ourApproachDescription: Attribute.Text;
    ourApproachTag: Attribute.Component<'v1.our-approach-tag-component', true>;
    percentageInfo: Attribute.Component<'v1.percentage-info-component', true>;
    projectImg1: Attribute.Media<'images' | 'files'>;
    projectImg2: Attribute.Media<'images' | 'files'>;
    projectResultDescription: Attribute.Text;
    solutionDescription: Attribute.Component<
      'v1.solution-description-component',
      true
    >;
  };
}

export interface V1Description extends Schema.Component {
  collectionName: 'components_v1_descriptions';
  info: {
    description: '';
    displayName: 'Description';
  };
  attributes: {
    Descriptions: Attribute.Text;
    title: Attribute.String;
  };
}

export interface V1Faqs extends Schema.Component {
  collectionName: 'components_v1_faqs';
  info: {
    displayName: 'faqs';
  };
  attributes: {
    answer: Attribute.Text;
    question: Attribute.String;
  };
}

export interface V1HeadingAndBulletedRichText extends Schema.Component {
  collectionName: 'components_v1_heading_and_bulleted_rich_texts';
  info: {
    displayName: 'heading&bulletedRichText';
  };
  attributes: {
    bulletedListRichText: Attribute.RichText;
    heading: Attribute.String;
  };
}

export interface V1HeadingDescription extends Schema.Component {
  collectionName: 'components_v1_heading_descriptions';
  info: {
    displayName: 'headingDescription';
  };
  attributes: {
    bulletedListRichText: Attribute.RichText;
    subTitle: Attribute.String;
  };
}

export interface V1HeadingDescriptionForItServices extends Schema.Component {
  collectionName: 'components_v1_heading_description_for_it_services';
  info: {
    displayName: 'HeadingDescriptionForItServices';
  };
  attributes: {
    bulletedListRichText: Attribute.RichText;
    SubDescription: Attribute.Text;
    SubTitle: Attribute.String;
  };
}

export interface V1HeadingDescriptionForWeServe extends Schema.Component {
  collectionName: 'components_v1_heading_description_for_we_serves';
  info: {
    description: '';
    displayName: 'headingDescriptionForWeServe';
  };
  attributes: {
    SubDescription: Attribute.Text;
    SubTitle: Attribute.String;
    WeServeImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface V1HedingDescriptionImage extends Schema.Component {
  collectionName: 'components_v1_heding_description_images';
  info: {
    displayName: 'hedingDescriptionImage';
  };
  attributes: {
    description: Attribute.Text;
    heading: Attribute.String;
    image: Attribute.Media<'images' | 'files'>;
  };
}

export interface V1Image extends Schema.Component {
  collectionName: 'components_v1_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files'>;
  };
}

export interface V1IndustryRelatedQuestions extends Schema.Component {
  collectionName: 'components_v1_industry_related_questions';
  info: {
    description: '';
    displayName: 'IndustryRelatedQuestions';
  };
  attributes: {
    ButtonText: Attribute.String;
    MainDescription: Attribute.Text;
    MainImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    MainTitle: Attribute.String;
  };
}

export interface V1ItServices extends Schema.Component {
  collectionName: 'components_v1_it_services';
  info: {
    displayName: 'ItServices';
  };
  attributes: {
    HeadingDescriptionForItServices: Attribute.Component<
      'v1.heading-description-for-it-services',
      true
    >;
    MainDescription: Attribute.Text;
    MainTitle: Attribute.String;
  };
}

export interface V1KeyBenefits extends Schema.Component {
  collectionName: 'components_v1_key_benefits';
  info: {
    displayName: 'keyBenefits';
  };
  attributes: {
    headingDescription: Attribute.Component<
      'v1.title-description-component',
      true
    >;
    mainDescription: Attribute.Text;
    mainTitle: Attribute.String;
  };
}

export interface V1KeyFeaturesListComponent extends Schema.Component {
  collectionName: 'components_v1_key_features_list_components';
  info: {
    displayName: 'keyFeaturesListComponent';
  };
  attributes: {
    list: Attribute.String;
  };
}

export interface V1Logo extends Schema.Component {
  collectionName: 'components_v1_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    logoImg: Attribute.Media<'images' | 'files'>;
  };
}

export interface V1OurApproachTagComponent extends Schema.Component {
  collectionName: 'components_v1_our_approach_tag_components';
  info: {
    displayName: 'ourApproachTagComponent';
  };
  attributes: {
    tag: Attribute.String;
  };
}

export interface V1PercentageInfoComponent extends Schema.Component {
  collectionName: 'components_v1_percentage_info_components';
  info: {
    displayName: 'percentageInfoComponent';
  };
  attributes: {
    info: Attribute.String;
    percentage: Attribute.Integer;
  };
}

export interface V1QueAnsComponent extends Schema.Component {
  collectionName: 'components_v1_que_ans_components';
  info: {
    displayName: 'queAnsComponent';
  };
  attributes: {
    answer: Attribute.Text;
    question: Attribute.String;
  };
}

export interface V1RichText extends Schema.Component {
  collectionName: 'components_v1_rich_texts';
  info: {
    displayName: 'richText';
  };
  attributes: {
    richText: Attribute.Blocks;
  };
}

export interface V1SegmentsWeServe extends Schema.Component {
  collectionName: 'components_v1_segments_we_serves';
  info: {
    displayName: 'SegmentsWeServe';
  };
  attributes: {
    headingDescriptionForWeServe: Attribute.Component<
      'v1.heading-description-for-we-serve',
      true
    >;
    MainDescription: Attribute.Text;
    MainTitle: Attribute.String;
  };
}

export interface V1SegmentsWeServeComponent extends Schema.Component {
  collectionName: 'components_v1_segments_we_serve_components';
  info: {
    displayName: 'segmentsWeServeComponent';
  };
  attributes: {
    headingDescriptionImage: Attribute.Component<
      'v1.heding-description-image',
      true
    >;
    mainDescription: Attribute.Text;
    mainTitle: Attribute.String;
  };
}

export interface V1ServicePartnerComponent extends Schema.Component {
  collectionName: 'components_v1_service_partner_components';
  info: {
    displayName: 'servicePartnerComponent';
  };
  attributes: {
    headingDescription: Attribute.Component<
      'v1.title-description-component',
      true
    >;
    mainDescription: Attribute.Text;
    mainTitle: Attribute.String;
  };
}

export interface V1ServicesInfoComponent extends Schema.Component {
  collectionName: 'components_v1_services_info_components';
  info: {
    displayName: 'servicesInfoComponent';
  };
  attributes: {
    headingBulletedList: Attribute.Component<
      'v1.heading-and-bulleted-rich-text',
      true
    >;
    mainDescription: Attribute.Text;
    mainTitle: Attribute.String;
  };
}

export interface V1Skills extends Schema.Component {
  collectionName: 'components_v1_skills';
  info: {
    displayName: 'skills';
  };
  attributes: {
    skillsItem: Attribute.String;
  };
}

export interface V1SolutionDescriptionComponent extends Schema.Component {
  collectionName: 'components_v1_solution_description_components';
  info: {
    displayName: 'solutionDescriptionComponent';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface V1Tags extends Schema.Component {
  collectionName: 'components_v1_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    tag: Attribute.String;
  };
}

export interface V1TextComponent extends Schema.Component {
  collectionName: 'components_v1_text_components';
  info: {
    displayName: 'textComponent';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface V1TitleDescriptionComponent extends Schema.Component {
  collectionName: 'components_v1_title_description_components';
  info: {
    displayName: 'titleDescriptionComponent';
  };
  attributes: {
    description: Attribute.RichText;
    title: Attribute.String;
  };
}

export interface V1WeDevelop extends Schema.Component {
  collectionName: 'components_v1_we_develops';
  info: {
    displayName: 'WeDevelop';
  };
  attributes: {
    headingDescription: Attribute.Component<'v1.heading-description', true>;
    MainDescription: Attribute.Text;
    MainTitle: Attribute.String;
  };
}

export interface V1WeServe extends Schema.Component {
  collectionName: 'components_v1_we_serves';
  info: {
    displayName: 'WeServe';
  };
  attributes: {
    MainDescription: Attribute.Text;
    MainTitle: Attribute.String;
  };
}

export interface V1WhatYouNeed extends Schema.Component {
  collectionName: 'components_v1_what_you_needs';
  info: {
    description: '';
    displayName: 'WhatYouNeed';
  };
  attributes: {
    ButtonText: Attribute.String;
    Description: Attribute.Component<'v1.description', true>;
    MainImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    MainTitle: Attribute.String;
    SubImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface V1WhyChooseUsComponent extends Schema.Component {
  collectionName: 'components_v1_why_choose_us_components';
  info: {
    displayName: 'whyChooseUsComponent';
  };
  attributes: {
    headingDescription: Attribute.Component<
      'v1.title-description-component',
      true
    >;
    mainDescription: Attribute.Text;
    mainTitle: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'v1.about-title-info-logo-component': V1AboutTitleInfoLogoComponent;
      'v1.casestudy-content': V1CasestudyContent;
      'v1.description': V1Description;
      'v1.faqs': V1Faqs;
      'v1.heading-and-bulleted-rich-text': V1HeadingAndBulletedRichText;
      'v1.heading-description': V1HeadingDescription;
      'v1.heading-description-for-it-services': V1HeadingDescriptionForItServices;
      'v1.heading-description-for-we-serve': V1HeadingDescriptionForWeServe;
      'v1.heding-description-image': V1HedingDescriptionImage;
      'v1.image': V1Image;
      'v1.industry-related-questions': V1IndustryRelatedQuestions;
      'v1.it-services': V1ItServices;
      'v1.key-benefits': V1KeyBenefits;
      'v1.key-features-list-component': V1KeyFeaturesListComponent;
      'v1.logo': V1Logo;
      'v1.our-approach-tag-component': V1OurApproachTagComponent;
      'v1.percentage-info-component': V1PercentageInfoComponent;
      'v1.que-ans-component': V1QueAnsComponent;
      'v1.rich-text': V1RichText;
      'v1.segments-we-serve': V1SegmentsWeServe;
      'v1.segments-we-serve-component': V1SegmentsWeServeComponent;
      'v1.service-partner-component': V1ServicePartnerComponent;
      'v1.services-info-component': V1ServicesInfoComponent;
      'v1.skills': V1Skills;
      'v1.solution-description-component': V1SolutionDescriptionComponent;
      'v1.tags': V1Tags;
      'v1.text-component': V1TextComponent;
      'v1.title-description-component': V1TitleDescriptionComponent;
      'v1.we-develop': V1WeDevelop;
      'v1.we-serve': V1WeServe;
      'v1.what-you-need': V1WhatYouNeed;
      'v1.why-choose-us-component': V1WhyChooseUsComponent;
    }
  }
}
