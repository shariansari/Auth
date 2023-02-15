

$(document).ready(function () {
  
  $(".basicinfo").hide();
  $(".Register").show();
  $(".drlogin").hide();
  $(".otpForLogin").hide();
  $(".Login").hide();
  $(".userDetails").hide();
  Boards();
  $(".otpcheck").hide();

  function Boards (Def ="10th Class") {
    // console.log(Def,"hhh");



  async function test() {
    const response = await fetch(` https://api.markschamp.com/studentbasic/getCourseVideosDemo?classes=${Def}`);
    const jason = await response.json();
    return jason;

  }
  test().then((res) => {
    // console.log(res, "vvv")
    const vedioDataCard = res;
    localStorage.setItem("demovedios", JSON.stringify(vedioDataCard));
    VedioClass10();

  });
}


function Boards9 (Def ="9th Class") {
    // console.log(Def,"hhh");



  async function test() {
    const response = await fetch(` https://api.markschamp.com/studentbasic/getCourseVideosDemo?classes=${Def}`);
    const jason = await response.json();
    return jason;

  }
  test().then((res) => {
    // console.log(res, "vvv")
    const vedioDataCard = res;
    localStorage.setItem("demovedios9", JSON.stringify(vedioDataCard));
    VedioClass9();

  });
}


 $(".class_9th").click(function(){
       $(".Responsives").html("");

   Boards9();

 
    $(".responsive").hide();
    $(".Responsives").show();


    

  
 
 })




});



function openNav() {
  document.getElementById("mySidepanel").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}




async function VedioClass10() {
  const vedioCCCard = await JSON.parse(localStorage.getItem("demovedios"));

  await vedioCCCard.forEach((element, i) => {

    const responsive = document.querySelector(".responsive");


    const card = document.createElement("div");
    card.classList = "card";
    const vedioCard = `<img class="card-img-top" src="/images/videoBackground.jpg" alt="Card image cap">
        <div class="card-body">
          <div class="rcfloat">
            <img src="/images/videoIcon.png" alt="" >
          </div>
          <div class="containerRecord">
            <h3 class="cardTit">${element.classes}</h3>
            <p class="cardPara">${element.tutorName}</p>
          </div>
          <div class="card-title">${element.subject}</div>
         <div class="vedioTime" style="display: flex;">
          <div class="vedioLeft">
            <div class="vedioTxt">${element.topicName}</div>
            <div class="vTmie">${element.videosLink}</div>
          </div>
          <div class="vedioRight">
          <a href="#" class="btn btn-primary watch" data-toggle="modal" data-target="${'#exampleModal' + element.id}" onclick="openModal('${element.demolinksvideos}','${element.id}','${element.topicName}')">Watch </a></div>
        </div>
        </div>`;

    card.innerHTML += vedioCard;
    responsive.appendChild(card);
  });

  $('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
  $(".class_10th").click(function () {
    $('.Responsives').hide();
    $(".responsive").show()
    
    
    $(".class_10th").css({
      "background": "#297cba",
      "color": "#fff",
      "font-weight": "600",
      "border": "none",
      "border-radius": "4px",
      "margin-right": "10px",
      "margin-right": " 10px",
      "padding": "12px 35px",

      "cursor": "pointer",

    });
    $(".class_9th").css({
      "border": " 1px solid #297CBA",
      " margin-right": "10px",
      "padding": " 12px 35px",
      "color": "black",
      "cursor": "pointer",
      "background": "white",

    });
  });
   $(".class_9th").click(function () {
    

  
   


    $(".class_9th").css({

      "color": "#fff",
      "font-weight": " 600",
      "border": "none",
      "border-radius": "4px",
      "margin-right": "10px",
      "margin-right": "10px",
      "padding": "12px 35px",
      "background-color": "#297bca",

      " cursor": "pointer",
    });
    $(".class_10th").css({
      "border": " 1px solid #297CBA",
      " margin-right": "10px",
      "padding": " 12px 35px",
      "color": "black",
      "cursor": "pointer",
      "background-color": "white",

    });
  });


}


///class9th



async function VedioClass9() {
    const vedioCCCard = await JSON.parse(localStorage.getItem("demovedios9"));
  
    await vedioCCCard.forEach((element, i) => {
  
      const responsive = document.querySelector(".Responsives");
  
  
      const card = document.createElement("div");
      card.classList = "card";
      const vedioCard = `<img class="card-img-top" src="/images/videoBackground.jpg" alt="Card image cap">
          <div class="card-body">
            <div class="rcfloat">
              <img src="/images/videoIcon.png" alt="" >
            </div>
            <div class="containerRecord">
              <h3 class="cardTit">${element.classes}</h3>
              <p class="cardPara">${element.tutorName}</p>
            </div>
            <div class="card-title">${element.subject}</div>
           <div class="vedioTime" style="display: flex;">
            <div class="vedioLeft">
              <div class="vedioTxt">${element.topicName}</div>
              <div class="vTmie">${element.videosLink}</div>
            </div>
            <div class="vedioRight">
            <a href="#" class="btn btn-primary watch" data-toggle="modal" data-target="${'#exampleModal' + element.id}" onclick="openModal('${element.demolinksvideos}','${element.id}','${element.topicName}')">Watch </a></div>
          </div>
          </div>`;
  
      card.innerHTML += vedioCard;
      responsive.appendChild(card);
    });
  
    $('.Responsives').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
  
      ]
    });
    $(".class_10th").click(function () {
      $(".Responsives").hide();
      // $(".responsive").show();
      // alert("hello iam");
      
      $(".class_10th").css({
        "background": "#297cba",
        "color": "#fff",
        "font-weight": "600",
        "border": "none",
        "border-radius": "4px",
        "margin-right": "10px",
        "margin-right": " 10px",
        "padding": "12px 35px",
  
        "cursor": "pointer",
  
      });
      $(".class_9th").css({
        "border": " 1px solid #297CBA",
        " margin-right": "10px",
        "padding": " 12px 35px",
        "color": "black",
        "cursor": "pointer",
        "background": "white",
  
      });
    });
     $(".class_9th").click(function () {
      
    
     
  
  
      $(".class_9th").css({
  
        "color": "#fff",
        "font-weight": " 600",
        "border": "none",
        "border-radius": "4px",
        "margin-right": "10px",
        "margin-right": "10px",
        "padding": "12px 35px",
        "background-color": "#297bca",
  
        " cursor": "pointer",
      });
      $(".class_10th").css({
        "border": " 1px solid #297CBA",
        " margin-right": "10px",
        "padding": " 12px 35px",
        "color": "black",
        "cursor": "pointer",
        "background-color": "white",
  
      });
    });
  
  
  }
  
