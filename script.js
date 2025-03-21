const bigCup = document.querySelector('.cup')
const remained = document.getElementById('remained')
const litres = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const smallCup = document.querySelectorAll('.cup-small') 


const capacity = 2000;
let currentFilled = 0;


smallCup.forEach((cup) => {
    cup.addEventListener('click', () => {
        console.log(cup);
        
        if (!cup.classList.contains('filled')) {
            currentFilled += 250
            cup.classList.add('filled')
            cup.style.display = 'none'
        }else{
            currentFilled -= 250
            cup.classList.remove('filled')

        }

        updatedBigCup()

    })
});

function updatedBigCup(){

    const remainingLitres = (capacity - currentFilled) / 1000
    litres.textContent = `${remainingLitres.toFixed(1)}L`
    
    const filledChange = (currentFilled / capacity) * 100

    percentage.textContent = `${filledChange.toFixed(0)}%`
    percentage.style.height = `${filledChange}%`

    if (currentFilled >= capacity) {
        remained.style.display = 'none'
    }else{
        remained.style.display = 'flex'
    }


}