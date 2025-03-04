const token = localStorage.getItem("token");
const BASE_URL = "http://localhost:5000";

// Tampilkan Semua Notes
function fetchNotes() {
    fetch(`${BASE_URL}/notes`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` },
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response dari API /notes:", data); // Debug response API

        let notesContainer = document.getElementById("notesContainer");
        notesContainer.innerHTML = "";
        
        /*
        data.forEach(note => {
            notesContainer.innerHTML += `
                <div>
                    <h3>${note.title}</h3>
                    <p>${note.content}</p>
                    <button onclick="deleteNote('${note.id}')">Hapus</button>
                </div>
            `;
        });
        */
        
       /*
       // Pastikan kita mengambil array yang benar
       let notes = data.data || data; // Coba ambil `data.data` jika ada

       if (Array.isArray(data)) {  // Pastikan data adalah array
            data.forEach(note => {
                notesContainer.innerHTML += `
                    <div>
                        <h3>${note.title}</h3>
                        <p>${note.content}</p>
                        <button onclick="deleteNote('${note.id}')">Hapus</button>
                    </div>
                `;
            });
        } else {
            console.error("Data bukan array:", data);
        } 
            */

        let notes = data.data;  // Ambil array dari `data.data`

        if (Array.isArray(notes)) {  // Pastikan ini adalah array sebelum `forEach()`
            notes.forEach(note => {
                notesContainer.innerHTML += `
                    <div class="note-card">
                        <h3>${note.title}</h3>
                        <p>${note.content}</p>
                        <div class="button-container">
                            <button class="delete-button" onclick="deleteNote('${note.id}')">Hapus</button>
                        </div>
                    </div>
                `;
            });
        } else {
            console.error("Data bukan array:", notes);
        }
    })
    .catch(error => console.error("Error:", error));
}

// Tambah Notes
function addNote() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    fetch(`${BASE_URL}/notes`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json", 
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ title, content }),
    })
    .then(() => fetchNotes());
}

// Hapus Notes
function deleteNote(id) {
    fetch(`${BASE_URL}/notes/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` },
    })
    .then(() => fetchNotes());
}

// Logout
function logout() {
    localStorage.removeItem("token");
    window.location.href = "index.html";
}

fetchNotes();
