<template>
  <div class="employee-view">
    <h1>Employee Management System</h1>
    
    <div class="content-grid">
      <EmployeeComp 
        :employees="employees" 
        @request-submitted="handleNewRequest"
      />
      
      <AttendanceComp 
        :employees="employees" 
        class="attendance-display"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import EmployeeComp from '@/components/EmployeeComp.vue'
import AttendanceComp from '@/components/AttendanceComp.vue'

export default {
  name: 'EmployeeView',
  components: { EmployeeComp, AttendanceComp },
  setup() {
    // Using your provided data structure
    const employees = ref([
  {
    employeeId: 1,
    name: "Sibongile Nkosi",
    attendance: [
      { date: "2025-07-25", status: "Present" },
      { date: "2025-07-26", status: "Absent" }

    ],
    leaveRequests: [
      { date: "2025-07-22", reason: "Sick Leave", status: "Approved" }
    ]
  },
  {
    employeeId: 2,
    name: "Lungile Moyo",
    attendance: [
      { date: "2025-07-25", status: "Present" },
      { date: "2025-07-26", status: "Present" }
    ],
    leaveRequests: [
      { date: "2025-07-15", reason: "Family Responsibility", status: "Denied" }
    ]
  },
  {
    employeeId: 3,
    name: "Thabo Molefe",
    attendance: [
      { date: "2025-07-25", status: "Present" },
      { date: "2025-07-26", status: "Absent" }
    ],
    leaveRequests: [
      { date: "2025-07-10", reason: "Medical Appointment", status: "Approved" }
    ]
  },
  {
    employeeId: 4,
    name: "Keshav Naidoo",
    attendance: [
      { date: "2025-07-25", status: "Present" },
      { date: "2025-07-26", status: "Present" }
    ],
    leaveRequests: [
      { date: "2025-07-20", reason: "Bereavement", status: "Approved" }
    ]
  },
  {
    employeeId: 5,
    name: "Zanele Khumalo",
    attendance: [
      { date: "2025-07-25", status: "Absent" },
      { date: "2025-07-26", status: "Present" }
    ],
    leaveRequests: [
      { date: "2024-12-01", reason: "Childcare", status: "Pending" }
    ]
  },
  {
    employeeId: 6,
    name: "Sipho Zulu",
    attendance: [
      { date: "2025-07-25", status: "Absent" },
      { date: "2025-07-26", status: "Present" }
    ],
    leaveRequests: [
      { date: "2025-07-18", reason: "Sick Leave", status: "Approved" }
    ]
  },
  {
    employeeId: 7,
    name: "Naledi Moeketsi",
    attendance: [
      { date: "2025-07-25", status: "Absent" },
      { date: "2025-07-26", status: "Present" }
    ],
    leaveRequests: [
      { date: "2025-07-22", reason: "Vacation", status: "Pending" }
    ]
  },
  {
    employeeId: 8,
    name: "Farai Gumbo",
    attendance: [
      { date: "2025-07-25", status: "Absent" },
      { date: "2025-07-26", status: "Present" }
    ],
    leaveRequests: [
      { date: "2025-07-18", reason: "Medical Appointment", status: "Approved" }
    ]
  },
  {
    employeeId: 9,
    name: "Karabo Dlamini",
    attendance: [
      { date: "2025-07-25", status: "Absent" },
      { date: "2025-07-26", status: "Present" }
    ],
    leaveRequests: [
      { date: "2025-07-19", reason: "Childcare", status: "Denied" }
    ]
  },
  {
    employeeId: 10,
    name: "Fatima Patel",
    attendance: [
      { date: "2025-07-25", status: "Absent" },
      { date: "2025-07-26", status: "Present" }
    ],
    leaveRequests: [
      { date: "2024-12-03", reason: "Childcare", status: "Pending" }
    ]
  }
]);

      

    const handleNewRequest = (request) => {
      const employee = employees.value.find(
        emp => emp.employeeId == request.employeeId
      )
      if (employee) {
        employee.leaveRequests.push({
          date: request.date,
          reason: request.reason,
          status: "Pending"
        })
      }
    }

    return { employees, handleNewRequest }
  }
}
</script>

<style scoped>
.employee-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
h1 {
  color: #2199ea;
  text-align: center;
  margin-bottom: 30px;
}
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.attendance-display {
  background-color: #eeeeee;
  padding: 20px;
  border-radius: 8px;
}
</style>