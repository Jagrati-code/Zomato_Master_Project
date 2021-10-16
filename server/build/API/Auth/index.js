/*//library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";
//models
import {UserModel} from "../../Database/user";

//validation
import { ValidateSignup,ValidateSignin } from "../../validation/auth";
const Router=express.Router();
/*Route     /signup
Des         Signup with email and password
Params      none
Access       Public
Method      Post

Router.post("/signup",async(req,res)=>{
    try{
      await ValidateSignup(req.body.credentials);
        await UserModel.findByEmailAndPhone(req.body.credentials);
         //save to db
         const newUser=await UserModel.create(req.body.credentials);
        //generate JWT auth token
        const token=newUser.generateJwtToken();

        //return
        return res.status(200).json({token,status:"success"});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
});

/*Route     /signin
Des         Register new user
Params      none
Access       Public
Method      Post

Router.post("/signin",async(req,res)=>{
    try{
      await ValidateSignin(req.body.credentials);
        const user =await UserModel.findByEmailAndPassword(req.body.credentials);
        //generate JWT auth token
        const token=user.generateJwtToken();

        //return
        return res.status(200).json({token,status:"success"});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
});

/*
Route     /google
Des       Google Signin
Params    none
Access    Public
Method    GET  

Router.get(
    "/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    })
  );
  
  /*
  Route     /google/callback
  Des       Google Signin Callback
  Params    none
  Access    Public
  Method    GET  
  
  Router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      return res.json({ token: req.session.passport.user.token });
    }
  );
export default Router;
//static and methods in mongoose
//Methods->available only when we started the initiation
//static->available without initiation also.
*/
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _passport = _interopRequireDefault(require("passport"));

var _user = require("../../database/user");

var _auth = require("../../validation/auth");

// Library
// Models
// validation
var Router = _express["default"].Router();
/*
Route     /signup
Des       Register new user
Params    none
Access    Public
Method    POST  
*/


Router.post("/signup", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var newUser, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _auth.ValidateSignup)(req.body.credentials);

          case 3:
            _context.next = 5;
            return _user.UserModel.findByEmailAndPhone(req.body.credentials);

          case 5:
            _context.next = 7;
            return _user.UserModel.create(req.body.credentials);

          case 7:
            newUser = _context.sent;
            token = newUser.generateJwtToken();
            return _context.abrupt("return", res.status(200).json({
              token: token,
              status: "success"
            }));

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              error: _context.t0.message
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/*
Route     /signin
Des       Signin with email and password
Params    none
Access    Public
Method    POST  
*/

Router.post("/signin", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var user, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _auth.ValidateSignin)(req.body.credentials);

          case 3:
            _context2.next = 5;
            return _user.UserModel.findByEmailAndPassword(req.body.credentials);

          case 5:
            user = _context2.sent;
            token = user.generateJwtToken();
            return _context2.abrupt("return", res.status(200).json({
              token: token,
              status: "success"
            }));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json({
              error: _context2.t0.message
            }));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
/*
Route     /google
Des       Google Signin
Params    none
Access    Public
Method    GET  
*/

Router.get("/google", _passport["default"].authenticate("google", {
  scope: ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"]
}));
/*
Route     /google/callback
Des       Google Signin Callback
Params    none
Access    Public
Method    GET  
*/

Router.get("/google/callback", _passport["default"].authenticate("google", {
  failureRedirect: "/"
}), function (req, res) {
  return res.redirect("http://localhost:3000/google/".concat(req.session.passport.user.token));
});
var _default = Router;
exports["default"] = _default; 