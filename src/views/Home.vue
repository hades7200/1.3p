<template>
  <div class="home">
    <header>
      <h1>ISHAN SETH</h1>
      <p>AI Developer</p>
      <img src="https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.6435-9/131022926_1940253256115071_2681653671801828046_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=sSN59dj6TkoAX9U0ck_&_nc_ht=scontent.fcbr1-1.fna&oh=00_AfDpaR5su7s3ArPo6ekHngM0NHDDRsSpBUTVN5svZuAsUA&oe=653CD595" alt="Ishan Seth" class="profile-image">
    </header>
    
    <section>
      <h2>About Me</h2>
      <p>
        I am a passionate AI developer with expertise in machine learning, natural language processing, and computer vision.
        I am dedicated to solving complex problems using AI technologies and creating innovative solutions.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  background: linear-gradient(to bottom, #001f3f, #001229);
  color: #fff;
  min-height: 100vh;
}

.profile-image {
  max-width: 200px;
  border-radius: 50%;
  margin-bottom: 10px;
}

header h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

header p {
  font-size: 1.2rem;
  color: #777;
}

section {
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5rem;
}

ul {
  list-style: none;
  padding-left: 0;
}

li {
  margin-bottom: 5px;
}

.experience-item, .education-item {
  text-align: left;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.experience-item h3, .education-item h3 {
  margin: 0;
}

@media screen and (max-width: 768px) {
 
  header h1 {
    font-size: 1.5rem;
  }

  header p {
    font-size: 1rem;
  }

  .profile-image {
    max-width: 150px;
  }

  section {
    margin-bottom: 10px;
  }
}
</style>
