const container = document.getElementById('container')

const restio = async()=>{
    try {
        const response = await fetch('https://api.adviceslip.com/advice')
        
        if(response.status === 200){
            const data = await response.json()
            console.log(data.slip.advice)

            let advices = ''
            advices += `
            <div class="card-advice">
                <p class='id'>Advice #${data.slip.id}</p>
                <h3 class="titulo">"${data.slip.advice}"</h3>
                <div>
                <img src='./images/icon-dice.svg'>
                </div>
            </div>
            `;
            document.getElementById('container').innerHTML = advices;

        }else if(response.status === 401){
            console.log('ocurrio un erro en la key api')
        }else if (response.status === 400){
            console.log('error not found')
        }

    } catch (error) {
        console.log('ocurrio un err')
    }
}


restio()