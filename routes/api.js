const router = require("express").Router();
const db = require("../models/workout.js");
const path = require("path");

router.get("/api/workouts/", (req, res) =>
  db.Workout.find({})
    .then((workout) => res.json(workout))
    .catch((err) => res.status(400).json(err))
);
router.get("/api/workouts/range/", ({}, res) =>
  db.Workout.find({})
    .then((workout) => res.json(workout))
    .catch((err) => res.status(400).json(err))
);
router.post("/api/workouts/", (req, res) =>
  db.Workout.create(req.body)
    .then((workout) => res.json(workout))
    .catch((err) => res.status(400).json(err))
);
router.put("/api/workouts/:id", (req, res) =>
  db.Workout.findByIdAndUpdate({ _id: req.params.id }, { exercises: req.body })
    .then((workout) => res.json(workout))
    .catch((err) => res.status(400).json(err))
);

router.get("/exercise", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
);

router.get("/stats", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/stats.html"))
);

module.exports = router;
