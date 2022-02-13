module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "ab7a46d079e851365951fe87a67dc42f"),
  },
});
