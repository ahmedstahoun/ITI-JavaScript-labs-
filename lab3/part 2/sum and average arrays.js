var numberString = prompt("enter the numbers");
              
              var stringArr = numberString.split(" ");
              
              
              
              var sum=0;

              for (let i=0 ;i<stringArr.length;i++)
              {   
                var numberInt = parseInt(stringArr[i]);
                
                sum= sum + numberInt;
                    
              }

              var Average = sum/stringArr.length;
              
              alert(`The sum of ${stringArr} = ${sum} \n The Average = ${Average} `);