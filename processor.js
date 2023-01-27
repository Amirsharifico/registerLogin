
const Faker = require("@faker-js/faker");
 
function generateSignupData(requestParams, ctx, ee, next) {
  ctx.vars["email"] = Faker.internet.exampleEmail();
  ctx.vars["password"] = Faker.internet.password(10);
 
  return next();
}
 
module.exports = {
  generateSignupData,
};