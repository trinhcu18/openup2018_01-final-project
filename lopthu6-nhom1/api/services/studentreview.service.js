const result = require('./base.service').result,
    StudentRevRepo = require('../repositories/studentreview.repo');

/**
 * service create a new Employee
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.create = (req, res, next) => {
    // req.body.userId = req.userId;
    StudentRevRepo.save(true, req.body, (err, data) => {
        result(next, err, data,res);
    });
};

/**
 * service update a Employee
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.update = (req, res, next) => {
    req.body.id = req.params.id;
    // req.body.userId = req.userId;
    StudentRevRepo.save(false, req.body, (err, data) => {
        result(next, err, data);
    });
};

/**
 * service find Employee by id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.findById = (req, res, next) => {
    //get token and id
    let params = {
        // userId: req.userId,
        id: req.params.id
    };
    StudentRevRepo.findById(params, (err, data) => {
        result(next, err, data);
    });
};

/**
 * service check Employee has exists by id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.checkIdExist = (req, res, next) => {
    //get token and id
    let params = {
        userId: req.userId,
        id: req.params.id
    };
    StudentRevRepo.isExist(params, (err, data) => {
        result(next, err, data);
    });
};

exports.findAll= (req, res, next)=>{
    StudentRevRepo.findAll((err, data)=>{
        result(next, err, data);
    });
};

exports.deleteById=(req, res, next)=>{
    StudentRevRepo.deleteById(req.params.id, (err,data)=>{
        result(next, err, data);    
    });
};