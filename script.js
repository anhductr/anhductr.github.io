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
function toggleContent(buttonSelector, contentSelector) {
    const button = document.querySelector(buttonSelector);
    const content = document.querySelector(contentSelector);
    
    button.addEventListener('click', function() {
      if (content.classList.contains('hide')) {
        content.classList.remove('hide');
        this.innerHTML = '<div class="up-arrow"></div> VIEW LESS';
      } else {
        content.classList.add('hide');
        this.innerHTML = '<div class="dropdown-arrow"></div> VIEW MORE';
      }
    });
  }
  
  toggleContent('.experience-dropdown-btn', '.experience-portfolio-content');
  toggleContent('.education-dropdown-btn', '.education-portfolio-content');
  toggleContent('.activity-dropdown-btn', '.activity-portfolio-content');
  toggleContent('.hobby-dropdown-btn', '.hobby-portfolio-content');
  toggleContent('.language-dropdown-btn', '.language-portfolio-content');
  toggleContent('.skill-dropdown-btn', '.skill-portfolio-content');