///class9th
let watchs = document.querySelectorAll(".watch");
Array.from(watchs).forEach((item) => {
  item.addEventListener("click", (e) => {


    // openModal();


  });
});


function openModal(src, id, topic) {

  const modAl = document.querySelector(".modAl");
//   console.log(modAl, "div");
  const modalBOdy = document.createElement("div");
  modalBOdy.classList = "modalBOdy";
  // console.log("src", src);
  let link = src;
  // console.log("Links", link);
  const modaldiv = `<div class="modal fade" id="${'exampleModal' + id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content modC">
      <div class="modal-header">
        <div>${topic}</div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <iframe class="ifrm" src="${link}" frameBorder="0" allow="autoplay; allowFullScreen; picture-in-picture" allowFullScreen title="Introduction and Vertically Opposite Angles.m4v" style="width:29rem;height:280px"></iframe>
      </div>
      
    </div>
  </div>
</div>`;
  modalBOdy.innerHTML += modaldiv;
  modAl.appendChild(modalBOdy);
}




const StudentStories = [
  {
    name: "Ajay",
    comment: "MarksChamp has good teachers and supportive management .it creates an virtual Classroom Environment. It is a great platform for online classes.",
    pic: "/images//student5.jpg",
    height: "65px",
    width: "65px",

  },
  {
    name: "Sana",
    comment: "Online classes at MarksChamp helped me gain confidence in the subjects I was afraid of. I would suggest my juniors to try MarksChamp at least once.",
    pic: "/images/student6.jpg",
    height: "70px",
    width: "65px",

  },
  {
    name: "Ashish",
    comment: "It has been a very pleasing experience to study at MarksChamp. Weekly tests and assignments push me to work harder and maintain consistency.",
    pic: "/images//student1.png",
    height: "50px",
    width: "50px",

  },
  {
    name: "Himesh",
    comment: "Have been enjoying learning with the best teachers. Especially, the physics teacher is outstanding and explains every concept with great zeal. Thanks a lot MarksChamp!",
    pic: "/images//student2.png",
    height: "50px",
    width: "50px",

  },
  {
    name: "Areeba",
    comment: "Top class teaching and extremely well crafted study material. I really appreciate MarksChamp for bringing such amazing teachers to us. Thanks a lot!",
    pic: "/images/student3.jpg",
    height: "50px",
    width: "50px",

  },
];

StudentStories.forEach((item, i) => {


  const slickstudent = document.querySelector(".slickstudent")
  // console.log(slickstudent,"slikstudent")
  const card = document.createElement("div");
  card.classList = "card";
  const student_Card = `


<div class="card-body studentCard">
<div class="studentupper">${item.comment}</div>
<div class="studentlower">
  <div class="ingContainer">
    <div class="studentimg">
     <img src="${item.pic}" alt="" style="height:${item.height};width:"${item.width}">
    </div>
    <div class="studentname">${item.name}</div>

  </div>
  <div class="studentbtn">Student</div>


</div>


`;
  card.innerHTML += student_Card;
  slickstudent.appendChild(card);
});


