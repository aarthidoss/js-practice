let //calculatebtn = document.getElementById('calculate'),
  formcalculate= document.getElementById('unitEconomicform'),
  CogsInput = document.getElementById('Cogs'),
  grossMarginInput = document.getElementById('gross-Margin'),
  salesMarketingInput = document.getElementById('sales&marketing'),
  operationsCostInput = document.getElementById('operations-Cost'),
  NetMarginInput = document.getElementById('Net-Margin'),
  sellingPriceInput = document.getElementById('selling-Price'),
  grossMarginvalue,
  NetMarginvalue;

function calculate(e){
    //(if  u want a calculater by model of form default behaviour is next page but we dot require so prevent default behaviour)
  e.preventDefault();
  // 1: calculate gross margin value c=a-b
  sellingPricevalue = sellingPriceInput.value;
  Cogsvalue = CogsInput.value;

  grossMarginvalue = sellingPricevalue - Cogsvalue;
  grossMarginInput.value = grossMarginvalue;
  

  //(this is form element so inner html not used to show the value)

  // 2: calculate net margin value
  salesMarketingvalue = salesMarketingInput.value;
  operationsCostvalue = operationsCostInput.value;

  NetMarginvalue = grossMarginvalue - salesMarketingvalue - operationsCostvalue;
  NetMarginInput.value = NetMarginvalue;
  
}
formcalculate.addEventListener('submit', calculate);

