// Filter function for search bar
function filterResults() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
      const name = member.getAttribute('data-name').toLowerCase();
      const skills = member.getAttribute('data-skills').toLowerCase();
      const specialization = member.getAttribute('data-specialization').toLowerCase();
  
      if (name.includes(searchTerm) || skills.includes(searchTerm) || specialization.includes(searchTerm)) {
        member.style.display = 'block';
      } else {
        member.style.display = 'none';
      }
    });
  }
  