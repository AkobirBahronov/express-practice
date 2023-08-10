module.exports = function (schema) {
  return function (req, res, next) {
    const data = {};

    if (req.body && Object.keys(req.body).length > 0) {
      data.body = req.body;
    }
    if (req.query && Object.keys(req.query).length > 0) {
      data.query = req.query;
    }
    if (req.params && Object.keys(req.params).length > 0) {
      data.params = req.params;
    }

    const result = schema.validate(data.body, {
      convert: true,
      abortEarly: false,
      allowUnknown: true,
    });

    if (result.error) {
      return res.status(422).send({
        msg: 'Validation Error',
        data: result.error.details.map((error) => {
          return {
            path: error.path,
            message: error.message,
          };
        }),
      });
    }

    next();
  };
};
