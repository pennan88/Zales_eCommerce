module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1b82efe45044c17adb7d6156493181d4'),
  },
});
