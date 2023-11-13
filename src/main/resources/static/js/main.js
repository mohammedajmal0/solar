
// function quickResult(){
//   console.log("hello");
// }

// play video in quick estimator
let playButton = document.querySelector('#play-button');
let quick_video = document.querySelector('#estimator-video');

playButton.addEventListener('click', function(){
    // hiding overlay and play button
    document.querySelector('#video-overlay').style.display = 'none';
    // document.querySelector('.estimator-video-container').classList.add('popUp-video');   //pop up if required

    if(quick_video.paused){
        quick_video.play();
    }
    else{
        quick_video.pause();
    }
})


// quick form submit

  let quickForm = document.querySelector('.quick-form');
  let quickFormResult = document.querySelector('.quick-form-result');

  quickForm.addEventListener('submit', function (event) {
    event.preventDefault();

    //getting all the selected values
    console.log(window.responseTariff);
    let tariff = window.responseTariff;
    let averageMonthlyBill = document.getElementById('Average-monthly-bill').value;
    let roofArea = document.getElementById("roof-area").value;
    let selectedType = document.getElementById("electricity-connection-type").value;
    let unitConsumption = averageMonthlyBill / tariff;
    let plantSize_unitConsumption = unitConsumption / 120;
    let plantSize_area = roofArea / 100;
    let plantCapacity = Math.min(plantSize_unitConsumption, plantSize_area);
    let unitsGeneratedPerDay = plantCapacity * 4;
    let unitsGeneratedPerMonth = unitsGeneratedPerDay * 30;
    let totalRevenueGeneratedPerMonth = unitsGeneratedPerMonth * 9;
    let totalPrice = 0;
    let savings = 0;
    let pricePerKw = 0;
    if (plantSize_unitConsumption >= 3 && plantSize_unitConsumption <= 5) {
      pricePerKw = 75000;
    } else if (plantSize_unitConsumption >= 5 && plantSize_unitConsumption <= 10) {
      pricePerKw = 65000;
    } else if (plantSize_unitConsumption >= 10 && plantSize_unitConsumption <= 50) {
      pricePerKw = 60000;
    } else if (plantSize_unitConsumption >= 50 && plantSize_unitConsumption <= 100) {
      pricePerKw = 55000;
    }
    // if (plantCapacity <= 5) {
    //   totalPrice = pricePerKw * plantCapacity;
    // } else {
    //   savings = totalRevenueGeneratedPerMonth-averageMonthlyBill;
    // }
    savings = totalRevenueGeneratedPerMonth-averageMonthlyBill;


    // retreive all the data and calculate and then display
    // var kwRandomNumber = Math.floor(Math.random() * 25 + 1);
    // var savingsRandomNumber = Math.floor(Math.random() * 2500 + 1);
    // var sqftRandomNumber = Math.floor(Math.random() * 2500 + 1);
    // var unitsRandomNumber = Math.floor(Math.random() * 2500 + 1);
    console.log(document.getElementById('kW-value').innerHTML);
    document.getElementById('kW-value').innerHTML = Math.ceil(plantCapacity).toString();
    document.getElementById('money-saved').innerHTML = Math.ceil(savings).toString();
    document.getElementById('roof-area1').innerHTML = Math.ceil(plantCapacity*100).toString();
    document.getElementById('solar-units').innerHTML = Math.ceil(unitsGeneratedPerMonth).toString();

    quickFormResult.style.display = 'flex';
  })



// stats number increasing
gsap.registerPlugin(ScrollTrigger);

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const target = +counter.getAttribute("data-target");
  const increment = target / 400;

  gsap.to(counter, {
    innerText: target,
    duration: 1.5,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: counter,
      start: "top 80%",
      end: "top 20%",
      onEnter: () => {
        const updateCounter = () => {
          const c = +counter.innerText;
          if (c < target) {
            counter.innerText = Math.min(Math.ceil(c + increment), target);
            requestAnimationFrame(updateCounter);
          }
        };
        requestAnimationFrame(updateCounter);
      },
    },
  });
});


// feature hover animation
const featureBox = document.querySelectorAll('.feature-box');
featureBox.forEach(function(box){
  box.addEventListener('mouseover',function(){
    this.lastElementChild.style.animation = 'slideOpacity linear 0.4s forwards'
    // this.lastElementChild.style.display = 'block';
  })
})
featureBox.forEach(function(box){
  box.addEventListener('mouseout',function(){
    this.lastElementChild.style.animation = 'none';
  })
})