$('.slickstudent').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});


$(".SelectRound").click(function () {
  const data = $(this).innerHTML;
  // console.log(data, "dsdsd")

})
let SlectedClass ="12th Class Science";
let Coursebtns = document.querySelectorAll(".classSelect");
// console.log(Coursebtns,"bbbbbbb");

Array.from(Coursebtns).forEach((butoon,index) => {
  butoon.addEventListener('click', (e) => {
    // butoon.classList.toggle("docolor");
    localStorage.setItem("Indices",index);
    // console.log(localStorage.getItem("Indices")) 
    if(localStorage.getItem("Indices") == index){
      // alert();
      let SlectedClass = e.target.innerHTML;

localStorage.setItem("SlelectedClass", SlectedClass);
      $(".classSelect").removeClass("docolor");
$(butoon).addClass("docolor"); 
    }
  
  
 
  



  })
});
//medium
let MediumBtns =document.querySelectorAll(".Medium");
Array.from(MediumBtns).forEach((medium,index)=>{
  medium.addEventListener("click",(e)=>{
    localStorage.setItem("Indices",index);
    if(localStorage.getItem("Indices") == index){
      // alert();
    

      $(".Medium").removeClass("docolor");
$(medium).addClass("docolor"); 
    }
  
  })

})
//medium
let CouRse = document.querySelectorAll(".listLinks");
// console.log(CouRse,"ff");
Array.from(CouRse).forEach((course) => {
  course.addEventListener("click", (e) => {
    let SelectedCourse = e.target.innerHTML;
    localStorage.setItem("SlelectedCourse", SelectedCourse)
  })
})


$("#DemoCall").click(function(){

  
let CallName =$("#CallName").val();
let CallPhone =$("#callPhone").val();
let CallClasses =$("#callClass").val();

const param =new URLSearchParams()
param.append("studentsName",`${CallName}`);
param.append("phoneNo",`${CallPhone}`);
param.append("classes",`${CallClasses}`);

if(CallName==="" && CallPhone==="" ){
$("#Callname").html("Fields Can't be empty *")
$("#Callphone").html("Fields Can't be empty *")
setTimeout(() => {
$("#Callname").html("");
$("#Callphone").html("");

 }, 2500);
}
else if (CallPhone.length!=10){
$("#Callphone").html("Invalid Phoneno *");
setTimeout(() => {
$("#Callname").html("");
$("#Callphone").html("");

 }, 2500);

}
else{
axios.post("https://api.markschamp.com//studentbasic/bookFreeDemo",param)
.then(function(response){
// console.log(response);
if(response.data.message=='Successfully Saved.'){
  // console.log("susscessfuly signup");
  $("#DemoShort").html("We will call you shortly...");
  setTimeout(() => {
$("#DemoShort").html("");
$("#CallName").val("");
$("#callPhone").val("");


 }, 2500);


  

}
})

}


})


///buycourse modal
//login & register 

$(".register").click(function(){
  Otpvla=""
$(".Login").hide();
$(".Register").show();
})
$(".login").click(function(){
  $(".otpcheck").show();
$(".Login").show();
$(".Register").hide();
})


