module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ab17dff5efda3b60a9f30faa686f5e1c'),
  },
});
