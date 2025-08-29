'use strict';

/**
 * contact-form controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-form.contact-form', ({ strapi }) => ({
  async create(ctx) {
    // 1. Save to DB (default behavior)
    const response = await super.create(ctx);
    const data = response.data?.attributes || ctx.request.body.data;

    try {
      // 2. Send email to Admin (from .env)
      await strapi.plugin('email').service('email').send({
        to: process.env.ADMIN_EMAIL, // now fetched from .env
        from: process.env.SMTP_USERNAME,
        subject: '📩 New Contact Form Submission',
        text: `New form submitted:\n
        Name: ${data.name}
        Email: ${data.businessEmail}
        CountryCode: ${data.countryCode}
        Phone: ${data.phoneNumber}
        Project: ${data.projectDescription}`,
      });

      // 3. Send confirmation email to User
      await strapi.plugin('email').service('email').send({
        to: data.businessEmail,
        from: process.env.SMTP_USERNAME,
        subject: '✅ Thanks for contacting us!',
        text: `Hello ${data.name},\n\nThank you for reaching out! We’ve received your request and will contact you soon.\n\n— Team`,
      });
    } catch (err) {
      strapi.log.error('❌ Email sending failed:', err);
    }

    // 4. Return response back to React
    return response;
  },
}));
