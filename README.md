## 🐦 Plucker 🐦

A comedic bird identification app (with a twist) created as a two-week, choose-anything project during the final phase of Makers Academy bootcamp. Our group wanted to consolidate our learnings, especially around back-end/ front-end integration and asynchronous Python.

⚠️ The creators of this app do not actually condone cooking random birds (no matter how tasty they look). Read on for more context... ⚠️

## Overview

Plucker allows users to upload photos of birds, record sightings (species, location), and provides a randonly selected recipe for that bird.

This project helped us bridge the gap between frontend and backend, practice asynchronous Flask usage, and experiment with building a more robust application than our previous bootcamp projects.

## Features

- Bird Sighting Recording: Users can create new sightings, specifying the bird species and location.

- Random Recipe Generator: On each upload, the app returns a comedic “recipe” (do not try at home!).

- Frontend / Backend Integration: With React on the client side and a Python/Flask server, data flows asynchronously.

- Async: Used Hypercorn and asyncio to handle concurrency, even though Flask is traditionally synchronous.

- PostgreSQL: Robust relational DB to store sighting data.

- Group Collaboration: Employed agile methodologies (kanban boards, daily stand-ups, pair programming) over the two-week timeframe.

## Tech Stack


- Python - Main programming language (backend)
- Flask - Web framework (adapted for async)
- React -	Front-end library for building the UI
- PostgreSQL - Database for storing bird sightings
- Hypercorn -ASGI server to run async Flask
- asyncio -	Enables concurrency in Python/Flask

## Contributors

- Max Joseph
- Doug Fairfield
- Russell Coles
- Ben Cole
- Alberto Tobarra
- John Hertility
  
This was our final group project at Makers Academy—thanks to all contributors, mentors, and the Makers community for the support!