const inputs=document.querySelectorAll(".setOTP")
// console.log(inputs)
inputs.forEach((input,index1)=>{
  input.addEventListener("keyup",(e)=>{
    const currentInput =input,
    nextInput =input.nextElementSibling;
    previousInput=input.previousElementSibling;
    if(currentInput.value.length>1){
      currentInput.value="";
      return;
    }
   
    if(nextInput && nextInput.hasAttribute("disabled") && currentInput.vlaue !=0){
      nextInput.removeAttribute("disabled");
      nextInput.focus()

    }
    if(e.key==="Backspace"){
      inputs.forEach((input,index2)=>{
        if(index1 <= index2 && previousInput){
          input.setAttribute("disabled",true)
          currentInput.value="";
          previousInput.focus();
        }
      })
    }

  })
})
$("#signup").click(function(){
  Phoneno=$("#EnterPhoneno").val();


// $("#signup").click(function(){
// Name =$("#EnterName").val();
// Email=$("#EnterEmail").val();
// Password=$("#EnterPassword").val();
Phoneno=$("#EnterPhoneno").val();



// localStorage.setItem("StudentName",`${Name}`)


const param =new URLSearchParams()
// param.append("studentsName",`${Name}`);
// param.append("studentsEmail",`${Email}`);
param.append("phone",`${Phoneno}`);
// param.append("password",`${Password}`);
// console.log(Phoneno[0])
// if(Phoneno[0]!=9){
//   console.log("error")
// }
// else{
//   console.log("is9")
// }

if(Phoneno===""){
    $("#PhonenoError").html("Fields Can't be empty *")
     setTimeout(() => {
 $("#PhonenoError").html("")
    }, 2500);


}
if(Phoneno.length!=10){
  $("#PhonenoError").html("Invalid Fields *")
  setTimeout(() => {
$("#PhonenoError").html("")
 }, 2500);

}
if(Phoneno[0]==1 || Phoneno[0]==2 || Phoneno[0]==3 || Phoneno[0]==4 ||Phoneno[0]==5 ||Phoneno[0]==0){
  $("#PhonenoError").html("Invalid Fields *")
  setTimeout(() => {
$("#PhonenoError").html("")
 }, 2500);
}

else{

  axios.post('https://api.gharpeshiksha.com/OnlineCourseStudentLogin/accountVerification',param)
  .then(function(response){
     if(response){
       localStorage.setItem("phoneno",Phoneno)
    
      
      const isProfileCompleted =response.data.ProfileCompleted;
      const isUserExists=response.data.UserExists


      const param =new URLSearchParams()
      param.append("phone",`${Phoneno}`);

     axios.post('https://api.gharpeshiksha.com/OnlineCourseStudentLogin/sendotp',param)
    .then(function(response){
      console.log(response,"second")
if(response.data.Status=="Success"){


      
   
   
      if(response){
        const SessionId=response.data.SessionId;
       $("#verify").click(function(){


        const otpval =`${document.getElementsByClassName("setOTP")[0].value}${document.getElementsByClassName("setOTP")[1].value}${document.getElementsByClassName("setOTP")[2].value}${document.getElementsByClassName("setOTP")[3].value}${document.getElementsByClassName("setOTP")[4].value}${document.getElementsByClassName("setOTP")[5].value}`

        const param=new URLSearchParams()
        param.append("otp_phone",`${Phoneno}`);
        param.append("sessionId",`${SessionId}`);
        param.append("otp",`${otpval}`)
        console.log(otpval,"otpis")
        axios.post("https://api.gharpeshiksha.com/OnlineCourseStudentLogin/verifyotp",param)
        .then(function(response){
          console.log(response.data.result)
          if(response.data.result="Matched"){
             console.log({
              isProfileCompleted,
              isUserExists,
             })

            if(isProfileCompleted==null ||isProfileCompleted=="userdetails"){
              
               $(".Login").hide();
              $(".userDetails").show();
              $(".drlogin").hide();
              $(".otpcheck").hide();

            }
            if(isProfileCompleted=="true" && isUserExists=="true"){
            
              $(".Login").hide();
              $(".drlogin").show();
              $(".otpcheck").hide();


            }
            if(isProfileCompleted=="basicinfo"){
              $(".basicinfo").show();

            }
           
            
          }
        })

      })
      }
    
  }
    })
    
      $(".Login").show();
      $(".otpcheck").show();
      $(".Register").hide();


     }
    

  })

}
})

