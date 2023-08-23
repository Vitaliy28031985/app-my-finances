
const db = [
    {
    add: [
    {
    id: '1',
    title: '',
    profit: 0
    },
    
   
],
spends: [
{
    id: '1',
    title: '',
    spend: 0
},

],
total: 0,
totalSpends: 0
}
  ]   

const profitRef = document.querySelector(".profit");
const formRef = document.getElementById("add");
const formSpendRef = document.getElementById("spend");

const spendRef = document.querySelector(".spend");

const balanceRef = document.querySelector(".balance");

const profitListRef = document.querySelector(".profit-list");

const spendListRef = document.querySelector(".spend-list");


formRef.addEventListener("submit", handleSubmitProfit);
formSpendRef.addEventListener("submit", handleSubmitSpends);




const addProfit = (data, index) => {

const dataArr = data.map(item => item);
const addArr = dataArr.map(item => item.add);

for (let i = 0; i < addArr.length; i += 1) {
const summ = addArr[i].reduce((previousValue, number) => {
return previousValue + number.profit;
}, 0);

data[index].total = summ;
} 
  }

  function handleSubmitProfit(e) {
    e.preventDefault();
    profitListRef.innerHTML = '';
    
   const {
     elements: { id, title, profit },
   } = e.currentTarget;
   pushData(db, 0, {id: id.value, title: title.value, profit: Number(profit.value)})
   addProfit(db, 0);
   renderData();
   rederListAdd(db);
   e.currentTarget.reset(); 
}

function handleSubmitSpends(e) {
    e.preventDefault();
   spendListRef.innerHTML = ''; 
   const {
     elements: { id, title, spend },
   } = e.currentTarget;
   pushDataSpends(db, 0, {id: id.value, title: title.value, spend: Number(spend.value)})
   addSpend(db, 0);
   renderData();
   rederListSpend(db);
   e.currentTarget.reset(); 
}

const addSpend = (data, index) => {

    const dataArr = data.map(item => item);
    const addArr = dataArr.map(item => item.spends);
    
    for (let i = 0; i < addArr.length; i += 1) {
    const summ = addArr[i].reduce((previousValue, number) => {
    return previousValue + number.spend;
    }, 0);
    
    data[index].totalSpends = summ;
    } 
}
  addProfit(db, 0)
  addSpend(db, 0)

  const pushDataSpends = (data, index, object) => {
    data[index].spends.push(object);
 } 

 const pushData = (data, index, object) => {
    data[index].add.push(object);
 } 

 const renderData = () => {
    const profit = db.map(item => item).map(item => item.total);
    const totalSpends = db.map(item => item).map(item => item.totalSpends);

    profitRef.textContent = `Разом прихід: ${profit}`
    spendRef.textContent = `Разом витрати: ${totalSpends}`
  
    balanceRef.textContent = `Баланс: ${profit - totalSpends}`;
 }
  
 renderData()

 const rederListAdd = (data) => {

    const dataArr = data.map(item => item);
    const addArr = dataArr.map(item => item.add);
    
    for (let i = 0; i < addArr.length; i += 1) {
    const render = addArr[i].map(({ title, profit}) =>
         `<li>
        <p>${title}:</p>
        <p>${profit}</p>
        </li>`).join("");
        profitListRef.insertAdjacentHTML("afterbegin", render);
    }
    formRef.classList.add("is-clos");
 }

 const rederListSpend = (data) => {

    const dataArr = data.map(item => item);
    const addArr = dataArr.map(item => item.spends);
    
    for (let i = 0; i < addArr.length; i += 1) {
    const render = addArr[i].map(({title, spend}) =>
         `<li>
        <p>${title}:</p>
        <p>${spend}</p>
        </li>`).join("");
        spendListRef.insertAdjacentHTML("afterbegin", render);
    }
    formSpendRef.classList.add("is-clos");
 }

 // modal

 formRef.classList.add("is-clos");
 formSpendRef.classList.add("is-clos");

 const openAddRef = document.querySelector(".open-add");
 openAddRef.addEventListener("click", () => {
   formRef.classList.remove("is-clos");
 });
 const addClosRef = document.querySelector(".add-clos");
 addClosRef.addEventListener("click", () => {
   formRef.classList.add("is-clos");
 })


 const openSpendRef = document.querySelector(".open-spend");
openSpendRef.addEventListener("click", () => {
   formSpendRef.classList.remove("is-clos");
})
const spendClosRef = document.querySelector(".spend-clos");
spendClosRef.addEventListener("click", () => {
   formSpendRef.classList.add("is-clos");
});



 