const {
  createEditorService,
  getEditorsService,
  deleteEditorService,
} = require("../services/editor.services");

exports.createEditor = async (req, res) => {
  try {
    const editor = await createEditorService(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully Created a Editors",
      editor,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};

exports.getEditors = async (req, res) => {
  try {
    const editor = await getEditorsService();

    res.status(200).json({
      status: "success",
      message: "Successfully get Editors",
      editor,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};

exports.deleteEditor = async (req, res) => {
  try {
    const { id } = req.params;
    const editor = await deleteEditorService(id);

    res.status(200).json({
      status: "success",
      message: "Successfully delete Editor",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't delete the Editor",
      error: error.message,
    });
  }
};
