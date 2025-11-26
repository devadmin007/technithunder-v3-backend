'use strict';

/**
 * contact-form controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-form.contact-form', ({ strapi }) => ({
  async create(ctx) {
    try {
      // Get data from request body
      const { data } = ctx.request.body;

      // Get files from request
      const uploadedFiles = ctx.request.files;

      console.log("📝 Request Data:", data);
      console.log("📁 Files:", uploadedFiles);

      // Parse data if it's a string
      const parsedData = typeof data === 'string' ? JSON.parse(data) : data;

      // STEP 1: Create entry WITHOUT files first
      const entry = await strapi.entityService.create('api::contact-form.contact-form', {
        data: parsedData,
      });

      console.log("✅ Entry created with ID:", entry.id);

      // STEP 2: Upload files separately using Upload plugin
      if (uploadedFiles && uploadedFiles['files.file']) {
        const fileField = uploadedFiles['files.file'];
        const fileArray = Array.isArray(fileField) ? fileField : [fileField];

        console.log("📤 Uploading files...");

        // Upload each file
        const uploadedFileIds = [];
        for (const file of fileArray) {
          const uploadedFile = await strapi.plugins.upload.services.upload.upload({
            data: {
              refId: entry.id,
              ref: 'api::contact-form.contact-form',
              field: 'file',
            },
            files: file,
          });

          console.log("✅ File uploaded:", uploadedFile[0].name);
          uploadedFileIds.push(uploadedFile[0].id);
        }
      }

      // STEP 3: Get the complete entry with populated files
      const completeEntry = await strapi.db.query('api::contact-form.contact-form').findOne({
        where: { id: entry.id },
        populate: { file: true }
      });

      console.log("✅ Complete Entry:", JSON.stringify(completeEntry, null, 2));

      // Prepare file URLs for email
      let fileLinks = 'No files attached';
      if (completeEntry.file && Array.isArray(completeEntry.file) && completeEntry.file.length > 0) {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL ??;
        fileLinks = completeEntry.file.map(file =>
          `<a href="${baseUrl}${file.url}">${file.name}</a>`
        ).join(', ');
      }
      console.log("process.env.NEXT_PUBLIC_API_URL-=====>", process.env.NEXT_PUBLIC_API_URL);


      try {
        // 1. Send email to Admin
        const adminHtml = `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5; padding:40px 0;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; padding:30px; font-family:Arial, sans-serif;">

        <tr>
          <td style="text-align:center; padding-bottom:20px;">
            <h2 style="color:#333; margin:0;">📩 New Contact Form Submission</h2>
          </td>
        </tr>

        <tr>
          <td style="color:#444; font-size:15px; line-height:26px;">

            <p><strong>Name:</strong> ${completeEntry.name}</p>
            <p><strong>Email:</strong> ${completeEntry.businessEmail}</p>
            <p><strong>Country Code:</strong> ${completeEntry.countryCode}</p>
            <p><strong>Phone Number:</strong> ${completeEntry.phoneNumber}</p>

            <p style="margin-top:15px;"><strong>Project Description:</strong> ${completeEntry.projectDescription || 'N/A'}</p>

            <p style="margin-top:15px;"><strong>Project Budget:</strong> ${completeEntry.budget || 'N/A'}</p>

            <p><b>Attached Files:</b> ${fileLinks}</p>
      
          </td>
        </tr>

        <hr style="margin:25px 0; border:none; border-top:1px solid #ddd;" />

        <p style="font-size:13px; color:#777;">This form was submitted from the Technithunder website.</p>

      </table>
    </td>
  </tr>
</table>
`;
        try {
          strapi.log.info("from: process.env.SMTP_USERNAME====>", process.env.SMTP_USERNAME);
          strapi.log.info("to: process.env.ADMIN_EMAIL====>", process.env.ADMIN_EMAIL);
          await strapi.plugin('email').service('email').send({
            to: process.env.ADMIN_EMAIL,
            from: process.env.SMTP_USERNAME,
            subject: '📩 New Contact Form Submission',
            html: adminHtml,
          });
          strapi.log.info("EMAIL SENT OK");
        } catch (err) {
          strapi.log.error("EMAIL ERROR:", err);
        }

        // 2. Send confirmation email to User
        const htmlTemplate = `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5; padding:40px 0;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; padding:30px; font-family:Arial, sans-serif;">
        
        <tr>
          <td style="text-align:center; padding-bottom:20px;">
            <h2 style="color:#333; margin:0;">Thank you for contacting us! ✅</h2>
          </td>
        </tr>

        <tr>
          <td style="color:#444; font-size:16px; line-height:26px;">
            <p>Hello <strong>${completeEntry.name}</strong>,</p>

            <p>
              Thank you for reaching out to us!<br />
              We have successfully received your request and our support team will connect with you shortly.
            </p>

            <p style="margin-top:25px;">
              Best regards,<br />
              <strong>Team Technithunder</strong>
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`;

        try {
          strapi.log.info("from: process.env.SMTP_USERNAME", process.env.SMTP_USERNAME);
          strapi.log.info("to: completeEntry.businessEmail", completeEntry.businessEmail);
          await strapi.plugin('email').service('email').send({
            to: completeEntry.businessEmail,
            from: process.env.SMTP_USERNAME,
            subject: '✅ Thanks for contacting us!',
            html: htmlTemplate,
          });
          strapi.log.info("EMAIL SENT OK");
        } catch (err) {
          strapi.log.error("EMAIL ERROR:", err);
        }


      } catch (emailErr) {
        strapi.log.error('❌ Email sending failed:', emailErr);
        // Continue even if email fails
      }

      // Return success response
      return {
        data: completeEntry,
        message: 'Form submitted successfully'
      };

    } catch (error) {
      strapi.log.error('❌ Controller error:', error);
      console.error('Full error:', error);
      ctx.throw(400, error.message);
    }
  },
}));