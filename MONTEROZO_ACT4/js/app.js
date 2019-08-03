document.getElementById("get-trivia").onclick = btnCLICK;
function btnCLICK() {
     
      const FIRSTAPI = 'http://numbersapi.com/random/year?json';
      var num;
      $.ajax({
            method: 'GET',
            url: FIRSTAPI,
            complete: function(data){
                var response = data.responseJSON;
                num = response.number;       
                console.log(num);

            }
        }) .then(function(parameter){
              console.log(parameter);
              const SECONDAPI = 'http://numbersapi.com/'+num+'/year';
               $.ajax({
               method: 'GET',
               url: SECONDAPI,
               
                }) .then(function(parameters){
                    console.log(parameters);            
            
                })           
        })


}

