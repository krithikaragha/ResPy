import os
import pandas as pd
from flask import Flask, request, render_template, flash, redirect, url_for, session, logging

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
    
@app.route('/overview')
def overview():
    return render_template('dashboard.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/maps')
def maps():
    return render_template('smokingmaps.html')

@app.route('/chart')
def stack():
    return render_template('smokingchart.html')

@app.route('/bar')
def bar():
    return render_template('ncds.html')

@app.route('/aqi')
def aqi():
    return render_template('aqi.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0')
