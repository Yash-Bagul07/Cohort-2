<<<<<<< HEAD
var arr = [
  {
    team : 'CSK',
    primary: 'yellow',
    secondary: 'blue',
    captain: 'MSD',
    fullname: 'Chennai Super Kings'
  },
  {
    team : 'RCB',
    primary: 'red',
    secondary: 'black',
    captain: 'Virat',
    fullname: 'Royal Challenge Bangalore'
  },
  {
    team : 'KKR',
    primary: 'purple',
    secondary: 'gold',
    captain: 'Ajju',
    fullname: 'Kolkata Knight Riders'
  },
  {
    team : 'MI',
    primary: 'blue',
    secondary: 'white',
    captain: 'Shana',
    fullname: 'Mumbai Indians'
  },
  {
    team : 'PKBS',
    primary: 'crimson',
    secondary: 'white',
    captain: 'Iyer',
    fullname: 'Punjab Kings'
  },
  {
    team : 'SRH',
    primary: 'orange',
    secondary: 'black',
    captain: 'Cummins',
    fullname: 'Sunrisers Hyderabad'
  },
  {
    team : 'LSG',
    primary: 'cyan',
    secondary: 'darkblue',
    captain: 'Pant',
    fullname: 'Luckhnow SuperGiants'
  }
]

var btn = document.querySelector('#btn')
var main = document.querySelector('main')
var h1 = document.querySelector('#box')
var captain = document.querySelector('#captain')
var teamname = document.querySelector('#teamname')

btn.addEventListener('click',function(){
  var winner = arr[Math.floor(Math.random(arr)*arr.length)];
  h1.innerHTML= winner.team
  h1.style.backgroundColor= winner.primary
  main.style.backgroundColor= winner.secondary
  captain.innerHTML= winner.captain
  teamname.innerHTML= winner.fullname
})
=======
var arr = [
  {
    team : 'CSK',
    primary: 'yellow',
    secondary: 'blue',
    captain: 'MSD',
    fullname: 'Chennai Super Kings'
  },
  {
    team : 'RCB',
    primary: 'red',
    secondary: 'black',
    captain: 'Virat',
    fullname: 'Royal Challenge Bangalore'
  },
  {
    team : 'KKR',
    primary: 'purple',
    secondary: 'gold',
    captain: 'Ajju',
    fullname: 'Kolkata Knight Riders'
  },
  {
    team : 'MI',
    primary: 'blue',
    secondary: 'white',
    captain: 'Shana',
    fullname: 'Mumbai Indians'
  },
  {
    team : 'PKBS',
    primary: 'crimson',
    secondary: 'white',
    captain: 'Iyer',
    fullname: 'Punjab Kings'
  },
  {
    team : 'SRH',
    primary: 'orange',
    secondary: 'black',
    captain: 'Cummins',
    fullname: 'Sunrisers Hyderabad'
  },
  {
    team : 'LSG',
    primary: 'cyan',
    secondary: 'darkblue',
    captain: 'Pant',
    fullname: 'Luckhnow SuperGiants'
  }
]

var btn = document.querySelector('#btn')
var main = document.querySelector('main')
var h1 = document.querySelector('#box')
var captain = document.querySelector('#captain')
var teamname = document.querySelector('#teamname')

btn.addEventListener('click',function(){
  var winner = arr[Math.floor(Math.random(arr)*arr.length)];
  h1.innerHTML= winner.team
  h1.style.backgroundColor= winner.primary
  main.style.backgroundColor= winner.secondary
  captain.innerHTML= winner.captain
  teamname.innerHTML= winner.fullname
})
>>>>>>> cc7569c7b5c336bd52f81629992fbaf102eac69c
