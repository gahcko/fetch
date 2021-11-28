
///////////////////////////number_2////////////////////

const square = document.querySelector('.square');



square.addEventListener('click', function() {
    fetch( 'https://random-data-api.com/api/color/random_color')
    .then(response => response.json())
    .then(result => {
        let color = Object.values(result);
        square.style.background = color[2];
        console.log(result);
    })
})

////////////////////////number1//////////////////////////////

const select = document.querySelector('select');

const card = document.querySelector('.card_user');




fetch( 'https://random-data-api.com/api/users/random_user?size=10')
.then(response => response.json())
.then(result => {
    console.log(result);
    
        for (let i = 0; i < result.length; i++) {
        const element = result[i];
        console.log(element);

            
            let option = document.createElement('option');
            option.innerHTML = `<option>${element.first_name}<option>`;
            select.appendChild(option);


            // select.addEventListener('change', function() {
            //     console.log(select.value);
            //     let name = document.createElement('name')
 
            //     name.innerText = `First name: ${select.value}`;
            //     card.appendChild(name);
                
            // });



            
            


        }

        


})
        







    
        


  
        
    
    

      




  







