import Hydrate from "../models/hydrate.model.js";

const createHydration = async (req, res) => {
  try {
    const { amount, reference } = req.body;

    const entry = Hydrate.create({ amount, reference });

    res.status(201).json({ message: "Hydration entry added", entry });
  } catch (error) {
    console.error("Error adding hydration entry", error);
    res.status(500).json({ Error: "Failed to record hydration" });
  }
};

const getInsight = async (req, res) => {
  res.send("Get Insight");
};

export { createHydration, getInsight };
