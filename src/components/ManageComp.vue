<template >
    
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                    <img :src="employee?.imageUrl" alt="" class="employee-image">
                    <h2>{{ employee?.name }}</h2>
            </div>
            <div class="flip-card-back">
                <h3>Position: {{ employee?.position }}</h3>
                <p>Department: {{ employee?.department }}</p>
                <p>Salary: R{{ employee?.salary }}</p>
                <p>Contact: {{ employee?.contact }}</p>
                <p>Employment History: {{ employee?.employmentHistory }}</p>
            </div>
        </div>
    </div>



</template>
<script>

export default {
    props:['employee']
}
</script>
<style scoped>

.flip-card {
    background-color: transparent;
    width: 300px;
    height: 400px;
    perspective: 1000px;
    margin-left: 50px;
    margin-bottom: 40px;
    
}
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}
.flip-card-front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #dec7c7;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.flip-card-back {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;
    border-radius: 10px;
    box-shadow: 0 4px;
    transform: rotateY(180deg);
}
.employee-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}


    
</style>