from flask import Flask, render_template

# Create a Flask application
app = Flask(__name__)

# Define a route
@app.route('/')
def index():
    return render_template('index.html')

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True, port=8080)
