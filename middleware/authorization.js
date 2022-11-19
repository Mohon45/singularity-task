module.exports = (...role) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    const userStatus = req.user.status;
    if (role[0] === "administrator") {
      if (!role.includes(userRole)) {
        return res.status(403).json({
          status: "fail",
          error: "You are not authorized to access this",
        });
      }
    }
    if (role[0] === "editors") {
      if (!role.includes(userRole) || userStatus === "inactive") {
        return res.status(403).json({
          status: "fail",
          error: "You are not authorized to access this",
        });
      }
    }

    next();
  };
};
