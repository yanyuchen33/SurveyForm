function calculate() {
    // 获取用户输入的数字
    let numa = document.getElementById('a').value;
    let numb = document.getElementById('b').value;
    let num1 =parseFloat(numa);
    let num2 =parseFloat(numb);

    // 进行加法运算
    let result = num1+num2;
    alert(result);
    // 显示运算结果到页面上
   // document.getElementById('result').textContent=result;
  
    // 在控制台中显示问候信息
    console.log(result);
  }