//userdetails
$("#userverify").click(function(){
  userPhone=localStorage.getItem("phoneno")
  userName =$("#userName").val();
  userEmail=$("#userEmail").val();
  userpassword=$("#userpassword").val();
  passwordCnfrm=$("#passwordCnfrm").val();
   
  
  if(userName == "" && userEmail === "" && userpassword === "" &&  passwordCnfrm === ""){
    $("#NameError").html("Fields Can't be empty *")
    $("#EmailError").html("Fields Can't be empty *")
    $("#PassawordError").html("Fields Can't be empty *")
   $("#ConfrmError").html("Fields Can't be empty *")
    setTimeout(() => {
 $("#NameError").html("")
 $("#EmailError").html("")
$("#PassawordError").html("")
$("#ConfrmError").html("")
    }, 2500);

  }
 if(userName===""){
    $("#NameError").html(" Fields Can't be empty *")
    setTimeout(() => {
    $("#NameError").html("")
    $("#EmailError").html("")
    $("#PassawordError").html("")
    $("#ConfrmError").html("")
        }, 2500);
    }
 if(userEmail===""){
      $("#EmailError").html("Fields Can't be empty *")
      setTimeout(() => {
      $("#NameError").html("")
      $("#EmailError").html("")
      $("#PassawordError").html("")
      $("#ConfrmError").html("")
          }, 2500);
      }
   if(userpassword===""){
        $("#PassawordError").html("Fields Can't be empty *")
        setTimeout(() => {
        $("#NameError").html("")
        $("#EmailError").html("")
        $("#PassawordError").html("")
        $("#ConfrmError").html("")
            }, 2500);
        }
     if(passwordCnfrm===""){
          $("#ConfrmError").html("Fields Can't be empty *")
          setTimeout(() => {
          $("#NameError").html("")
          $("#EmailError").html("")
          $("#PassawordError").html("")
          $("#ConfrmError").html("")
              }, 2500);
          }
           else if(!userEmail.includes("@")){
            $("#EmailError").html("Email must have @ *")
            setTimeout(() => {
            $("#NameError").html("")
            $("#EmailError").html("")
            $("#PassawordError").html("")
            $("#ConfrmError").html("")
                }, 2500);
            
            }
         
            else  if(userpassword.length<6){
         $("#PassawordError").html("Password Should not be less than 6 *")
      setTimeout(() => {
      $("#NameError").html("")
      $("#EmailError").html("")
      $("#PassawordError").html("")
      $("#ConfrmError").html("")
       }, 2500);
}
        else  if(userpassword.length>12){
       $("#PassawordError").html("Password Should not be greater than 12 *")
      setTimeout(() => {
      $("#NameError").html("")
    $("#EmailError").html("")
     $("#PassawordError").html("")
    $("#ConfrmError").html("")
    }, 2500);
}
else if(userpassword !=passwordCnfrm){
              
  $("#ConfrmError").html("Passwrd not matches *")
  setTimeout(() => {
  $("#NameError").html("")
  $("#EmailError").html("")
  $("#PassawordError").html("")
  $("#ConfrmError").html("")
      }, 2500);

}
else{
  const param=new URLSearchParams()
  
  param.append("phone",`${userPhone}`);
  param.append("email",`${userEmail}`);
  param.append("name",`${userName}`)
  param.append("setPassword",`${userpassword}`)
  
  axios.post("https://api.gharpeshiksha.com/OnlineCourseStudentLogin/studentSignUp",param)
  .then(function(response){
    console.log(response.data)
  
  })
}
})
//userdetails
//basicinfo
axios.get("https://api.gharpeshiksha.com/OnlineCourseStudentLogin/getBoards")
.then(function(response){
  const BoardsToSelect =response.data.boards
  BoardsToSelect.forEach((item)=>{
    const boardSelected =document.querySelector("#BasicBoard");
    const options =document.createElement("option");
    const optionval =`${item}`
    options.innerHTML += optionval;
    boardSelected.appendChild(options);

  })


})

$("#Basicverify").click(function(){
  userPhone=localStorage.getItem("phoneno")
  BasicSchoolName =$("#BasicSchoolName").val();
  BasicLocation=$("#BasicLocation").val();
  BasicClass=$("#BasicClass").val();
  BasicBoard=$("#BasicBoard").val();
  console.log({
    BasicSchoolName,
    BasicLocation,
    BasicClass,
    BasicBoard,
  })
  if(BasicSchoolName == "" || BasicLocation === ""){
    $("#SchoolNameError").html("Fields Can't be empty *")
   
    setTimeout(() => {
 $("#SchoolNameError").html("")

    }, 2500);

  }
  else{
    const param=new URLSearchParams()
    param.append("phone",`${userPhone}`);
    param.append("course",`${BasicClass}`);
    param.append("school",`${BasicSchoolName}`)
    param.append("location",`${BasicLocation}`)
    param.append("board",`${BasicBoard}`)
    axios.post("https://api.gharpeshiksha.com/OnlineCourseStudentLogin/studentInfo",param)
    .then(function(response){
      console.log(response.data.Message)
      if(response.data.Message=="successfully registered"){
        alert("registerd Successfully")
      }
    
    })
  }
})
//basicinfo
//direltlogin
userPhone=localStorage.getItem("phoneno")
  $("#DirectPhoneno").val(`${userPhone}`)
