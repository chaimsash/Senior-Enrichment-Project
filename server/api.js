'use strict'
const api = require('express').Router()
const Campus = require('../db/models').Campus
const Student = require('../db/models').Student

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/campuses', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.send(campuses))
  .catch(next);
});

api.get('/campuses/:id', (req, res, next) => {
  Student.findAll({
    where: {
      campusId: +req.params.id
    }, include: [{
        model: Campus
      }]
  })
  .then(students => res.send(students))
  .catch(next);
});

api.get('/students', (req, res, next) => {
  Student.findAll({
    include: [{
        model: Campus
      }]
    })
  .then(students => res.send(students))
  .catch(next);
});

api.get('/students/:id', (req, res, next) => {
  Student.findOne({
    where: {
      id: +req.params.id
    }, include: [{
        model: Campus
      }]
  })
  .then(student => res.send(student))
  .catch(next);
});

module.exports = api
