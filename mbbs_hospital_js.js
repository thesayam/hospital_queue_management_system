class Patient {
    constructor(name, age, contact, severity) {
        this.name = name;
        this.age = age;
        this.contact = contact;
        this.severity = severity;
    }
}

class PatientQueue {
    constructor() {
        this.queue = [];
    }
    
    enqueue(patient) {
        if (patient.severity == 3) {
            this.queue.unshift(patient);
        } else {
            this.queue.push(patient);
        }
        this.displayQueue();
    }
    
    dequeue() {
        if (this.queue.length > 0) {
            this.queue.shift();
            this.displayQueue();
        } else {
            alert("Queue is empty");
        }
    }
    
    clearQueue() {
        this.queue = [];
        this.displayQueue();
    }
    
    displayQueue() {
        let queueList = document.getElementById("queue");
        queueList.innerHTML = "";
        this.queue.forEach(patient => {
            let li = document.createElement("li");
            li.textContent = `${patient.name} (Age: ${patient.age}) - Severity: ${patient.severity}`;
            li.className = patient.severity == 3 ? "critical" : patient.severity == 2 ? "moderate" : "low";
            queueList.appendChild(li);
        });
    }
}

const hospitalQueue = new PatientQueue();

function addPatient() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let contact = document.getElementById("contact").value;
    let severity = document.getElementById("severity").value;

    if (name && age && contact) {
        let patient = new Patient(name, age, contact, severity);
        hospitalQueue.enqueue(patient);
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("contact").value = "";
    } else {
        alert("Please fill all fields");
    }
}

function removePatient() {
    hospitalQueue.dequeue();
}

function clearQueue() {
    hospitalQueue.clearQueue();
}
