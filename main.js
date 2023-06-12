let btnAttack = document.querySelector(`.attack`);
let btnHeal   = document.querySelector(`.Heal`);
let btnSpecialAttack= document.querySelector(`.specialAttack`);
let btnGiveUp = document.querySelector(`.GiveUp`);


let lifePointPlayeur=document.getElementById(`lifePointPlayeur`).textContent
let lifePointMonster=document.getElementById(`lifePointMonster`).textContent


btnAttack.addEventListener(`click`,attack);
btnHeal.addEventListener(`click`,heal);
btnSpecialAttack.addEventListener(`click`,specialAttack);
btnGiveUp.addEventListener(`click`,leave);

function attack(){
    lifePointPlayeur = Number(lifePointPlayeur);
    lifePointMonster = Number(lifePointMonster);

    if (lifePointPlayeur <=0){
        alert(`vous avez plu de point de vie`);
    }else if(lifePointMonster<=0){
        alert(`vous avez gagnier`)
    }
    else{
        let pointAttanckMonster=randomAttackPoint() 
        let pointAttack =randomAttackPoint();
       calLifeAfterAttack(pointAttanckMonster,pointAttack)
    }
}

function randomAttackPoint(){
    let min =1;
    let max = 9;
    var pointAttack = Math.floor(Math.random() * (min + max) + min);
   return pointAttack
}

function calLifeAfterAttack(attackMonster,attackPlayeur){
    let resultPoint= lifePointPlayeur -attackMonster;
    lifePointPlayeur = resultPoint
    document.getElementById('lifePointPlayeur').textContent = resultPoint;
    console.log(lifePointPlayeur)

    let resultPointMonster=lifePointMonster -attackPlayeur;
    lifePointMonster = resultPointMonster
    document.getElementById('lifePointMonster').textContent = resultPointMonster;
    console.log(lifePointMonster)
}

function heal(){
    if(lifePointPlayeur >=0 && lifePointPlayeur <=99){
        lifePointPlayeur += 10;
        document.getElementById('lifePointPlayeur').textContent = lifePointPlayeur;
    }else{
        lifePointPlayeur = 100;
        document.getElementById('lifePointPlayeur').textContent = lifePointPlayeur;
    }
}

function specialAttack(){
    lifePointPlayeur = Number(lifePointPlayeur);
    lifePointMonster = Number(lifePointMonster);

    if (lifePointPlayeur <=0){
        alert(`vous avez plu de point de vie`);
    }else if(lifePointMonster<=0){
        alert(`vous avez gagnier`)
    }
    else{
        let pointAttanckMonster=randomAttackPoint() 
        let pointSpecailAttack =randomSpecialAttackPoint();
       calLifeAfterAttack(pointAttanckMonster,pointSpecailAttack)
    }
}

function randomSpecialAttackPoint(){
    let min =5;
    let max = 15;
    var pointAttack = Math.floor(Math.random() * (min + max ) + min);
   return pointAttack
}

function leave(){
    alert(`vous avez fuit le combat`)
}
