


function SetupHtml()
{


      //
  const root = document.getElementById('root');
  
  var CalculateFiled = document.createElement('div');
  CalculateFiled.innerHTML = 
  `


    <h1 style="display: inline;">身高 </h1> 
    <input id = 'height' ></input>
    
    <h1 style="display: inline;">體重 </h1> 
    <input id = 'weight' ></input>

    <p style="margin-bottom: 25px;"></p>

    <button id = 'CalculateBtn' style="width: 150px; height: 50px; font-size : 30px" > 計算 </button>

    <p style="margin-bottom: 25px;"></p>

    <h1 style="display: inline;">結果 : </h1>
    <p style="display: inline;" id = 'result'></p>

  `
  root.appendChild(CalculateFiled);


  document.getElementById('CalculateBtn').addEventListener('click' , function()
  {
    Calculate();
  });



}

function Calculate()
{
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);


    const result = weight / Math.pow((height/100) , 2);

    document.getElementById('result').textContent = result;

}

SetupHtml();