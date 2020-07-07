let express = require('express');

let router = express.Router();
let studentSchema = require('../models/student');

router.route('/students').get((req, res, next) => {
    studentSchema.find((error, result) => {
        if (error) {
            return next(error);
        }
        console.log(result);
        return res.json(result);
    });
});

router.route('/students/:id').get((req, res, next) => {
    studentSchema.findById(req.params.id, (error, result) => {
        if (error) {
            return next(error);
        }        
        return res.json(result);
    });
});

router.route('/students').post((req, res, next) => {
    studentSchema.create(req.body, (error, result) => {
        if (error) {
            return next(error);
        }
        console.log('Student created!');        
        return res.json(result);
    });
});

router.route('/students/:id').put((req, res, next) => {
    studentSchema.findByIdAndUpdate(req.params.id, req.body, (error, result) => {
        if (error) {
            return next(error);
        }
        console.log('Student updated!');        
        return res.json(result);
    });
});

router.route('/students/:id').delete((req, res, next) => {
    studentSchema.findByIdAndDelete(req.params.id, (error, result) => {
        if (error) {
            return next(error);
        }
        console.log('Student deleted!');        
        return res.status(200).json({
            msg: result
        });
    });
});

module.exports = router;
