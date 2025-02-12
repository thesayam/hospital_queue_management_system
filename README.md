# hospital_queue_management_system
In modern hospitals, managing patient queues efficiently is a critical challenge. Traditional first-come, first-served (FCFS) approaches fail to prioritize critical cases, leading to delays in urgent care. This Hospital Queue Management System aims to optimize patient handling using priority-based queueing, ensuring that critically ill patients receive immediate attention while maintaining a structured order for others. The system utilizes concepts, such as priority queues, greedy algorithms, and object-oriented programming, to dynamically manage patient entries, removals, and real-time queue visualization. By implementing an efficient priority-driven approach, the system enhances hospital workflow, reduces patient wait times, and ensures timely medical attention for those in need.
**algorithm of the code**
Algorithm: Hospital Queue Management System
1.	Start
2.	Input Patient Details 
  o	Input Patient Name
  o	Input Patient Age
  o	Input Patient Contact Number
  o	Input Patient Severity (Low, Moderate, Critical)
3.	Validate Input 
  o	If any input field is empty, show an error message and go to Step 2.
  o	Else, proceed to Step 4.
4.	Add Patient to Queue 
  o	Create a new patient object with the details provided.
  o	If the patient's severity is Critical: 
	    Add the patient to the front of the queue.
  o	Else, if the patient's severity is Moderate or Low: 
   	Add the patient to the end of the queue.
5.	Display Queue 
  o	Update the display of the queue list on the User Interface (UI).
6.	Remove Patient 
  o	Remove the first patient from the queue.
  o	Update the queue list on the UI.
7.	Clear Queue 
  o	Empty the queue entirely.
  o	Update the queue list on the UI.
8.	End

