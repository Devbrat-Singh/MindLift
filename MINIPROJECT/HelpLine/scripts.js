// Function to filter results based on search input
function filterResults() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const expertCards = document.querySelectorAll(".expert-card");
    const hospitalCards = document.querySelectorAll(".hospital-card");
    const helplines = document.querySelectorAll(".helpline-section ul li");
  
    // Filter experts
    expertCards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      const specialization = card.dataset.specialization.toLowerCase();
      const location = card.dataset.location.toLowerCase();
  
      if (
        name.includes(searchInput) ||
        specialization.includes(searchInput) ||
        location.includes(searchInput)
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  
    // Filter hospitals
    hospitalCards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      const location = card.dataset.location.toLowerCase();
  
      if (name.includes(searchInput) || location.includes(searchInput)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  
    // Filter helplines
    helplines.forEach(helpline => {
      const helplineText = helpline.textContent.toLowerCase();
  
      if (helplineText.includes(searchInput)) {
        helpline.style.display = "block";
      } else {
        helpline.style.display = "none";
      }
    });
  }
  