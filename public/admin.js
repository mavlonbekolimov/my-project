// // let editId = null;

// // const API = "http://localhost:3000";

// // // ================= DESIGN =================
// // async function saveDesign() {
// //     const design = {
// //         title: document.getElementById("title").value,
// //         color: document.getElementById("color").value,
// //         desc: document.getElementById("desc").value
// //     };

// //     await fetch(`${API}/design`, {
// //         method: "PUT",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(design)
// //     });

// //     renderPreview();
// //     alert("Saqlandi");
// // }

// // async function renderPreview() {
// //     const res = await fetch(`${API}/design`);
// //     const design = await res.json();

// //     document.getElementById("preview").style.background =
// //         design.color || "#ffffff";
// // }

// // // ================= ADD TASK =================
// // async function addTask() {

// //     const name = document.getElementById("name").value.trim();
// //     const order = document.getElementById("order").value.trim();
// //     const reason = document.getElementById("reason").value.trim();
// //     const status = document.getElementById("status").value === "true";

// //     if (!name || !order || !reason) {
// //         alert("To‘ldiring");
// //         return;
// //     }

// //     const task = {
// //         name,
// //         order,
// //         reason,
// //         status
// //     };

// //     if (editId === null) {
// //         await fetch(`${API}/tasks`, {
// //             method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify(task)
// //         });
// //     } else {
// //         await fetch(`${API}/tasks/${editId}`, {
// //             method: "PUT",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify(task)
// //         });

// //         editId = null;
// //     }

// //     clearInputs();
// //     render();
// // }

// // // ================= RENDER =================
// // async function render() {

// //     const res = await fetch(`${API}/tasks`);
// //     const tasks = await res.json();

// //     const list = document.getElementById("list");
// //     list.innerHTML = "";

// //     tasks.forEach(t => {
// //         list.innerHTML += `
// //         <div class="task">
// //             <h3>${t.name}</h3>
// //             <p><b>№:</b> ${t.order}</p>
// //             <p><b>Sabab:</b> ${t.reason}</p>

// //             <span class="badge ${t.status ? "paid" : "unpaid"}">
// //                 ${t.status ? "✔ To'langan" : "✖ To'lanmagan"}
// //             </span>

// //             <div class="actions">

// //                 <button class="${t.status ? "paid" : "unpaid"}"
// //                     onclick="toggleStatus(${t.id}, ${t.status})">
// //                     Status
// //                 </button>

// //                 <button class="edit"
// //                     onclick="editTask(${t.id})">
// //                     Edit
// //                 </button>

// //                 <button class="delete"
// //                     onclick="deleteTask(${t.id})">
// //                     Delete
// //                 </button>

// //             </div>
// //         </div>
// //         `;
// //     });
// // }

// // // ================= TOGGLE =================
// // async function toggleStatus(id, status) {

// //     await fetch(`${API}/tasks/${id}`, {
// //         method: "PATCH",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ status: !status })
// //     });

// //     render();
// // }

// // // ================= DELETE =================
// // async function deleteTask(id) {

// //     await fetch(`${API}/tasks/${id}`, {
// //         method: "DELETE"
// //     });

// //     render();
// // }

// // // ================= EDIT =================
// // async function editTask(id) {

// //     const res = await fetch(`${API}/tasks`);
// //     const tasks = await res.json();

// //     const t = tasks.find(x => x.id === id);

// //     document.getElementById("name").value = t.name;
// //     document.getElementById("order").value = t.order;
// //     document.getElementById("reason").value = t.reason;
// //     document.getElementById("status").value = t.status;

// //     editId = id;
// // }

// // // ================= CLEAR =================
// // function clearInputs() {
// //     document.getElementById("name").value = "";
// //     document.getElementById("order").value = "";
// //     document.getElementById("reason").value = "";
// // }

// // // INIT
// // render();
// // renderPreview();

// let editId = null;

// const API = "http://localhost:3000";

// // ================= DESIGN =================
// async function saveDesign() {
//     const design = {
//         title: document.getElementById("title").value,
//         color: document.getElementById("color").value,
//         desc: document.getElementById("desc").value
//     };

//     await fetch(`${API}/design`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(design)
//     });

//     renderPreview();
//     alert("Saqlandi");
// }

// async function renderPreview() {
//     const res = await fetch(`${API}/design`);
//     const design = await res.json();

//     document.getElementById("preview").style.background =
//         design.color || "#ffffff";
// }

// // ================= ADD TASK =================
// async function addTask() {

//     const name = document.getElementById("name").value.trim();
//     const order = document.getElementById("order").value.trim();
//     const reason = document.getElementById("reason").value.trim();
//     const status = document.getElementById("status").value === "true";

//     if (!name || !order || !reason) {
//         alert("To‘ldiring");
//         return;
//     }

//     const task = {
//         name,
//         order,
//         reason,
//         status
//     };

//     if (editId === null) {
//         await fetch(`${API}/tasks`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(task)
//         });
//     } else {
//         await fetch(`${API}/tasks/${editId}`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 id: editId,
//                 ...task
//             })
//         });

//         editId = null;
//     }

//     clearInputs();
//     render();
// }

// // ================= RENDER =================
// async function render() {

//     const res = await fetch(`${API}/tasks`);
//     const tasks = await res.json();

//     const list = document.getElementById("list");
//     list.innerHTML = "";

//     tasks.forEach(t => {
//         list.innerHTML += `
//         <div class="task">
//             <h3>${t.name}</h3>
//             <p><b>№:</b> ${t.order}</p>
//             <p><b>Sabab:</b> ${t.reason}</p>

