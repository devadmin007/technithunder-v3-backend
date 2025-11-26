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
// module.exports = ({ env }) => ({
//   email: {
//     config: {
//       provider: "strapi-provider-email-smtp",
//       providerOptions: {
//         host: env("SMTP_HOST", "smtp.gmail.com"),
//         port: env.int("SMTP_PORT", 587),
//         secure: false,
//         auth: {
//           user: env("SMTP_USERNAME"),
//           pass: env("SMTP_PASSWORD"),
//         },
//         tls: {
//           rejectUnauthorized: false,
//         },
//       },
//       settings: {
//         defaultFrom: env("SMTP_USERNAME"),
//         defaultReplyTo: env("SMTP_USERNAME"),
//       },
//     },
//   },
// });
module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-smtp",
      providerOptions: {
        host: "smtp.mailgun.org",
        port: 587,
        secure: false,
        auth: {
          user: "vparmar@sandboxb52f62cc311d46a1939e0cb2740cb798.mailgun.org",
          pass: "Thunder@9090",
        },
      },
      settings: {
        defaultFrom: "postmaster@sandboxb52f62cc311d46a1939e0cb2740cb798.mailgun.org",
        defaultReplyTo:"postmaster@sandboxb52f62cc311d46a1939e0cb2740cb798.mailgun.org",
      },
    },
  },
});