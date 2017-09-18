let express = require("express");
let app =express();
app.use(express.static(`${__dirname}/`));
app.get("/",function(req,res){
	res.sendFile(`${__dirname}/index.html`);
});
app.listen(7777,"172.17.243.163",function(){
	console.log("服务器已经开启！");
})