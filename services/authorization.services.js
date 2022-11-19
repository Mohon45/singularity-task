const Editors = require("../models/Editors");

exports.signupService = async (userInfo) => {
  const user = await Editors.create(userInfo);
  return user;
};

exports.findUserByEmail = async (email) => {
  return await Editors.findOne({ email });
};
