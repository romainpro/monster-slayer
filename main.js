/////////////////////////////Pointeur =>btn-html//////////////////////////////
let btnAttack = document.querySelector(`.attack`);
let btnHeal = document.querySelector(`.Heal`);
let btnSpecialAttack = document.querySelector(`.specialAttack`);
let btnGiveUp = document.querySelector(`.GiveUp`);
let btnReset = document.querySelector(`.reset`);
/////////////////////////////////////////////////////////////////////////
////////////////////////variable d'elements html/////////////////////////
let lifePointPlayeur = document.getElementById(`lifePointPlayeur`).textContent;
let lifePointMonster = document.getElementById(`lifePointMonster`).textContent;
let divDetail=document.querySelector(`.detail`);
let maxHeal = 100;
/////////////////////////////////////////////////////////////////////////
///////////////////addEventListener/////////////////////////////////////
btnAttack.addEventListener(`click`, attack);
btnHeal.addEventListener(`click`, heal);
btnSpecialAttack.addEventListener(`click`, specialAttack);
btnGiveUp.addEventListener(`click`, leave);
btnReset.addEventListener(`click`, reset);
///////////////////////////////////////////////////////////////////////////
////////////////////////function//////////////////////////////////////////
function attack() {
  lifePointPlayeur = Number(lifePointPlayeur);
  lifePointMonster = Number(lifePointMonster);

  if (lifePointPlayeur <= 0) {
    alert(`vous avez plu de point de vie`);
  } else if (lifePointMonster <= 0) {
    alert(`vous avez gagnier`);
  } else {
    let pointAttanckMonster = randomAttackPoint();
    let pointAttack = randomAttackPoint();
    calLifeAfterAttack(pointAttanckMonster, pointAttack);
  }
}

function randomAttackPoint() {
  let min = 1;
  let max = 9;
  var pointAttack = Math.floor(Math.random() * (min + max) + min);
  return pointAttack;
}

function calLifeAfterAttack(attackMonster, attackPlayeur) {
  let resultPoint = lifePointPlayeur - attackMonster;
  lifePointPlayeur = resultPoint;
  document.getElementById("lifePointPlayeur").textContent = resultPoint;
  updateDisplayHealBarre();
  console.log(lifePointPlayeur);
  displaylisteHit(lifePointPlayeur,attackMonster,lifePointMonster,attackPlayeur)

  let resultPointMonster = lifePointMonster - attackPlayeur;
  lifePointMonster = resultPointMonster;
  document.getElementById("lifePointMonster").textContent = resultPointMonster;
  console.log(lifePointMonster);
  displaylisteHit(lifePointPlayeur,attackMonster,lifePointMonster,attackPlayeur)
}

function heal() {
  if (lifePointPlayeur >= 0 && lifePointPlayeur <= 99) {
    lifePointPlayeur += 10;
    document.getElementById("lifePointPlayeur").textContent = lifePointPlayeur;

    updateDisplayHealBarre();
  } else {
    lifePointPlayeur = 100;
    document.getElementById("lifePointPlayeur").textContent = lifePointPlayeur;
    updateDisplayHealBarre();
  }
}

function specialAttack() {
  lifePointPlayeur = Number(lifePointPlayeur);
  lifePointMonster = Number(lifePointMonster);

  if (lifePointPlayeur <= 0) {
    alert(`vous avez plu de point de vie`);
  } else if (lifePointMonster <= 0) {
    alert(`vous avez gagnier`);
  } else {
    let pointAttanckMonster = randomAttackPoint();
    let pointSpecailAttack = randomSpecialAttackPoint();
    calLifeAfterAttack(pointAttanckMonster, pointSpecailAttack);
  }
}

function randomSpecialAttackPoint() {
  let min = 5;
  let max = 15;
  var pointAttack = Math.floor(Math.random() * (min + max) + min);
  return pointAttack;
}

function leave() {
  alert(`vous avez fuit le combat`);
  reset();
}

function reset() {
  document.getElementById("lifePointPlayeur").textContent = "100";
  document.getElementById("lifePointMonster").textContent = "100";
  lifePointPlayeur = 100;
  lifePointMonster = 100;
  document.getElementById("lifePointPlayeur").style.width = `100%`;
  document.getElementById("lifePointMonster").style.width = `100%`;
  // divDetail.removeChild(listeHit)delete span !!!!!!!!

}

function updateDisplayHealBarre() {
  let healUpdatePlayer = (lifePointPlayeur / maxHeal) * 100;
  document.getElementById("lifePointPlayeur").style.width =
    healUpdatePlayer + "%";

  let healUpdateMonster = (lifePointMonster / maxHeal) * 100;
  document.getElementById("lifePointMonster").style.width =
    healUpdateMonster + "%";
}

// function displaylisteHit(lifePointPlayeur,attackMonster,lifePointMonster,attackPlayeur){
//     let listeHit = document.createElement(`span`);
//     listeHit.classList.add(`playeur`)
//     listeHit.textContent =(`vous avez ${lifePointPlayeur} de point de vie , le monstre vous inflige ${attackMonster}point de degat`);
//     divDetail.appendChild(listeHit)

//     let listeHitMonster =document.createElement(`span`)
//     listeHit.classList.add(`monster`)
//      listeHitMonster.textContent =(`le monster a ${lifePointMonster} de point de vie ,  vous infliger ${attackPlayeur}point de degat au monster`);
//      divDetail.appendChild(listeHitMonster)
// }
