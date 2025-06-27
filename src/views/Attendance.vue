<template>
  <div>
    <h1><i>Attendance Records</i></h1>
    <table class="attendance-table">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Name</th>
         <th v-for="date in uniqueDates" :key="date">{{ date }}</th>
          <th>Leave Request</th>
        </tr>
      </thead>
      <tbody v-if="attendanceAndLeave.length">
        <tr v-for="record in attendanceAndLeave" :key="record.employeeId">
              <td>{{ record.employeeId }}</td>
              <td>{{ record.name }}</td>
              <td v-for="date in uniqueDates" :key="record.employeeId + date">
                <span v-if="getStatusByDate(record.attendance, date)" > 
                  {{ getStatusByDate(record.attendance, date)  }}
                </span>
                <span v-else>-</span>
              </td>
              <td>
                <span v-if="record.leaveRequests && record.leaveRequests.length">
                  <span :style="{ color: getLeaveColor(record.leaveRequests[0].status) }">
                    {{ record.leaveRequests[0].status}} - {{ record.leaveRequests[0].reason }}
                  </span>
                </span>
                <button v-else @click="submitLeaveRequest(record)">Request Leave</button>
             </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Attendance',

  data() {
    return {
      attendanceAndLeave: []
    };
  },
  computed:{
    uniqueDates(){
      if (!Array.isArray(this.attendanceAndLeave)) return[];
      const dateSet = new Set();
      this.attendanceAndLeave.forEach(record => {
        if(Array.isArray(record.attendance)){
         record.attendance.forEach(entry => {
          if (entry.date) dateSet.add(entry.date);
         });
        }
      });
      return Array.from(dateSet).sort(); 
    }
  },

  methods: {
    getStatusByDate(attendanceArray,date){
      const entry = attendanceArray.find(a => a.date === date);
      return entry ? entry.status:null;
    },

    getAttendanceRecord(status) {
      if (status === 'Present') return 'Present';
      if (status === 'Absent') return 'Absent';
      return 'status';
    },

    getLeaveColor(status) {
      switch (status) {
        case 'Approved':
          return 'green';
        case 'Denied':
          return 'red';
        case 'Pending':
          return 'orange';
        default:
          return 'black';
      }
    },
    submitLeaveRequest(record){
      alert(`Leave request Submitted for ${record.name}`);
    },
    async fetchAttendanceData(){
    try{
      const response = await fetch('/attendance.json');
      const data = await response.json();

      if (Array.isArray(this.attendanceAndLeave)){
        console.error('😒expected array but got', data);
      }

      this.attendanceAndLeave = data.attendanceAndLeave;
      console.log('✅',this.attendanceAndLeave);
     
    } catch{
      console.error('Error fetching attendance data');
    }
   }
  }, 
  mounted() {
    this.fetchAttendanceData(); 
  }
      
};
</script>
<style>
.attendance-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: "Segoe UI", sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.attendance-table th {
  background-color: #2d3e50;
  color: #ffffff;
  text-align: center;
  justify-content: center;
  padding: 12px;
}

.attendance-table td {
  padding: 12px;
  text-align: center;
  justify-content: center;
  border-bottom: 1px solid #e0e0e0;
}

.attendance-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.attendance-table tr:hover {
  background-color: #f1f7ff;
}

.attendance-table td button {
  padding: 6px 10px;
  background-color: #0078d4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.attendance-table td button:hover {
  background-color: #005ea2;
}

.attendance-table td span {
  font-weight: 500;
}

</style>