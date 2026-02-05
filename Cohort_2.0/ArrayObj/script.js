const users = [
  {
    fullName: "Aarav Mehta",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Full Stack Developer",
    description: "Passionate full stack developer specializing in MERN stack and scalable web applications.",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"]
  },
  {
    fullName: "Emily Carter",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "UI/UX Designer",
    description: "Creative UI/UX designer focused on user-centered design and intuitive digital experiences.",
    tags: ["UI Design", "UX Research", "Figma", "Prototyping"]
  },
  {
    fullName: "Rohan Sharma",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    profession: "Data Scientist",
    description: "Data scientist with expertise in machine learning, data analysis, and predictive modeling.",
    tags: ["Python", "Machine Learning", "Data Analysis", "AI"]
  },
  {
    fullName: "Sophia Williams",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Digital Marketer",
    description: "Results-driven digital marketer helping brands grow through SEO, ads, and content strategy.",
    tags: ["SEO", "Google Ads", "Content Marketing", "Analytics"]
  },
  {
    fullName: "Daniel Kim",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Product Manager",
    description: "Product manager bridging business goals and user needs to build impactful products.",
    tags: ["Product Strategy", "Agile", "Roadmapping", "Leadership"]
  }
];

sum = ``

users.forEach(function(elem){
    sum = sum + `<div class="card">
            <img id="img" src="${elem.image}" alt="">
            <h1>${elem.fullName}</h1>
            <h2>${elem.profession}</h2>
            <p>${elem.tags}</p>
        </div>`
})

var main = document.querySelector('main')

main.innerHTML = sum