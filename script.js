// Simple JavaScript for interactivity (optional)
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    // Don't prevent default for blog links or links to other pages
    if (link.getAttribute("href").includes("blog.html") || 
        link.getAttribute("href").includes("index.html")) {
      return;
    }
    
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});
