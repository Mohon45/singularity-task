const Editors = require("../models/Editors");

exports.createEditorService = async (userInfo) => {
  await Editors.updateOne(
    { status: "active" },
    { status: "inactive" },
    {
      runValidators: true,
    }
  );
  const editor = await Editors.create(userInfo);
  return editor;
};

exports.getEditorsService = async () => {
  const editors = await Editors.find({});
  return editors;
};
exports.deleteEditorService = async (id) => {
  const result = await Editors.deleteOne({ _id: id });
  return result;
};
