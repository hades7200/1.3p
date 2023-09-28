<template>
  <div class="about">
    <header class="about-header">
      <h1>About Me</h1>
    </header>
    
    <section>
      <h2>Introduction</h2>
      <p>
        Hello! I'm ISHAN, a passionate AI developer with a strong background in machine learning,
        natural language processing, and computer vision. I am dedicated to pushing the boundaries of AI
        and creating innovative solutions to complex problems. I graduated from Deakin University in 2026
        with majors in Artificial Intelligence and Cybersecurity.
      </p>
    </section>
    
    <section>
      <h2>Skills</h2>
      <ol class="skills-list" type="I"> <!-- Use type="I" for uppercase Roman numerals -->
        <li>Machine Learning</li>
        <li>Natural Language Processing</li>
        <li>Computer Vision</li>
        <li>Python</li>
        <li>Kali</li>
        <li>Cryptography</li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped>


.about {
  background: linear-gradient(90deg, #0e1b38 0%, #0b162b 100%); 
  color: #fff; 
  padding: 20px;
  border-radius: 10px;
}

.about-header h1 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

section {
  margin-bottom: 20px;
}

h2 {
  font-size: 20px;
}

.skills-list {
  list-style: none;
  padding-left: 0;
}

li {
  margin-bottom: 5px;
}

</style>
