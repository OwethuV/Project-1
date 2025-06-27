<template >
    <div class="container">
        <h2>Employee Directory</h2>
        <p>Meet our talented team members who drive innovation and excellence at Modern Tech Solutions.</p>
        
    </div>
    <section>
        <manage-comp v-for="employee in employees" :key="employee.employeeId" :employee="employee"/>
    </section>
    
    <div class="container">
    <button v-if="!showForm" @click="showForm = true" class="btn btn-primary" style="margin-top:20px;">
        Add Employee
    </button>
    
    <!-- Add Employee Form (ONE form at the bottom) -->
    <form v-if="showForm" @submit.prevent="submitForm" class="add-employee-form">
        <input v-model="form.name" placeholder="Name" required class="form-control" />
        <input v-model="form.position" placeholder="Position" required class="form-control" />
        <input v-model="form.department" placeholder="Department" required class="form-control" />
        <input v-model="form.salary" placeholder="Salary" type="number" required class="form-control" />
        <input v-model="form.contact" placeholder="Contact" required class="form-control" />
        <input v-model="form.employmentHistory" placeholder="Employment History" class="form-control" />
        <input v-model="form.imageUrl" placeholder="Image URL" class="form-control" />
        <button type="submit" class="btn btn-success" style="margin-top:10px;">Add Employee</button>
        <button type="button" @click="showForm = false" class="btn btn-secondary" style="margin-top:10px;">Cancel</button>
    </form>
    

    </div>
</template>
<script>
import ManageComp from "@/components/ManageComp.vue"
export default {
    components: { ManageComp },
    data() {
        return {
            employees: [
                {
                    employeeId: 1,
                    name: "Sibongile Nkosi",
                    position: "Software Engineer",
                    department: "Development",
                    salary: 70000,
                    employmentHistory: "Joined in 2015, promoted to Senior in 2018",
                    contact: "sibongile.nkosi@moderntech.com",
                    imageUrl: "https://i.pinimg.com/736x/39/b3/7a/39b37a440a6919dcd66368e5d4ee5316.jpg",
                },
                {
                    employeeId: 2,
                    name: "Lungile Moyo",
                    position: "HR Manager",
                    department: "HR",
                    salary: 80000,
                    employmentHistory: "Joined in 2013, promoted to Manager in 2017",
                    contact: "lungile.moyo@moderntech.com",
                    imageUrl:"https://i.pinimg.com/736x/85/21/08/852108effbf96c9e18b5d94955222d45.jpg",
                },
                {
                    employeeId: 3,
                    name: "Thabo Molefe",
                    position: "Quality Analyst",
                    department: "QA",
                    salary: 55000,
                    employmentHistory: "Joined in 2018",
                    contact: "thabo.molefe@moderntech.com",
                    imageUrl:"https://i.pinimg.com/736x/dc/b5/b1/dcb5b15678617e7e47ed74f9957c393e.jpg",
                },
                {
                    employeeId: 4,
                    name: "Keshav Naidoo",
                    position: "Sales Representative",
                    department: "Sales",
                    salary: 60000,
                    employmentHistory: "Joined in 2020",
                    contact: "keshav.naidoo@moderntech.com",
                    imageUrl:"https://i.pinimg.com/736x/56/e0/b9/56e0b9a9fe78a9daad07cd4c1257e7dc.jpg",
                },
                {
                    employeeId: 5,
                    name: "Zanele Khumalo",
                    position: "Marketing Specialist",
                    department: "Marketing",
                    salary: 58000,
                    employmentHistory: "Joined in 2019",
                    contact: "zanele.khumalo@moderntech.com",
                    imageUrl:"https://i.pinimg.com/736x/0b/2e/98/0b2e988dcec7af0209aa42d919c6967b.jpg",
                },
                {
                    employeeId: 6,
                    name: "Sipho Zulu",
                    position: "UI/UX Designer",
                    department: "Design",
                    salary: 65000,
                    employmentHistory: "Joined in 2016",
                    contact: "sipho.zulu@moderntech.com",
                    imageUrl:"https://i.pinimg.com/736x/6b/60/42/6b6042657297682cad2c227875eddab3.jpg",
                },
                {
                    employeeId: 7,
                    name: "Naledi Moeketsi",
                    position: "DevOps Engineer",
                    department: "IT",
                    salary: 72000,
                    employmentHistory: "Joined in 2017",
                    contact: "naledi.moeketsi@moderntech.com",
                    imageUrl:"https://i.pinimg.com/736x/10/b2/c8/10b2c87d4b52a7eaf40616e02459e7f3.jpg",
                },
                {
                    employeeId: 8,
                    name: "Farai Gumbo",
                    position: "Content Strategist",
                    department: "Marketing",
                    salary: 56000,
                    employmentHistory: "Joined in 2021",
                    contact: "farai.gumbo@moderntech.com",
                    imageUrl:"https://i.pinimg.com/736x/7b/ae/d3/7baed3ee85756fa875a97db1b1c38f46.jpg",
                },
                {
                    employeeId: 9,
                    name: "Karabo Dlamini",
                    position: "Accountant",
                    department: "Finance",
                    salary: 62000,
                    employmentHistory: "Joined in 2018",
                    contact: "karabo.dlamini@moderntech.com",
                    imageUrl:"https://i.pinimg.com/736x/61/25/5d/61255d5aba12c6af62fc730a543f1f44.jpg",
                },
                {
                    employeeId: 10,
                    name: "Fatima Patel",
                    position: "Customer Support Lead",
                    department: "Support",
                    salary: 58000,
                    employmentHistory: "Joined in 2016",
                    contact: "fatima.patel@moderntech.com",
                    imageUrl:"https://i.pinimg.com/736x/91/0f/53/910f53e413209daff1bc3df07cd87f76.jpg",
                },
            ],
            showForm: false,
            form: {
                name: '',
                position: '',
                department: '',
                salary: '',
                contact: '',
                employmentHistory: '',
                imageUrl: ''
            }
        }
    },
    methods: {
        submitForm() {
            // Add a new employee to the list
            const newId = this.employees.length
                ? Math.max(...this.employees.map(e => e.employeeId)) + 1
                : 1
            this.employees.push({
                employeeId: newId,
                ...this.form
            })
            // Reset form and hide it
            this.form = {
                name: '',
                position: '',
                department: '',
                salary: '',
                contact: '',
                employmentHistory: '',
                imageUrl: ''
            }
            this.showForm = false
        }
    }
}
</script>
<style >
    section{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 20px;
        ;
    }
    .add-employee-form {
    background: #85dbbe;
    padding: 24px 32px;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    gap: 14px;
    min-width: 320px;
    margin-top: 16px;
}

.form-control {
    padding: 8px 12px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1em;
}

.form-actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

.btn {
    padding: 8px 16px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
    font-size: 1em;
    cursor: pointer;
}

.btn-primary {
    background: #007bff;
    color: #fff;
}

.btn-success {
    background: #2199ea;
    color: #fff;
}

.btn-secondary {
    background: #6c757d;
    color: #fff;
}

.container {
    position: relative;
    text-align: center;
    margin-top: 20px;
}
h2 {
    font-size: 2em;
    color: #333;
}
p {
    font-size: 1.2em;
    color: #666;
}

.container {

    position: relative;
        text-align: center;
        margin-top: 20px;

    }
    h2 {
        font-size: 2em;
        color: #000000;
        
    }
    p {
        font-size: 1.2em;
        color: #1c1c1c;
    }
    
</style>