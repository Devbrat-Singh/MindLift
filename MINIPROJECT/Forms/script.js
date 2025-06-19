document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const doctorSelect = document.getElementById("doctor");
    const doctorName = doctorSelect.options[doctorSelect.selectedIndex].text;
    
    alert(`Thank you, ${name}! Your appointment with ${doctorName} has been successfully booked.`);
    
    this.reset();
  });
  