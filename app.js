'use strict'
let total=0;
Donation.alDonation=[];

functiont Donation (Name,amount,age){ this.name=Name;
    this.amount=amount;
    this.age=age;
    Donation.alDonation.push(this);
}
   

let form=document.getElementById('form');
form.addEventListener('submit',submition );
function  submition(event){
    event.preventDefault();
let name = Event.target.name.value;
let amount=Event.target.amount.value;
let age= Number(Event.target.age.value);

new Donation (Name,amount,age);
saveTolocalStorage();
// console.log(Donation.alDonation); 
}
function clearAll(){
new Donation (Name,amount,age);
    localStorage.removeItem('Donation')
    
}
function saveTolocalStorage(){ 
    let DonationString=JSON.stringify(Donation.alDonation);
    localStorage.setItem( "Donation",DonationString);
    
}
 function   tHeader(){
     let table=document.getElementById('table');
     let headerTr=document.createElement('tr');
     let th1=document.createElement('th');
     let th2=document.createElement('th');
     let th3=document.createElement('th');
     let th4=document.createElement('th');

table.appendChild(headerTr);
headerTr.appendChild(th1);
headerTr.appendChild(th2);
headerTr.appendChild(th3);
headerTr.appendChild(th4);
th1.textContent='Donator name';
th2.textContent='Donation amount';
th3.textContent='Age';
th4.textContent='clear items';
 }    
 
 tHeader();
  

 function tbody(){
     for (let i = 0; i < Donation.alDonation.length; i++) {
     let row=document.createElement('tr');
     let td1=document.createElement('td');
     let td2=document.createElement('td');
     let td3=document.createElement('td');
     let td4=document.createElement('button');
       
      table.appendChild(row);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(btn);

    td1.textContent= Donation.alDonation[i].Donatorname;
    td2.textContent= Donation.alDonation[i].Donationamount;
    td3.textContent= Donation.alDonation[i].age;
    btn.value='x';
    btn.addEventListener('click',clearitems);
     function removeiteams(i) {
        Donation.alDonation.prototype.splice(i,1);
        saveTolocalStorage();

         
     }
function getFormlocalstorge() {
    let data =JSON.parse(localStorage.getItem('Donaion'));
    if (data!==null){
        for (let i = 0; i < array.length; i++) {

            Donaiondata[i].Donatorname[i],Donationamount[i],age[i]
        }

    }
    tbody();
     
}

