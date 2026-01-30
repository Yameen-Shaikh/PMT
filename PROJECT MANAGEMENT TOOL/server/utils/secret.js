module.exports = {
  key: "your-secret-key",
  tokenExpiry: () => Math.floor(Date.now() / 1000) + 60 * 60
};
