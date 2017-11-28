var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var User = require('../models/users.js');

/* GET home page. */
// 首页
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Micro Blog' });
});

// 主页
router.get("/u/:user",(req,res,next)=>{
});

// 发表消息
router.post("post",(req,res,next)=>{
});

// 注册
router.get("/reg",(req,res,next)=>{
	res.render("reg",{title:"用户注册"})
});
router.post("/reg",(req,res,next)=>{
	//检验两次输入的密码是否一致
	if(req.body['password-repeat'] != req.body['password']){
		// req.flash('error','两次输入的密码不一样！');
		return res.redirect('/reg');
	}
	let md5 = crypto.createHash('md5');
	let password = md5.update(req.body.password).digest('base64');
	let newUser = new User({
		name: req.body.username,
		password:password
	});
	// 检查用户是否已经存在
  // User.get(newUser.name,function(err,user){
  // 	if(user){
  // 		console.log(111);
  // 		err = "username is alreay exists"
  // 	}
  // 	if(err){
  // 		console.log(222);
  // 		// req.flash("error",err);
  // 		return res.redirect("/reg");
  // 	}

  	// 不存在新增用户
    newUser.save(function(err){
    	if(err){
    		// req.flash("error", err);
    		return res.redirect("/reg");
    	}
    	// req.session.user = newUser;
    	// req.flash('sucess','注册成功');
    	res.redirect("/");
    })
console.log(3);
  // })

});

// 登录
router.get("/login",(req,res,next)=>{
});
router.post("/login",(req,res,next)=>{
});

// tuichu
router.get("/loginout",(req,res,next)=>{
});

module.exports = router;
