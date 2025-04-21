import"./modulepreload-polyfill-B5Qt9EMX.js";function i(){const t=document.getElementById("root");var e=document.createElement("div");e.innerHTML=`


    <h1 style="display: inline;">身高 </h1> 
    <input id = 'height' ></input>
    
    <h1 style="display: inline;">體重 </h1> 
    <input id = 'weight' ></input>

    <p style="margin-bottom: 25px;"></p>

    <button id = 'CalculateBtn' style="width: 150px; height: 50px; font-size : 30px" > 計算 </button>

    <p style="margin-bottom: 25px;"></p>

    <h1 style="display: inline;">結果 : </h1>
    <p style="display: inline;" id = 'result'></p>

  `,t.appendChild(e),document.getElementById("CalculateBtn").addEventListener("click",function(){l()})}function l(){const t=parseFloat(document.getElementById("height").value),n=parseFloat(document.getElementById("weight").value)/Math.pow(t/100,2);document.getElementById("result").textContent=n}i();
