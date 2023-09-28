<template>
  <div class="resume">
    <header>
      <h1 class="resume-title">My Resume</h1>
    </header>
    
    <section>
      <h2 class="section-title">Education</h2>
      <table class="education-table">
        <thead>
          <tr>
            <th>University/School</th>
            <th>Degree</th>
            <th>Graduation Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Deakin University</td>
            <td>Bachelor of Information Technology</td>
            <td>May 2026</td>
          </tr>
          <tr>
            <td>Delhi Public School Ludhiana</td>
            <td>CBSE Grade 12</td>
            <td>June 2022</td>
          </tr>
        </tbody>
      </table>
    </section>
    
    <section>
     
    </section>
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped>


.resume {
  background: linear-gradient(90deg, #0e1b38 0%, #0b162b 100%); 
  color: #fff; 
  padding: 20px;
  border-radius: 10px;
}

.resume-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.section-title {
  font-size: 20px;
  margin-top: 20px;
}

.education-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.education-table th,
.education-table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #fff; 
}

.education-table th {
  background-color: #001f3f; 
  color: #fff;
}

.education-table tbody tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.1); 
}

</style>