$(".doLogin").click(function(){

 
 
  DirectPhone =$("#DirectPhoneno").val();
  DirectPassword=$("#DirectPassword").val();

  const param=new URLSearchParams()
  param.append("phone",`${DirectPhone}`);
  param.append("password",`${DirectPassword}`);
  axios.post("https://api.gharpeshiksha.com/OnlineCourseStudentLogin/studentLogin",param)
  .then(function(response){
    if(response.data.Message=="Login successfull"){
      alert("login susscessfully")
    }
    if(response.data.Message=="Incorrect user or password"){
      $("#Loginerror").html("Phone and Passaword not matches *")
         
    setTimeout(() => {
      $("#Loginerror").html("")
     
         }, 2500);
     
    }
   
  
  })
 
})
$(".OptAtsignin").click(function(){
  $(".drlogin").hide();
  $(".otpForLogin").show();
  $(".otpcheck").show();
  const param =new URLSearchParams()

  param.append("phone",`${userPhone}`);
  axios.post('https://api.gharpeshiksha.com/OnlineCourseStudentLogin/sendotp',param)
  .then(function(response){
      
    if(response){
      const SessionId=response.data.SessionId;
     $("#DosLogin").click(function(){


      const otpval =`${document.getElementsByClassName("setOTP")[6].value}${document.getElementsByClassName("setOTP")[7].value}${document.getElementsByClassName("setOTP")[8].value}${document.getElementsByClassName("setOTP")[9].value}${document.getElementsByClassName("setOTP")[10].value}${document.getElementsByClassName("setOTP")[11].value}`
console.log(otpval,"fsdf")
      const param=new URLSearchParams()
      param.append("otp_phone",`${userPhone}`);
      param.append("sessionId",`${SessionId}`);
      param.append("otp",`${otpval}`)
      console.log(otpval,"otpis")
      axios.post("https://api.gharpeshiksha.com/OnlineCourseStudentLogin/verifyotp",param)
      .then(function(response){
        console.log(response.data.result)
        if(response.data.result="Matched"){
         
alert("login susccessfully")
          // if(isProfileCompleted=="undefined" ||isProfileCompleted=="userdetails"){
          //   console.log("hogya")

          //   $(".userDetails").show();
          //   $(".drlogin").hide();
          // }
          // if(isProfileCompleted=="true" && isUserExists=="true"){
          
          //   $(".Login").hide();
          //   $(".drlogin").show();
          //   $(".otpcheck").hide();


          // }
          // if(isProfileCompleted=="basicinfo"){
          //   $(".basicinfo").show();

          // }
         
          
        }
      })

    })
    }
     
  })




})
//direltlogin

// if(Name === "" && Email ==="" && Phoneno ==="" && Password ===""){
// $("#NameError").html("Fields Can't be empty *")
// $("#EmailError").html("Fields Can't be empty *")
// $("#PasswordError").html("Fields Can't be empty *")
// $("#PhonenoError").html("Fields Can't be empty *")
      
// setTimeout(() => {
// $("#NameError").html("")
// $("#EmailError").html("")
// $("#PasswordError").html("")
// $("#PhonenoError").html("")
//     }, 2500);

// }
// else if(Phoneno.length!=10){
// $("#PhonenoError").html("Please Enter Valid no *")
// setTimeout(() => {
// $(".NameError").html("")
// $(".EmailError").html("")
// $(".PasswordError").html("")
// $(".PhonenoError").html("")
//     }, 2500);
// }
// else if(Name ===""){
// $("#NameError").html("Fields Can't be empty *")
// setTimeout(() => {
// $("#NameError").html("")
// $("#EmailError").html("")
// $("#PasswordError").html("")
// $("#PhonenoError").html("")
//     }, 2500);
// }
// else if(Email ===""){
// $("#EmailError").html("Fields Can't be empty *")
// setTimeout(() => {
// $("#NameError").html("")
// $("#EmailError").html("")
// $("#PasswordError").html("")
// $("#PhonenoError").html("")
//     }, 2500);
// }
// else if(!Email.includes("@")){
// $("#EmailError").html("Email must have @ *")
// setTimeout(() => {
// $("#NameError").html("")
// $("#EmailError").html("")
// $("#PasswordError").html("")
// $("#PhonenoError").html("")
//     }, 2500);

// }
// else if(Phoneno ===""){
// $("#PhonenoError").html("Fields Can't be empty *")
// setTimeout(() => {
// $("#NameError").html("")
// $("#EmailError").html("")
// $("#PasswordError").html("")
// $("#PhonenoError").html("")
//     }, 2500);
// }
// else if(Password ===""){
// $("#PasswordError").html("Fields Can't be empty *")
// setTimeout(() => {
// $("#NameError").html("")
// $("#EmailError").html("")
// $("#PasswordError").html("")
// $("#PhonenoError").html("")
//     }, 2500);
// }
// else if(Password.length<6){
// $("#PasswordError").html("Password Should not be less than 6 *")
// setTimeout(() => {
// $("#NameError").html("")
// $("#EmailError").html("")
// $("#PasswordError").html("")
// $("#PhonenoError").html("")
//     }, 2500);
// }
// else if(Password.length>12){
// $("#PasswordError").html("Password Should not be greater than 12 *")
// setTimeout(() => {
// $("#NameError").html("")
// $("#EmailError").html("")
// $("#PasswordError").html("")
// $("#PhonenoError").html("")
//     }, 2500);



// }
// else{
// axios.post('https://api.markschamp.com//studentbasic/signup',param)
// .then(function (response) {
// // console.log(response);
// // console.log(response.data.message);
// if(response.data.message=='Successfully Saved.'){
//   localStorage.setItem("LoggedIn",true);
//   // console.log("susscessfuly signup")
//   $(".hideit").css("display","none");
  
