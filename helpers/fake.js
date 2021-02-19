const fakeFunc = () => {
  const x = process.env.TEST_ENV_VAR;
  const y = process.env.SET_IN_PROD;
  return [x, y];
};

module.exports = fakeFunc;
