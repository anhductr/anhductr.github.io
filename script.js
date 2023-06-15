const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let userInput, result = false;
let keyInfo = document.querySelector(".key-info");
let form = document.querySelector(".form");

//nhận input của người dùng
document.querySelector(".submit-btn").addEventListener('click', function() {
    userInput = document.querySelector(".info-input").value;
    result = regex.test(userInput);
    
    if(result) { 
        keyInfo.classList.remove("hide");
        form.classList.add("hide");
        console.log(result);
    } else alert("Email không hợp lệ vui lòng nhập lại.");
})

// các button view more-view less
//kinh nghiệm
document.querySelector(".experience-dropdown-btn").addEventListener('click', function(){
    if(document.querySelector(".experience-portfolio-content").classList.contains("hide")){
        document.querySelector(".experience-portfolio-content").classList.remove("hide"); 
        document.querySelector(".experience-dropdown-btn").innerHTML = '<div class="up-arrow"></div> VIEW LESS';
    }else{
        document.querySelector(".experience-portfolio-content").classList.add("hide");
        document.querySelector(".experience-dropdown-btn").innerHTML = '<div class="dropdown-arrow"></div> VIEW MORE';
    }    
})

//học vấn
document.querySelector(".education-dropdown-btn").addEventListener('click', function(){
    if(document.querySelector(".education-portfolio-content").classList.contains("hide")){
        document.querySelector(".education-portfolio-content").classList.remove("hide"); 
        document.querySelector(".education-dropdown-btn").innerHTML = '<div class="up-arrow"></div> VIEW LESS';
    }else{
        document.querySelector(".education-portfolio-content").classList.add("hide");
        document.querySelector(".education-dropdown-btn").innerHTML = '<div class="dropdown-arrow"></div> VIEW MORE';
    }    
})

//hoạt động
document.querySelector(".activity-dropdown-btn").addEventListener('click', function(){
    if(document.querySelector(".activity-portfolio-content").classList.contains("hide")){
        document.querySelector(".activity-portfolio-content").classList.remove("hide"); 
        document.querySelector(".activity-dropdown-btn").innerHTML = '<div class="up-arrow"></div> VIEW LESS';
    }else{
        document.querySelector(".activity-portfolio-content").classList.add("hide");
        document.querySelector(".activity-dropdown-btn").innerHTML = '<div class="dropdown-arrow"></div> VIEW MORE';
    }    
})

//sở thích
document.querySelector(".hobby-dropdown-btn").addEventListener('click', function(){
    if(document.querySelector(".hobby-portfolio-content").classList.contains("hide")){
        document.querySelector(".hobby-portfolio-content").classList.remove("hide"); 
        document.querySelector(".hobby-dropdown-btn").innerHTML = '<div class="up-arrow"></div> VIEW LESS';
    }else{
        document.querySelector(".hobby-portfolio-content").classList.add("hide");
        document.querySelector(".hobby-dropdown-btn").innerHTML = '<div class="dropdown-arrow"></div> VIEW MORE';
    }    
})

//ngôn ngữ
document.querySelector(".language-dropdown-btn").addEventListener('click', function(){
    if(document.querySelector(".language-portfolio-content").classList.contains("hide")){
        document.querySelector(".language-portfolio-content").classList.remove("hide"); 
        document.querySelector(".language-dropdown-btn").innerHTML = '<div class="up-arrow"></div> VIEW LESS';
    }else{
        document.querySelector(".language-portfolio-content").classList.add("hide");
        document.querySelector(".language-dropdown-btn").innerHTML = '<div class="dropdown-arrow"></div> VIEW MORE';
    }    
})

//kỹ năng
document.querySelector(".skill-dropdown-btn").addEventListener('click', function(){
    if(document.querySelector(".skill-portfolio-content").classList.contains("hide")){
        document.querySelector(".skill-portfolio-content").classList.remove("hide"); 
        document.querySelector(".skill-dropdown-btn").innerHTML = '<div class="up-arrow"></div> VIEW LESS';
    }else{
        document.querySelector(".skill-portfolio-content").classList.add("hide");
        document.querySelector(".skill-dropdown-btn").innerHTML = '<div class="dropdown-arrow"></div> VIEW MORE';
    }    
})