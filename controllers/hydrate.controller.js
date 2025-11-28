const createHydration = async (req, res) => {
  res.send("Record Hydration");
};

const getInsight = async (req, res) => {
  res.send("Get Insight");
};

export { createHydration, getInsight };