//             <span class="badge ${t.status ? "paid" : "unpaid"}">
//                 ${t.status ? "✔ To'langan" : "✖ To'lanmagan"}
//             </span>

//             <div class="actions">

//                 <button class="${t.status ? "paid" : "unpaid"}"
//                     onclick="toggleStatus(${t.id}, ${t.status})">
//                     Status
//                 </button>

//                 <button class="edit"
//                     onclick="editTask(${t.id})">
//                     Edit
//                 </button>

//                 <button class="delete"
//                     onclick="deleteTask(${t.id})">
//                     Delete
//                 </button>

//             </div>
//         </div>
//         `;
//     });
// }

// // ================= TOGGLE (FIXED) =================
// async function toggleStatus(id, status) {

//     const res = await fetch(`${API}/tasks/${id}`);
//     const task = await res.json();

//     const updated = {
//         ...task,
//         status: !status
//     };

//     await fetch(`${API}/tasks/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updated)
//     });

//     render();
// }

// // ================= DELETE =================
// async function deleteTask(id) {

//     await fetch(`${API}/tasks/${id}`, {
//         method: "DELETE"
//     });

//     render();
// }

// // ================= EDIT =================
// async function editTask(id) {

//     const res = await fetch(`${API}/tasks`);
//     const tasks = await res.json();

//     const t = tasks.find(x => x.id === id);

//     document.getElementById("name").value = t.name;
//     document.getElementById("order").value = t.order;
//     document.getElementById("reason").value = t.reason;
//     document.getElementById("status").value = t.status;

//     editId = id;
// }

// // ================= CLEAR =================
// function clearInputs() {
//     document.getElementById("name").value = "";
//     document.getElementById("order").value = "";
//     document.getElementById("reason").value = "";
// }

// // INIT
// render();
// renderPreview();

let editId = null;

const API = "http://localhost:3000";

// ================= DESIGN =================
async function saveDesign() {

    const design = {
        title: document.getElementById("title").value,
        color: document.getElementById("color").value,
        desc: document.getElementById("desc").value
    };

    await fetch(`${API}/design`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(design)
    });

    renderPreview();

    alert("Saqlandi");
}

// ================= PREVIEW =================
async function renderPreview() {

    const res = await fetch(`${API}/design`);
    const design = await res.json();

    document.getElementById("preview").style.background =
        design.color || "#111827";

    document.getElementById("title").value =
        design.title || "";

    document.getElementById("desc").value =
        design.desc || "";

    document.getElementById("color").value =
        design.color || "#111827";
}

// ================= ADD TASK =================
async function addTask() {

    const name = document.getElementById("name").value.trim();

    const order = document.getElementById("order").value.trim();

    const reason = document.getElementById("reason").value.trim();

    const status =
        document.getElementById("status").value === "true";

    if (!name || !order || !reason) {
        alert("Barcha maydonlarni to‘ldiring");
        return;
    }

    const task = {
        name,
        order,
        reason,
        status
    };

    // ADD
    if (editId === null) {

        await fetch(`${API}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });

    }

    // EDIT
    else {

        await fetch(`${API}/tasks/${editId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });

        editId = null;
    }

    clearInputs();

    render();
}

// ================= RENDER =================
async function render() {

    const res = await fetch(`${API}/tasks`);

    const tasks = await res.json();

    const list = document.getElementById("list");

    list.innerHTML = "";

    tasks.forEach(t => {

        list.innerHTML += `
        
        <div class="task">

            <h3>${t.name}</h3>

            <p><b>№:</b> ${t.order}</p>

            <p><b>Sabab:</b> ${t.reason}</p>

            <span class="badge ${t.status ? "paid" : "unpaid"}">

                ${t.status ? "✔ To'langan" : "✖ To'lanmagan"}

            </span>

            <div class="actions">

                <button 
                    class="${t.status ? "paid" : "unpaid"}"
                    onclick="toggleStatus(${t.id})"
                >
                    Status
                </button>

                <button 
                    class="edit"
                    onclick="editTask(${t.id})"
                >
                    Edit
                </button>

                <button 
                    class="delete"
                    onclick="deleteTask(${t.id})"
                >
                    Delete
                </button>

            </div>

        </div>

        `;
    });
}

// ================= TOGGLE STATUS =================
async function toggleStatus(id) {

    // TASK OLISH
    const res = await fetch(`${API}/tasks/${id}`);

    const task = await res.json();

    // STATUSNI O'ZGARTIRISH
    const updatedTask = {
        ...task,
        status: !task.status
    };

    // SERVERGA YUBORISH
    await fetch(`${API}/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTask)
    });

    render();
}

// ================= DELETE =================
async function deleteTask(id) {

    await fetch(`${API}/tasks/${id}`, {
        method: "DELETE"
    });

    render();
}

// ================= EDIT =================
async function editTask(id) {

    const res = await fetch(`${API}/tasks/${id}`);

    const task = await res.json();

    document.getElementById("name").value =
        task.name;

    document.getElementById("order").value =
        task.order;

    document.getElementById("reason").value =
        task.reason;

    document.getElementById("status").value =
        task.status;

    editId = id;
}

// ================= CLEAR =================
function clearInputs() {

    document.getElementById("name").value = "";

    document.getElementById("order").value = "";

    document.getElementById("reason").value = "";

    document.getElementById("status").value = "true";
}

// ================= INIT =================
render();

renderPreview();