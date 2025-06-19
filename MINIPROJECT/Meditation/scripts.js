document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Collect form data
    const mood = document.getElementById('mood').value;
    const stress = document.getElementById('stress').value;
    const sleep = document.getElementById('sleep').value;
    const anxiety = document.getElementById('anxiety').value;
    const emotion = document.getElementById('emotion').value;
  
    // Hide the form
    this.style.display = 'none';
  
    // Show the response message
    document.getElementById('response-message').style.display = 'block';
  
    // Assess mental health based on the responses
    let mentalHealthStatus = '';
    let tips = [];
    let yogaSuggestions = [];
  
    if (mood === 'anxious' || stress > 7 || anxiety === 'often' || emotion === 'often') {
      mentalHealthStatus = 'You might be experiencing high levels of stress or anxiety. It’s important to take steps to manage your mental health.';
      tips = [
        'Try deep breathing exercises to calm your mind.',
        'Consider journaling to reflect on your thoughts.',
        'Reach out for support from a counselor or therapist.'
      ];
      yogaSuggestions = [
        'Child\'s Pose: Helps in relaxation.',
        'Cobra Pose: Relieves tension and promotes calmness.'
      ];
    } else if (mood === 'sad' || sleep === 'poor') {
      mentalHealthStatus = 'You may be feeling low or fatigued. Focus on improving your sleep and emotional well-being.';
      tips = [
        'Establish a regular sleep routine to improve your rest.',
        'Consider light physical activity to boost your mood.',
        'Practice mindfulness to manage negative thoughts.'
      ];
      yogaSuggestions = [
        'Lotus Pose: Great for meditation and deep breathing.',
        'Tree Pose: Promotes mental clarity and balance.'
      ];
    } else {
      mentalHealthStatus = 'Your responses suggest that you are in a generally good mental state, but taking care of yourself is always important.';
      tips = [
        'Continue practicing mindfulness to maintain calmness.',
        'Stay active and connected with loved ones.',
        'Remember to take breaks throughout your day.'
      ];
      yogaSuggestions = [
        'Warrior II Pose: Boosts mental clarity and confidence.',
        'Downward Dog: Relieves stress and tension.'
      ];
    }
  
    // Display the mental health assessment and suggestions
    document.getElementById('mental-health-status').textContent = mentalHealthStatus;
    const tipsList = document.getElementById('tips-list');
    tipsList.innerHTML = '';
    tips.forEach(tip => {
      const li = document.createElement('li');
      li.textContent = tip;
      tipsList.appendChild(li);
    });
  
    const yogaList = document.getElementById('yoga-suggestions');
    yogaList.innerHTML = '';
    yogaSuggestions.forEach(yoga => {
      const li = document.createElement('li');
      li.textContent = yoga;
      yogaList.appendChild(li);
    });
  
    // Show the result message
    document.getElementById('mental-health-result').style.display = 'block';
  });
  
  // Update stress value when slider is changed
  document.getElementById('stress').addEventListener('input', function() {
    document.getElementById('stress-value').textContent = this.value;
  });
  