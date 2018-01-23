
function noNullOne(){
	var warning1 = document.getElementById("warning1");
	var user = document.getElementById("userName").value;
	if(user == null || user.trim() == ""){
		warning1.innerHTML= "必填！";
		return false;	
	}else{
		warning1.innerHTML= "";
		if(user.length >=6 && user.length <= 20){
				return true ;
		}else{
			warning1.innerHTML= "用户名必须在6到20个字符之间！";
			return false ;
		}
	}
   
}	
	

function noNullTwo(){
	var warning2 = document.getElementById("warning2");
	var pass = document.getElementById("pass").value;
	if(pass == null || pass.trim() == ""){
		warning2.innerHTML= "必填！";
		return false;		
	}else{
		warning2.innerHTML= "";
		if(pass.length >=6 && pass.length <= 20){
				return true ;
		}else{
			warning2.innerHTML= "密码必须在6到20个字符之间！";
			return false ;
		}
		

	}


}

function noNullThree(){
	var pass = document.getElementById("pass").value;
	var warning3 = document.getElementById("warning3");
	var passAgain = document.getElementById("passAgain").value;
	if(passAgain == null || passAgain.trim() == ""){

		warning3.innerHTML= "必填！";
		return false;		
	}else{
		warning3.innerHTML= "";
		if(pass == passAgain){
			return true ;
		}else{
			warning3.innerHTML= "密码和重复密码必须相同！";
			return false ;
		}
		 
		}
	}

	


function noNullFour(){
	var warning4 = document.getElementById("warning4");
	var postbox = document.getElementById("postbox").value;
	if(postbox == null || postbox.trim() == ""){
		warning4.innerHTML= "必填！";
		return false;		
	}else{
		warning4.innerHTML= "";
		return true ;
	}

}

function submitTime(){
		if(noNullOne() &&  noNullTwo() && noNullThree() && noNullFour() ){
			return true;

		}else{

			return false;
		}

    }


function setImagePreview() {    
    var docObj=document.getElementById("doc");    
    var imgObjPreview=document.getElementById("preview");    
    if(docObj.files && docObj.files[0]){    
        //火狐下，直接设img属性    
        imgObjPreview.style.display = 'block';    
        imgObjPreview.style.width = '90px';    
        imgObjPreview.style.height = '120px';                        
        //imgObjPreview.src = docObj.files[0].getAsDataURL();    
            
        //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式      
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);    
    }else{    
        //IE下，使用滤镜    
        docObj.select();    
        var imgSrc = document.selection.createRange().text;    
        var localImagId = document.getElementById("localImag");    
        //必须设置初始大小    
        localImagId.style.width = "90px";    
        localImagId.style.height = "120px";    
        //图片异常的捕捉，防止用户修改后缀来伪造图片    
        try{    
            localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";    
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;    
        }catch(e){    
            alert("您上传的图片格式不正确，请重新选择!");    
            return false;    
        }  
        imgObjPreview.style.display = 'none';  
        document.selection.empty();    
    }    
    return true;    
}    

