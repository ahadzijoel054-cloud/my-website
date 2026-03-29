
        // Navigation Logic
        function showSection(id, element) {
            document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active-section'));
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.getElementById(id).classList.add('active-section');
            element.classList.add('active');
        }

        // Modal Logic
        function toggleModal(show) {
            document.getElementById('taskModal').style.display = show ? 'flex' : 'none';
        }

        // Add Task Logic [cite: 53]
        function saveTask() {
            const title = document.getElementById('taskTitle').value;
            const priority = document.getElementById('taskPriority').value;
            const deadline = document.getElementById('taskDeadline').value;

            if(!title || !deadline) return alert("Please fill all fields");

            const tbody = document.getElementById('taskBody');
            const row = `<tr>
                <td>${title}</td><td>${priority}</td><td>${deadline}</td><td>New</td>
                <td><button class="btn-action">Edit</button><button class="btn-action">Delete</button></td>
            </tr>`;
            
            tbody.innerHTML += row;
            toggleModal(false);
            
            // Clear inputs
            document.getElementById('taskTitle').value = "";
        }
    