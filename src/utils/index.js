async function timeout(time) {
  await new Promise((resolve) => setTimeout(resolve, time));
  return;
};

module.exports = {
  timeout,
}