//   $(".hideit").removeClass("show");
//   location.reload();
// $(".ShowAvtar").show();
// $(".sigbtn").hide();
// $(".Logout").hide();
// $("#Dolog ").click(function(){
// localStorage.setItem("LoggedIn",false);
// $(".ShowAvtar").hide();
// $(".sigbtn").show();
// })


  
//   // window.location.href = `${location.origin}/Payment.html?id=${getId}`;
// }


// })

// }

// })
$("#login").click(function(){



let CnfrmPhone =$("#ConfirmPhoneno").val();
let CnfrmPassword =$("#ConfirmPassword").val();

const param =new URLSearchParams()
param.append("phoneNoOrEmailid",`${CnfrmPhone}`);
param.append("password",`${CnfrmPassword}`);




if( CnfrmPhone ==="" && CnfrmPassword ===""){
$("#phone").html("Fields Can't be empty *")
$("#Password").html("Fields Can't be empty *")

     
setTimeout(() => {
$("#phone").html("")
$("#Password").html("")
}, 2500);




}
else{
axios.post(' https://api.markschamp.com//studentbasic/loginPage',param)
.then(function (response) {
//  console.log(response);
//  console.log(response.data);
if(response.data["message:"]=="Successfull Login"){
localStorage.setItem("LoggedIn",true);
$(".hideit").css("display","none");
$(".hideit").removeClass("show");
location.reload();
$(".ShowAvtar").show();
$(".sigbtn").hide();
$(".Logout").hide();
$("#Dolog ").click(function(){
localStorage.setItem("LoggedIn",false);
$(".ShowAvtar").hide();
$(".sigbtn").show();
})


}

else{
 $("#phone").html("Phone no and Password doesn't matches *")
$("#Password").html("Phone no and Password doesn't matches *")
setTimeout(() => {
$("#phone").html("")
$("#Password").html("")
}, 2500);
}

})

}


})
let  logged =localStorage.getItem("LoggedIn");
// console.log(logged);
if (logged =="true"){
//  console.log("yes");


$(".ShowAvtar").show();
$(".sigbtn").hide();
$("#avtarsh").click(function(){
$(".Logout").toggle();

$("#Dolog ").click(function(){
localStorage.setItem("LoggedIn",false);
$(".ShowAvtar").hide();
$(".sigbtn").show();
})
})

}
else{
$(".ShowAvtar").hide();
$(".sigbtn").show();
}
///long
const LongData =[
{
    course:"IIT JEE Full Year Course",
    classes:"For Classes 11th,12th",
    src:"/images/lgcourse.png",
    link:"JEEmains.html",
    modal:""
},
{
    course:"NEET Full Year Course",
    classes:"For Classes 11th,12th",
    src:"/images/lgcourse1.png",
    link:"NEET.html",
    modal:"",
},
{
    course:"All Boards Full Year Course",
    classes:"For Classes 9th to 12th",
    src:"/images/lgcourse2.png",
    link:"#",
    modal:"modal",
}
]
LongData.forEach((long,id)=>{


const LongCard =document.querySelector(".LongCourseCard");
// console.log(LongCard,"long");
const LongC =document.createElement("div");
LongC.classList="LongC";

const LongCArd =`
<div class="card termcard"  style="width:28vw">
<img class="card-img-top" src=${long.src} alt="Card image cap">
<div class="card-body">
<h5 class="card-title"><h4 style="text-align:center;color:black;font-size:22px;font-weight:600" class ="Longcou">${long.course}</h4></h5>
<p class="card-text" style="text-align:center;color:grey">${long.classes}</p>
<div style="display:flex;align-items:center;justify-content:space-between" class="doColumn">
<button class="btn dd" style="width:auto"data-toggle="modal"data-target="#DemoBook">BOOK A DEMO</button>
<a href=${long.link} data-toggle="${long.modal}"data-target="#CoursesExample" style="text-decoration:none"> <button class="btn dd" style="width:auto">VIEW COURSE</button></a>
</div>
</div>
</div>

`
LongC.innerHTML +=LongCArd;
LongCard.appendChild(LongC);
});

