from flask import Flask, request, jsonify
import google.generativeai as genai
from flask_cors import CORS


# Set your API key
genai.configure(api_key="AIzaSyBAZGBssj3DTTgrVwkBR1RzoBTsjI0J2FE")

# Initialize Flask app
app = Flask(__name__)

# Use the chat method to interact with the AI
model = genai.GenerativeModel("gemini-1.5-flash")

# Function to create a mental health support conversation
def mental_health_bot(user_input):
    prompt = f"You're a compassionate mental health support bot. Respond empathetically to the user about medical or health-related issues. Respond precisely: {user_input}"
    response = model.generate_content(prompt)
    return response.text

# Define the route for the API
@app.route('/mental_health_support', methods=['POST'])
def get_support():
    try:
        # Get the user input from the request
        data = request.get_json()
        user_input = data.get('user_input', '')

        if not user_input:
            return jsonify({'error': 'No input provided'}), 400
        
        # Get the bot's response
        response_text = mental_health_bot(user_input)

        # Return the response as JSON
        return jsonify({'response': response_text}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Run the app
if __name__ == '__main__':
    CORS(app)
    app.run(debug=True, port=5000)

