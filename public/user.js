// const API = "http://localhost:3000";

// // ================= LOAD DESIGN =================
// async function loadDesign() {

//     const res = await fetch(`${API}/design`);
//     const design = await res.json();

//     const box = document.getElementById("designBox");
//     const text = document.getElementById("designText");

//     box.style.background = design.color || "#aeb2bd";

//     text.innerHTML = `
//         <b>${design.title || "No title"}</b><br>
//         ${design.desc || ""}
//     `;
// }

// // ================= LOAD TASKS =================
// async function loadTasks() {

//     const res = await fetch(`${API}/tasks`);
//     const tasks = await res.json();

//     const list = document.getElementById("userList");

//     if (!tasks || tasks.length === 0) {
//         list.innerHTML = "<p>Hozircha ma’lumot yo‘q</p>";
//         return;
//     }

//     list.innerHTML = "";

//     tasks.forEach(t => {

//         list.innerHTML += `
//         <div class="task">

//             <h3>${t.name}</h3>

//             <p><b>№:</b> ${t.order}</p>
//             <p><b>Nima sababdan:</b> ${t.reason}</p>

//             <span class="badge ${t.status ? "paid" : "unpaid"}">
//                 ${t.status ? "✔ To'langan" : "✖ To'lanmagan"}
//             </span>

//         </div>
//         `;
//     });
// }

// // INIT
// loadDesign();
// loadTasks();

const API = "http://localhost:3000";

// ================= LOAD DESIGN =================
async function loadDesign() {

    const res = await fetch(`${API}/design`);

    const design = await res.json();

    const designBox =
        document.getElementById("designBox");

    const designText =
        document.getElementById("designText");

    // COLOR
    designBox.style.background =
        design.color || "#111827";

    // TEXT
    designText.innerHTML = `
    
        <h3>${design.title || "No title"}</h3>

        <p>${design.desc || ""}</p>

    `;
}

// ================= LOAD TASKS =================
async function loadTasks() {

    const res = await fetch(`${API}/tasks`);

    const tasks = await res.json();

    const list =
        document.getElementById("userList");

    // EMPTY
    if (!tasks.length) {

        list.innerHTML = `
        
            <p>Hozircha ma'lumot yo‘q</p>
        
        `;

        return;
    }

    list.innerHTML = "";

    // LOOP
    tasks.forEach(t => {

        list.innerHTML += `
        
        <div class="task">

            <h3>${t.name}</h3>

            <p><b>№:</b> ${t.order}</p>

            <p><b>Sabab:</b> ${t.reason}</p>

            <span class="badge ${t.status ? "paid" : "unpaid"}">

                ${t.status ? "✔ To'langan" : "✖ To'lanmagan"}

            </span>

        </div>

        `;
    });
}

// ================= AUTO REFRESH =================
setInterval(() => {

    loadTasks();

    loadDesign();

}, 2000);

// ================= INIT =================
loadDesign();

loadTasks();