//RECOMENDED CLASS
const RecLongData =[
{
    course:"IIT JEE Full Year Course",
    classes:"For Classes 11th,12th",
    src:"/images/lgcourse.png",
    link:"JEEmains.html",
    modal:""
},
{
    course:"NEET Full Year Course",
    classes:"For Classes 11th,12th",
    src:"/images/lgcourse1.png",
    link:"NEET.html",
    modal:"",
},
{
    course:"All Boards Full Year Course",
    classes:"For Classes 9th to 12th",
    src:"/images/lgcourse2.png",
    link:"#",
    modal:"modal",
}
]
RecLongData.forEach((long,id)=>{


const RecCard =document.querySelector(".RecCourseCard");
// console.log(RecCard,"long");
const RecLongC =document.createElement("div");
RecLongC.classList="RecLongC";

const RecCArd =`
<div class="card termcard"  style="width:28vw">
<img class="card-img-top" src=${long.src} alt="Card image cap">
<div class="card-body">
<h5 class="card-title"><h4 style="text-align:center;color:black;font-size:22px;font-weight:600" class ="Longcou">${long.course}</h4></h5>
<p class="card-text" style="text-align:center;color:grey">${long.classes}</p>
<div style="display:flex;align-items:center;justify-content:space-between" class="doColumn">
<button class="btn dd" style="width:auto"data-toggle="modal"data-target="#DemoBook">BOOK A DEMO</button>
<a href=${long.link} data-toggle="${long.modal}"data-target="#CoursesExample" style="text-decoration:none"> <button class="btn dd" style="width:auto">VIEW COURSE</button></a>
</div>
</div>
</div>

`
RecLongC.innerHTML +=RecCArd;
RecCard.appendChild(RecLongC);
});

//////boardslikemodal
///12classccourse card
function BoardsByCard (BoardData) {



// console.log(CourseClassas12Commerce,"shariq");
const doclass12 =document.querySelector(".doclass12");
// console.log(doclass12,"12class");
const DetailPageCards =document.createElement("div");
DetailPageCards.classList ="DetailPageCards";
const CoURse =localStorage.getItem("SlelectedCourse")


BoardData.forEach((elm)=>{
elm.addEventListener



const detailCourseData =`
<div class="PageUpper" >
  <div class="DetailLeft">
      <div class="courseDetailLeftUpper">
          <div class="Detailbtn">
            <a href="CourseDetail.html?id=${elm.id}" style ="text-decoration:none"><button class="btn dd vc">View Course Details</button></a> 
          </div>
      </div>
      <div class="courseDetailLeftUpper">
          <div class="Detailbtn">
              <button class="btn dd vc"><span class ="DemoBook" data-toggle="modal" data-target="#DemoBook">Book Free Demo<span/></button>
          </div>
      </div>
  </div>
  <div class="DetailRight">
      <div class="courseName">${elm.courseTitle} ${CoURse}</div>
      <div class="CouseDate">
          <div class="dateTarget">
              <div class="DateIcon">
                  <img style="width:25px" src="/images/Target.png" alt="">
              </div>
              <div class="DateText">One year Batch 2023-24</div>
          </div>
          <div class="TargetCr">
             <div class="dateTarget"> <div class="DateIcon">
              <img style="width:25px" src="/images/ClassesPerMonth.png" alt="">
          </div>
          <div class="DateText">16 Classes/month</div></div>
          </div>
      </div>
      <div class="features">
          <div class="featur"><strong>Features</strong></div>
          <div class="roundFeatures">
              <div class="cardshape">150+ Classes</div>
              <div class="cardshape">Progress Application</div>
              <div class="cardshape">200+ Question bank</div>
              <div class="cardshape">Many more+</div>
          </div>
      </div>
      <div>
          <div class="Teachinglang">
           <div class="techingtick"><i class="bi bi-check-circle-fill" style="color: blue;"></i></div>
           <div class="Teach"><strong>Teaching Language</strong></div>
          </div>
          <div class="teachCont"><div style="padding-left: 27px;color: grey;">English,Hindi,Hinglish</div>
          </div>
      </div>
  </div>
</div>

`

DetailPageCards.innerHTML +=detailCourseData;
doclass12.appendChild(DetailPageCards);

})
}
$(".sub").click(function(){

let Name = $("#exampleFormControlInput1").val()
let Phoneno =$("#exampleFormControlInput2").val();
let ClassesBook =$("#exampleFormControlSelect1").val();

if(Name === "" ||Phoneno ===""){
$(".NameTAr").html("Fields Can't be empty *")
$(".NumberTAr").html("Fields Can't be empty *")
      
setTimeout(() => {
$(".NameTAr").html("")
$(".NumberTAr").html("")
    }, 2500);

}
if(Phoneno.length!=10){
$(".NumberTAr").html("Please Enter Valid no *")
setTimeout(() => {
$(".NameTAr").html("")
$(".NumberTAr").html("")
    }, 2500);
}


const param =new URLSearchParams()
param.append("studentsName",`${Name}`);
param.append("phoneNo",`${Phoneno}`);
param.append("classes",`${ClassesBook}`);


axios.post('https://api.markschamp.com//studentbasic/bookFreeDemo',param)
.then(function (response) {
// console.log(response);
// alert("we will call you Shortly....")
$(".SubmittedSus").html("We will call you shortly....");
setTimeout(() => {
$("#exampleFormControlInput1").val("");
$("#exampleFormControlInput2").val("");
$(".SubmittedSus").html("");
    }, 2500);
})
.catch(function (error) {
// console.log(error);
});

})