function populate(){
  var selectId=document.getElementById("electricity-provider");
  selectId.innerHTML="";
  if(postOfficeState==="Karnataka"){
    var optionArray=["|","Hubli electricity Supply Company Ltd | Hubli electricity Supply Company Ltd","Mangalore electricity Supply Company Ltd|Mangalore electricity Supply Company Ltd","Bangalore electricity Supply Company Ltd|Bangalore electricity Supply Company Ltd","Gulbarga Electricity Supply Company Ltd|Gulbarga Electricity Supply Company Ltd","Chamundeshwari Electricity Supply Company Limited|Chamundeshwari Electricity Supply Company Limited"]
  }
  else if(postOfficeState==="Andhra Pradesh"){
    var optionArray=["|","Central Power Distribution Company of A.P. Ltd|Central Power Distribution Company of A.P. Ltd","Eastern Power Distribution Company of A.P. Ltd.|Eastern Power Distribution Company of A.P. Ltd.","Northern Power Distribution Company of A.P. Ltd.|Northern Power Distribution Company of A.P. Ltd."];
  }
  else if(postOfficeState==="Bihar"){
    var optionArray=["|","Bihar State Electricity Board|Bihar State Electricity Board"];
  }
  else if(postOfficeState==="Delhi"){
    var optionArray=["|","BSES Rajdhani Power Ltd.|BSES Rajdhani Power Ltd.","BSES Yamuna Power Ltd.|BSES Yamuna Power Ltd.","New Delhi Municipal Council|New Delhi Municipal Council","North Delhi Power Ltd.|North Delhi Power Ltd."];
  }
  else if(postOfficeState==="Haryana"){
    var optionArray=["|","Dakshin Haryana Bijli Vitran Nigam|Dakshin Haryana Bijli Vitran Nigam","Uttar Haryana Bijli Vitran Nigam Ltd.|Uttar Haryana Bijli Vitran Nigam Ltd."];
  }
  else if(postOfficeState==="Jharkhand"){
    var optionArray=["|","Damodar Valley Corporation|Damodar Valley Corporation","Jamshedpur Utility and Services Company|Jamshedpur Utility and Services Company","Jharkhand State Electricity Board|Jharkhand State Electricity Board","Bokaro Power Supply Co Pvt. Ltd.|Bokaro Power Supply Co Pvt. Ltd."];

  }
  else if(postOfficeState==="Kerala"){
    var optionArray=["|","Kerala State Electricity Board|Kerala State Electricity Board"];
  }
  else if(postOfficeState==="Madhya Pradesh"){
    var optionArray=["|","Madhya Pradesh Paschim Kshetra Vidyut Vitran Co. Ltd.|Madhya Pradesh Paschim Kshetra Vidyut Vitran Co. Ltd.","M.P. Poorv Kshetra Vidyut Vitran Co.|M.P. Poorv Kshetra Vidyut Vitran Co.","M.P.Madhya Kshetra Vidyut Vitran Co.|M.P.Madhya Kshetra Vidyut Vitran Co."];
  }
  else if(postOfficeState==="Meghalaya"){
    var optionArray=["|","Meghalaya State Electricity Board|Meghalaya State Electricity Board"];
  }
  else if(postOfficeState==="Punjab"){
    var optionArray=["|","Punjab State Electricity Board|Punjab State Electricity Board"];
  }
  else if(postOfficeState==="Rajasthan"){
    var optionArray=["|","Ajmer Vidyut Vitran Nigam Ltd.|Ajmer Vidyut Vitran Nigam Ltd.","Jaipur Vidyut Vitran Nigam Ltd.|Jaipur Vidyut Vitran Nigam Ltd.","Jodhpur Vidyut Vitran Nigam Ltd.|Jodhpur Vidyut Vitran Nigam Ltd."];
  }
  else if(postOfficeState==="Tripura"){
    var optionArray=["|","Tripura State Electricity Corporation Ltd|Tripura State Electricity Corporation Ltd"];
  }
  else if(postOfficeState==="Uttar Pradesh"){
    var optionArray=["|","Dakshinanchal Vidyut Vitran Nigam Ltd.|Dakshinanchal Vidyut Vitran Nigam Ltd.","Kanpur Electric Supply Co. Ltd.|Kanpur Electric Supply Co. Ltd.","Madhyanchal Vidyut Vitran Nigam Ltd.|Madhyanchal Vidyut Vitran Nigam Ltd.","Noida Power Company Ltd.|Noida Power Company Ltd.","Paschimanchal Vidyut Vitran Nigam Ltd|Paschimanchal Vidyut Vitran Nigam Ltd","Purvanchal Vidyut Vitran Nigam Ltd.|Purvanchal Vidyut Vitran Nigam Ltd.","Uttar Pradesh Power Corporation Ltd.|Uttar Pradesh Power Corporation Ltd."];
  }
  else if(postOfficeState==="Manipur"){
    var optionArray=["|" ,"Electricity Department, Manipur|Electricity Department, Manipur"]
  }
  else if(postOfficeState==="Maharashtra"){
    var optionArray=["|","Best Undertaking Maharashtra State Electricity Distribution Co. Ltd|Best Undertaking Maharashtra State Electricity Distribution Co. Ltd","Reliance Energy Ltd.|Reliance Energy Ltd.","Tata Power Ltd.|Tata Power Ltd."]
  }
  else if(postOfficeState==="Odisha"){
    var optionArray=["|","Central Electricity Supply Company of Orissa Ltd.|Central Electricity Supply Company of Orissa Ltd.","North Eastern Electricity Supply Company of Orissa Ltd.|North Eastern Electricity Supply Company of Orissa Ltd.","Southern Electricity Supply Company of Orissa Ltd.|Southern Electricity Supply Company of Orissa Ltd.","Western Electricity Supply Company of Orissa Ltd.|Western Electricity Supply Company of Orissa Ltd."]
  }
  else if(postOfficeState==="Tamil Nadu"){
    var optionArray=["|","Tamil Nadu Electricity Board|Tamil Nadu Electricity Board"]
  }
  else if(postOfficeState==="Uttarakhand"){
    var optionArray=["|"," Power Corporation Ltd| Power Corporation Ltd"]
  }
  else if(postOfficeState==="West Bengal"){
    var optionArray=["|","Calcutta Electricity Supply Company Ltd.|Calcutta Electricity Supply Company Ltd."," Damodar Valley Corporation DPSC Ltd.|Damodar Valley CorporationDPSC Ltd.  ","West Bengal State Electricity Distribution Company Ltd.|West Bengal State Electricity Distribution Company Ltd."]
  }
  else if(postOfficeState==="Assam"){
    var optionArray=["|","Central Assam Electricity Distribution Company Ltd.|Central Assam Electricity Distribution Company Ltd.","Lower Assam Electricity Distribution Company Ltd.|Lower Assam Electricity Distribution Company Ltd.","Upper Assam Electricity Distribution Company Ltd.|Upper Assam Electricity Distribution Company Ltd."]
  }
  else if(postOfficeState==="Chattisgarh"){
    var optionArray=["|","Chhattisgarh State Power Distribution Company Ltd.|Chhattisgarh State Power Distribution Company Ltd."]
  }
  else if(postOfficeState==="Gujarat"){
    var optionArray=["|","Dakshin Gujarat Vij Company Ltd.|Dakshin Gujarat Vij Company Ltd.","Madhya Gujarat Vij Company Ltd.|Madhya Gujarat Vij Company Ltd.","Paschim Gujarat Vij Company Ltd.|Paschim Gujarat Vij Company Ltd.","Torrent Power Ltd.|Torrent Power Ltd.","Uttar Gujarat Vij Company Ltd.|Uttar Gujarat Vij Company Ltd."]
  }
  else if(postOfficeState==="Himachal Pradesh"){
    var optionArray=["|","Himachal Pradesh State Electricity Board|Himachal Pradesh State Electricity Board"]
  }
  else{
    var optionArray=["|"];
  }

  for(var option in optionArray){
    var pair=optionArray[option].split("|");
    var newOption=document.createElement("option");
    newOption.value=pair[0];
    newOption.innerHTML=pair[1];
    selectId.options.add(newOption);
  }
}



