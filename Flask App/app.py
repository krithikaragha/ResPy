import os
import pandas as pd
from flask import Flask, request, render_template, flash, redirect, url_for, session, logging

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/smoking')
def smoking():
    return render_template('smokingmaps.html')

@app.route('/data')
def data():
    data_df = pd.read_json('data/tobacco_use_by_state.json', orient='columns')
    jsonData = data_df.to_json(orient='columns')
    return jsonData

@app.route('/aqi')
def aqi():
    return render_template('airqualitymaps.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0')
