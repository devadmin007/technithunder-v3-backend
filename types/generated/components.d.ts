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

export interface V1AwardsAndRecognized extends Struct.ComponentSchema {
  collectionName: 'components_v1_awards_and_recognizeds';
  info: {
    displayName: 'AwardsAndRecognized';
  };
  attributes: {
    AwardImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface V1Blogs extends Struct.ComponentSchema {
  collectionName: 'components_v1_blogs';
  info: {
    displayName: 'Blogs';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    SingleBlog: Schema.Attribute.Component<'v1.single-blog', true>;
  };
}

export interface V1Cards extends Struct.ComponentSchema {
  collectionName: 'components_v1_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface V1CaseStudys extends Struct.ComponentSchema {
  collectionName: 'components_v1_case_studys';
  info: {
    displayName: 'CaseStudys';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    MainDescription: Schema.Attribute.Text;
    MainTitle: Schema.Attribute.String;
    SingleCaseStudy: Schema.Attribute.Component<'v1.single-case-study', true>;
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

export interface V1ClientReviews extends Struct.ComponentSchema {
  collectionName: 'components_v1_client_reviews';
  info: {
    displayName: 'ClientReviews';
  };
  attributes: {
    ClientName: Schema.Attribute.String;
    ClientPost: Schema.Attribute.String;
    ClientWords: Schema.Attribute.Text;
  };
}

export interface V1Description extends Struct.ComponentSchema {
  collectionName: 'components_v1_descriptions';
  info: {
    description: '';
    displayName: 'Description';
  };
  attributes: {
    Descriptions: Schema.Attribute.Text;
  };
}

export interface V1Faqs extends Struct.ComponentSchema {
  collectionName: 'components_v1_faqs';
  info: {
    displayName: 'faqs';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
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

export interface V1HeadingDescription extends Struct.ComponentSchema {
  collectionName: 'components_v1_heading_descriptions';
  info: {
    displayName: 'headingDescription';
  };
  attributes: {
    bulletedListRichText: Schema.Attribute.RichText;
    subTitle: Schema.Attribute.String;
  };
}

export interface V1HeadingDescriptionForItServices
  extends Struct.ComponentSchema {
  collectionName: 'components_v1_heading_description_for_it_services';
  info: {
    displayName: 'HeadingDescriptionForItServices';
  };
  attributes: {
    bulletedListRichText: Schema.Attribute.RichText;
    SubDescription: Schema.Attribute.Text;
    SubTitle: Schema.Attribute.String;
  };
}

export interface V1HeadingDescriptionForWeServe extends Struct.ComponentSchema {
  collectionName: 'components_v1_heading_description_for_we_serves';
  info: {
    description: '';
    displayName: 'headingDescriptionForWeServe';
  };
  attributes: {
    SubDescription: Schema.Attribute.Text;
    SubTitle: Schema.Attribute.String;
    WeServeImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
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

export interface V1HeroComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_hero_components';
  info: {
    displayName: 'HeroComponent';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    Logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    MainImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    MainTitle: Schema.Attribute.String;
    RatingNumber: Schema.Attribute.Decimal;
    RatingText: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
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

export interface V1IndustryComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_industry_components';
  info: {
    displayName: 'IndustryComponent';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    Cards: Schema.Attribute.Component<'v1.cards', true>;
    Description: Schema.Attribute.Text;
    MainTitle: Schema.Attribute.String;
  };
}

export interface V1IndustryRelatedQuestions extends Struct.ComponentSchema {
  collectionName: 'components_v1_industry_related_questions';
  info: {
    description: '';
    displayName: 'IndustryRelatedQuestions';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    MainDescription: Schema.Attribute.Text;
    MainImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    MainTitle: Schema.Attribute.String;
  };
}

export interface V1ItServices extends Struct.ComponentSchema {
  collectionName: 'components_v1_it_services';
  info: {
    displayName: 'ItServices';
  };
  attributes: {
    HeadingDescriptionForItServices: Schema.Attribute.Component<
      'v1.heading-description-for-it-services',
      true
    >;
    MainDescription: Schema.Attribute.Text;
    MainTitle: Schema.Attribute.String;
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
    TechnologyName: Schema.Attribute.String;
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

export interface V1ProcessFlow extends Struct.ComponentSchema {
  collectionName: 'components_v1_process_flows';
  info: {
    displayName: 'ProcessFlow';
  };
  attributes: {
    ProcessFlowSteps: Schema.Attribute.Component<'v1.process-flow-steps', true>;
  };
}

export interface V1ProcessFlowSteps extends Struct.ComponentSchema {
  collectionName: 'components_v1_process_flow_steps';
  info: {
    displayName: 'ProcessFlowSteps';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Key: Schema.Attribute.String;
    Points: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
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

export interface V1ReadyToEmbrance extends Struct.ComponentSchema {
  collectionName: 'components_v1_ready_to_embrances';
  info: {
    displayName: 'ReadyToEmbrance';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    Description: Schema.Attribute.String;
    GlobalClients: Schema.Attribute.Integer;
    MainTitle: Schema.Attribute.String;
    TechExpert: Schema.Attribute.Integer;
    YearsInService: Schema.Attribute.Integer;
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

export interface V1SegmentsWeServe extends Struct.ComponentSchema {
  collectionName: 'components_v1_segments_we_serves';
  info: {
    displayName: 'SegmentsWeServe';
  };
  attributes: {
    headingDescriptionForWeServe: Schema.Attribute.Component<
      'v1.heading-description-for-we-serve',
      true
    >;
    MainDescription: Schema.Attribute.Text;
    MainTitle: Schema.Attribute.String;
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

export interface V1ServiceComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_service_components';
  info: {
    displayName: 'ServiceComponent';
  };
  attributes: {
    Cards: Schema.Attribute.Component<'v1.cards', true>;
    MainTitle: Schema.Attribute.String;
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

export interface V1SingleBlog extends Struct.ComponentSchema {
  collectionName: 'components_v1_single_blogs';
  info: {
    displayName: 'SingleBlog';
  };
  attributes: {
    BlogDescription: Schema.Attribute.Text;
    BlogImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    BlogTitle: Schema.Attribute.String;
    PublishDate: Schema.Attribute.Date;
    TechnologyName: Schema.Attribute.String;
  };
}

export interface V1SingleCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_v1_single_case_studies';
  info: {
    displayName: 'SingleCaseStudy';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    points: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
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

export interface V1TechnologyImage extends Struct.ComponentSchema {
  collectionName: 'components_v1_technology_images';
  info: {
    displayName: 'technologyImage';
  };
  attributes: {
    Logos: Schema.Attribute.Component<'v1.logo', true>;
    Name: Schema.Attribute.String;
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

export interface V1ToolsAndTechnology extends Struct.ComponentSchema {
  collectionName: 'components_v1_tools_and_technologies';
  info: {
    displayName: 'ToolsAndTechnology';
  };
  attributes: {
    technologyImage: Schema.Attribute.Component<'v1.technology-image', true>;
    Technologys: Schema.Attribute.Blocks;
  };
}

export interface V1WeDevelop extends Struct.ComponentSchema {
  collectionName: 'components_v1_we_develops';
  info: {
    displayName: 'WeDevelop';
  };
  attributes: {
    headingDescription: Schema.Attribute.Component<
      'v1.heading-description',
      true
    >;
    MainDescription: Schema.Attribute.Text;
    MainTitle: Schema.Attribute.String;
  };
}

export interface V1WeServe extends Struct.ComponentSchema {
  collectionName: 'components_v1_we_serves';
  info: {
    displayName: 'WeServe';
  };
  attributes: {
    MainDescription: Schema.Attribute.Text;
    MainTitle: Schema.Attribute.String;
  };
}

export interface V1WhatClientSays extends Struct.ComponentSchema {
  collectionName: 'components_v1_what_client_says';
  info: {
    displayName: 'WhatClientSays';
  };
  attributes: {
    ClientReviews: Schema.Attribute.Component<'v1.client-reviews', true>;
  };
}

export interface V1WhatYouNeed extends Struct.ComponentSchema {
  collectionName: 'components_v1_what_you_needs';
  info: {
    description: '';
    displayName: 'WhatYouNeed';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    Description: Schema.Attribute.Component<'v1.description', true>;
    MainImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    MainTitle: Schema.Attribute.String;
    SubImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface V1WhoWeAreComponent extends Struct.ComponentSchema {
  collectionName: 'components_v1_who_we_are_components';
  info: {
    displayName: 'WhoWeAreComponent';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    Description: Schema.Attribute.Component<'v1.description', true>;
    GlobalClients: Schema.Attribute.Integer;
    Logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    MainTitle: Schema.Attribute.String;
    TechExperts: Schema.Attribute.Integer;
    YearsInBusiness: Schema.Attribute.Integer;
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
      'v1.awards-and-recognized': V1AwardsAndRecognized;
      'v1.blogs': V1Blogs;
      'v1.cards': V1Cards;
      'v1.case-studys': V1CaseStudys;
      'v1.casestudy-content': V1CasestudyContent;
      'v1.client-reviews': V1ClientReviews;
      'v1.description': V1Description;
      'v1.faqs': V1Faqs;
      'v1.heading-and-bulleted-rich-text': V1HeadingAndBulletedRichText;
      'v1.heading-description': V1HeadingDescription;
      'v1.heading-description-for-it-services': V1HeadingDescriptionForItServices;
      'v1.heading-description-for-we-serve': V1HeadingDescriptionForWeServe;
      'v1.heding-description-image': V1HedingDescriptionImage;
      'v1.hero-component': V1HeroComponent;
      'v1.image': V1Image;
      'v1.industry-component': V1IndustryComponent;
      'v1.industry-related-questions': V1IndustryRelatedQuestions;
      'v1.it-services': V1ItServices;
      'v1.key-benefits': V1KeyBenefits;
      'v1.key-features-list-component': V1KeyFeaturesListComponent;
      'v1.logo': V1Logo;
      'v1.our-approach-tag-component': V1OurApproachTagComponent;
      'v1.percentage-info-component': V1PercentageInfoComponent;
      'v1.process-flow': V1ProcessFlow;
      'v1.process-flow-steps': V1ProcessFlowSteps;
      'v1.que-ans-component': V1QueAnsComponent;
      'v1.ready-to-embrance': V1ReadyToEmbrance;
      'v1.rich-text': V1RichText;
      'v1.segments-we-serve': V1SegmentsWeServe;
      'v1.segments-we-serve-component': V1SegmentsWeServeComponent;
      'v1.service-component': V1ServiceComponent;
      'v1.service-partner-component': V1ServicePartnerComponent;
      'v1.services-info-component': V1ServicesInfoComponent;
      'v1.single-blog': V1SingleBlog;
      'v1.single-case-study': V1SingleCaseStudy;
      'v1.skills': V1Skills;
      'v1.solution-description-component': V1SolutionDescriptionComponent;
      'v1.tags': V1Tags;
      'v1.technology-image': V1TechnologyImage;
      'v1.text-component': V1TextComponent;
      'v1.title-description-component': V1TitleDescriptionComponent;
      'v1.tools-and-technology': V1ToolsAndTechnology;
      'v1.we-develop': V1WeDevelop;
      'v1.we-serve': V1WeServe;
      'v1.what-client-says': V1WhatClientSays;
      'v1.what-you-need': V1WhatYouNeed;
      'v1.who-we-are-component': V1WhoWeAreComponent;
      'v1.why-choose-us-component': V1WhyChooseUsComponent;
    }
  }
}
