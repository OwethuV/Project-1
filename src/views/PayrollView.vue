<template>
  <div>
    <h1><i>Compensation Information</i></h1>
    <table class="custom-table">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Name</th>
          <th>Hours Worked</th>
          <th>Leave Deductions</th>
          <th>Final Salary</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in payrollData" :key="employee.employeeId">
          <td>{{ employee.employeeId }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.hoursWorked }}</td>
          <td>{{ employee.leaveDeductions }}</td>
          <td>{{ employee.finalSalary }}</td>
          <td>
            <button @click="viewPayslip(employee)">View Payslip</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="selectedEmployee" ref="payslipSection">
      <Payslip :employee="selectedEmployee" />
   </div>

  </div>
</template>

<script>
import Payslip from '@/components/Payslip.vue'
export default{
  name:'PayrollView',
  components:{Payslip},
  data(){
    return{
      payrollData:[],
      selectedEmployee: null
    }

  },
  methods:{
    viewPayslip(employee){
      this.selectedEmployee = employee;

     this.$nextTick(() => {
       const section = this.$refs.payslipSection;
       if (section && typeof section.scrollIntoView === 'function') {
        section.scrollIntoView({ behavior: 'smooth' });
       } else {
        console.warn("Payslip section not found or not ready for scrolling.");
       }
     });
    }
  },
  mounted(){
    fetch('http://localhost:8080/payroll_data.json')
    .then(res => res.json())
    .then(data => {
      this.payrollData = data.payrollData;
    })
  }

};
</script>
<style>

body {
  background-color: #f4f6f8; 
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
}

.custom-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 12px;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}

.custom-table thead {
  background-color: #4a90e2;
  color: #fff;
  text-align: left;
}

.custom-table th {
 padding: 14px 20px;
 box-shadow: 0 2px 6px black;
 text-align: center;
 justify-content: center;
}

.custom-table td {
  background-color: #fff;
  padding: 16px 20px;
  box-shadow: 0 2px 6px black;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.custom-table tr:hover td {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.custom-table button {
  padding: 6px 14px;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.custom-table button:hover {
  background-color: #357ab8;
}

</style>
