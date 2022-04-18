const express = require("express");
const List = require("../models/list_info");
const { validationResult } = require("express-validator");

const get_lists = (req, res, next) => {
  List.find({}, function (err, data) {
    if (err)
      req.json({
        success: false,
        data: err,
      });
    else
      res.json({
        success: true,
        data: data,
      });
  });
};

const create = (req, res, next) => {
  const data = req.body;
  List.create(data, function (err, data) {
    if (err)
      res.json({
        success: false,
        data: err,
      });
    else
      res.json({
        success: true,
        data: data,
      });
  });
};

const update = (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  List.updateOne({ _id: id }, data, function (err, data) {
    if (err)
      res.json({
        success: false,
        data: err,
      });
    else
      res.json({
        success: true,
        data: data,
      });
  });
};

const delete_list = (req, res, next) => {
  List.findOneAndDelete({
    _id: req.params.id,
  })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

module.exports = {
  get_lists,
  create,
  update,
  delete_list,
};
