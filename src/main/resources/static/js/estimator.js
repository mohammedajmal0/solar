// Main-Estimator page
let mainForm = document.querySelector('.main-form');
// console.log(mainForm);
let mainFormResult = document.querySelector('.main-form-result');

mainForm.addEventListener('submit',function(event){
  event.preventDefault();

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
  if (plantSize_unitConsumption >= 2 && plantSize_unitConsumption <= 5) {
    pricePerKw = 75000;
  } else if (plantSize_unitConsumption >= 5 && plantSize_unitConsumption <= 10) {
    pricePerKw = 65000;
  } else if (plantSize_unitConsumption >= 10 && plantSize_unitConsumption <= 50) {
    pricePerKw = 60000;
  } else if (plantSize_unitConsumption >= 50 && plantSize_unitConsumption <= 100) {
    pricePerKw = 55000;
  }
  totalPrice = pricePerKw * plantCapacity;
  savings = totalRevenueGeneratedPerMonth-averageMonthlyBill;
    //var kwRandomNumber = Math.floor(Math.random()*25+1);
    // var savingsRandomNumber = Math.floor(Math.random()*2500+1);
    // var sqftRandomNumber = Math.floor(Math.random()*2500+1);
    // var unitsRandomNumber = Math.floor(Math.random()*2500+1);
    // var projectPrice = Math.floor(Math.random()*100000+1);
    var overallPrice = Math.floor(Math.random()*10000+1);
    var emiPrice = Math.floor(Math.random()*10000+1);
    var interestedSavedAmount = Math.floor(Math.random()*200000+1);

    document.getElementById('kW-value').innerHTML = Math.ceil(plantCapacity).toString();
    document.getElementById('money-saved').innerHTML = Math.ceil(savings).toString();
    document.getElementById('roof-area-required').innerHTML = Math.ceil(plantCapacity*100).toString();
    document.getElementById('solar-units').innerHTML = Math.ceil(unitsGeneratedPerMonth).toString();
    document.getElementById('project-price').innerHTML = '₹ '+ totalPrice.toString();
    document.getElementById('overall-price').innerHTML = '₹ '+ overallPrice;
    document.getElementById('emi-price').innerHTML = '₹ '+ emiPrice;
    document.getElementById('interested-amount-saved').innerHTML = '₹ '+ interestedSavedAmount;

  mainFormResult.style.display = 'block';
})
