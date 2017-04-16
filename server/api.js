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

api.post('/campuses', (req, res, next) => {
  Campus.create(req.body)
  .then(newCampus => res.send(newCampus))
  .catch(next);
});

api.delete('/campuses/:id', (req, res, next) => {
  Campus.findOne({
        where: {
          id: req.params.id
        }
      })
  .then(campus => campus.destroy())
  .then(() => res.send(req.params.id))
  .catch(next);
});

api.put('/campuses/', (req, res, next) => {
  Campus.update(req.body, {
        where: {
          id: req.body.id
        },
        returning: true
      })
  .then(updatedCampus => res.send(updatedCampus[1][0]))
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

api.post('/students', (req, res, next) => {
  Student.create(req.body)
  .then(newStudent => res.send(newStudent))
  .catch(next);
});

api.put('/students', (req, res, next) => {
  Student.update(req.body, {
        where: {
          id: req.body.id
        },
        returning: true
      })
  .then(updatedStudent => res.send(updatedStudent[1][0]))
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

api.delete('/students/:id', (req, res, next) => {
  Student.findOne({
        where: {
          id: req.params.id
        }
      })
  .then(student => student.destroy())
  .then(() => res.send(req.params.id))
  .catch(next);
});

module.exports = api
