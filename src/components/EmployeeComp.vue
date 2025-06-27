<template>
  <div class="employee-form">
    <h2>Submit Leave Request</h2>
    <form @submit.prevent="submitRequest">
      <div class="form-group">
        <label>Employee</label>
        <select v-model="employeeId" required>
          <option value="">Select Employee</option>
          <option 
            v-for="emp in employees" 
            :value="emp.employeeId" 
            :key="emp.employeeId"
          >
            {{ emp.name }} (ID: {{ emp.employeeId }})
          </option>
        </select>
      </div>

      <div class="form-group">
        <label>Leave Date</label>
        <input type="date" v-model="date" required :min="minDate">
      </div>

      <div class="form-group">
        <label>Reason</label>
        <select v-model="reason" required>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Vacation">Vacation</option>
          <option value="Personal">Personal</option>
        </select>
      </div>

      <button type="submit">Submit Request</button>
      <p v-if="confirmationMessage" class="confirmation">{{ confirmationMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  props: ['employees'],
  data() {
    return {
      employeeId: '',
      date: '',
      reason: '',
      confirmationMessage: ''
    }
  },
  computed: {
    minDate() {
      const today = new Date();
      return today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    }
  },
  methods: {
    submitRequest() {
      if (this.employeeId && this.date && this.reason) {
        this.$emit('request-submitted', {
          employeeId: Number(this.employeeId),
          date: this.date,
          reason: this.reason
        });
        this.resetForm();
        this.confirmationMessage = "Leave request submitted successfully!";
        setTimeout(() => {
          this.confirmationMessage = '';
        }, 3000); // Clear message after 3 seconds
      }
    },
    resetForm() {
      this.employeeId = '';
      this.date = '';
      this.reason = '';
    }
  }
}
</script>

<style scoped>
.employee-form {
  background: #d4d4dd;
  padding: 20px;
  border-radius: 8px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}
select, input {
  width: 100%;
  padding: 8px;
  border: 1px solid #2199ea;
  border-radius: 4px;
}
button {
  background: #2199ea;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}
button:hover {
  background: #1a7bbf;
}
.confirmation {
  color: #42b983;
  margin-top: 10px;
}
</style>