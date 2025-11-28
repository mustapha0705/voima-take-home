const routeNotFound = (req, res, next) => {
  res.status(404).send("The route does not exist");
};

export default routeNotFound;
