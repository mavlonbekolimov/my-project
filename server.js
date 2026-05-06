const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ================= PUBLIC FOLDER =================
app.use(express.static(path.join(__dirname, "public")));

// ================= DB FILE =================
const DB_FILE = path.join(__dirname, "db.json");

// ================= CREATE DB =================
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(
        DB_FILE,
        JSON.stringify(
            {
                design: {
                    title: "",
                    color: "#111827",
                    desc: ""
                },
                tasks: []
            },
            null,
            2
        )
    );
}

// ================= READ DB =================
function readDB() {
    const data = fs.readFileSync(DB_FILE, "utf8");
    return JSON.parse(data);
}

// ================= WRITE DB =================
function writeDB(data) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// =================================================
// ==================== TASKS ======================
// =================================================

// GET ALL TASKS
app.get("/tasks", (req, res) => {
    const db = readDB();
    res.json(db.tasks);
});

// GET SINGLE TASK
app.get("/tasks/:id", (req, res) => {

    const db = readDB();

    const id = Number(req.params.id);

    const task = db.tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task topilmadi"
        });
    }

    res.json(task);
});

// ADD TASK
app.post("/tasks", (req, res) => {

    const db = readDB();

    const newTask = {
        id: Date.now(),
        name: req.body.name,
        order: req.body.order,
        reason: req.body.reason,
        status: req.body.status
    };

    db.tasks.push(newTask);

    writeDB(db);

    res.json(newTask);
});

// UPDATE TASK
app.put("/tasks/:id", (req, res) => {

    const db = readDB();

    const id = Number(req.params.id);

    const index = db.tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Task topilmadi"
        });
    }

    db.tasks[index] = {
        ...db.tasks[index],
        ...req.body,
        id
    };

    writeDB(db);

    res.json(db.tasks[index]);
});

// DELETE TASK
app.delete("/tasks/:id", (req, res) => {

    const db = readDB();

    const id = Number(req.params.id);

    db.tasks = db.tasks.filter(t => t.id !== id);

    writeDB(db);

    res.json({
        success: true
    });
});

// =================================================
// ==================== DESIGN =====================
// =================================================

// GET DESIGN
app.get("/design", (req, res) => {

    const db = readDB();

    res.json(db.design);
});

// SAVE DESIGN
app.put("/design", (req, res) => {

    const db = readDB();

    db.design = {
        title: req.body.title || "",
        color: req.body.color || "#111827",
        desc: req.body.desc || ""
    };

    writeDB(db);

    res.json({
        success: true
    });
});

// =================================================
// ==================== START ======================
// =================================================

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});