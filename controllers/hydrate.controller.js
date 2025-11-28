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
  try {
    // Get last 3 hydration entries
    const entries = await Hydrate.find().sort({ createdAt: -1 }).limit(3);

    if (entries.length === 0) {
      return res.status(404).json({
        insight:
          "No hydration records yet. Start by recording your first drink!",
      });
    }

    const average = entries.reduce((sum, currentEntry) => sum + currentEntry.amount, 0) / entries.length;

    let insight = "";

    if (average < 200) {
      insight =
        "Your recent hydration average is below 200ml per drink. Try taking slightly larger servings to stay safely hydrated.";
    } else if (entries.length >= 3) {
      insight =
        "You're keeping a consistent hydration habit! Great pacing, keep drinking small amounts frequently.";
    } else {
      insight = `Your average intake is ${Math.round(
        average
      )}ml. Keep recording to get more personalized tips.`;
    }

    res.status(200).json({ average: Math.round(average), entries, insight });
  } catch (error) {
    console.error('Error fetching entries', error)
    res.status(500).json({ error: "Failed to generate insight" });
  }
};

export { createHydration, getInsight };
