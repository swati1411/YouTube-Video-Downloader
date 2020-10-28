var express =require('express'),
    cors    =require('cors'),
    ytdl= require('ytdl-core'),
    bodyParser=require("body-parser");
    app=express();


    app.set("view engine","ejs");
    app.use(express.static(__dirname+"/public"));
    app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
    res.render("landing");
});

app.post("/download",function(req,res){
var a=req.body.url;
res.header("Content-Disposition", 'attachment; filename="Video.mp4"');    
    ytdl(a, {format: 'mp4'}).pipe(res);
});

var port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number,()=>{
    console.log("server started");
});