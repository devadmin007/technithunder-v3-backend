// module.exports = ({ env }) => ({
//   email: {
//     config: {
//       provider: 'nodemailer', // works because @strapi/provider-email-nodemailer is installed
//       providerOptions: {
//         host: env('SMTP_HOST', 'smtp.gmail.com'),
//         port: env.int('SMTP_PORT', 587),
//         auth: {
//           user: env('SMTP_USERNAME'),
//           pass: env('SMTP_PASSWORD'),
//         },
//       },
//       settings: {
//         defaultFrom: env('SMTP_USERNAME'),
//         defaultReplyTo: env('SMTP_USERNAME'),
//       },
//     },
//   },
// });
module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env.int("SMTP_PORT", 587),
        secure: false,
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      settings: {
        defaultFrom: env("SMTP_USERNAME"),
        defaultReplyTo: env("SMTP_USERNAME"),
      },
    },
  },
});
// module.exports = ({ env }) => ({
//   email: {
//     provider: "strapi-provider-email-smtp",
//     providerOptions: {
//       host: env("SMTP_HOST", "smtp.gmail.com"),
//       port: env.int("SMTP_PORT", 587),
//       secure: false,
//       auth: {
//         user: env("SMTP_USERNAME"),
//         pass: env("SMTP_PASSWORD"),
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     },
//     settings: {
//       defaultFrom: env("SMTP_USERNAME"),
//       defaultReplyTo: env("SMTP_USERNAME"),
//     },
//   },
// });