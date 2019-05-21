from flask import Flask, request, render_template, flash, redirect, url_for, session, logging
import os


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('intro.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0')
