var input = document.getElementById('inp');
var b = document.getElementById('btn');
var city = document.getElementById('city');
var temp = document.getElementById('temp');
var desc = document.getElementById('desc');
var icon = document.getElementById('icon');

navigator.geolocation
const successss = (position) => {
  const{latitude,longitude}= position.coords;
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=ba2dcfb4c6a3429190566b8f5c2a53ca`)
  .then(response => response.json())
  .then(data=>{
    let x=data["results"][0]["components"]["city"]
    loca=x;
    function locati(){
      fetch('https://api.openweathermap.org/data/2.5/weather?q='+loca+'&appid=4d09cd0e0c359927e26a1df8e5a0de90').then((res)=>{
        return res.json();
      }).then((data)=>{
        if(data["cod"]!="404"){
          city.innerHTML=data["name"]  
          let t=data["main"]["temp"]-273.15;
          temp.innerHTML="Temperature : "+t.toFixed(2)+"°C";
          let d=data["weather"][0]["description"]
          desc.innerHTML="Description : "+d;
          icon.innerHTML=`<img src="${"http://openweathermap.org/img/wn/"+data["weather"][0]["icon"]+".png"}" id="icon" />`
          input.value=""
          
          if(data["weather"][0]["main"]=="Clouds"){
            document.body.style.backgroundImage = "url('images/clouds.jpg')"
          }
          if(data["weather"][0]["main"]=="Haze"){
            document.body.style.backgroundImage = "url('images/haze.jpg')"
          }
          if(data["weather"][0]["main"]=="Clear"){
            document.body.style.backgroundImage = "url('images/clear.jpg')"
          }
          if(data["weather"][0]["main"]=="Rain"){
            document.body.style.backgroundImage = "url('images/rain.jpg')"
          }
          if(data["weather"][0]["main"]=="Smoke"){
            document.body.style.backgroundImage = "url('images/smoke.jpg')"
          }
          if(data["weather"][0]["main"]=="Mist"){
            document.body.style.backgroundImage = "url('images/fog.jpg')"
          }
          if(data["weather"][0]["main"]=="Fog"){
            document.body.style.backgroundImage = "url('images/fog.jpg')"
          }
        }
      })
    }
    locati()
  });
};
navigator.geolocation.getCurrentPosition(successss , vanish)

function vanish(){
  let box = document.getElementById("box");
  box.style.display="none"
  document.body.style.backgroundImage = "url('images/haze.jpg')"
}

function getdata(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=4d09cd0e0c359927e26a1df8e5a0de90').then((res)=>{
    return res.json();
  }).then((data)=>{
    if(data["cod"]!="404" && input.value!=""){
      if(box.style.display=="none"){
        box.style.display="flex"
      }
      city.innerHTML=data["name"]  
      let t=data["main"]["temp"]-273.15;
      temp.innerHTML="Temperature : "+t.toFixed(2)+"°C";
      let d=data["weather"][0]["description"]
      desc.innerHTML="Description : "+d;
      icon.innerHTML=`<img src="${"http://openweathermap.org/img/wn/"+data["weather"][0]["icon"]+".png"}" id="icon" />`
      input.value=""
      
      if(data["weather"][0]["main"]=="Clouds"){
        document.body.style.backgroundImage = "url('images/clouds.jpg')"
        let t=document.getElementById("box")
        t.style.color = 'white'
      }
      if(data["weather"][0]["main"]=="Haze"){
        document.body.style.backgroundImage = "url('images/haze.jpg')"
        let t=document.getElementById("box")
        t.style.color = 'black'
      }
      if(data["weather"][0]["main"]=="Clear"){
        document.body.style.backgroundImage = "url('images/clear.jpg')"
        let t=document.getElementById("box")
        t.style.color = 'black'
      }
      if(data["weather"][0]["main"]=="Rain"){
        document.body.style.backgroundImage = "url('images/rain.jpg')"
        let t=document.getElementById("box")
        t.style.color = 'white'
      }
      if(data["weather"][0]["main"]=="Smoke"){
        document.body.style.backgroundImage = "url('images/smoke.jpg')"
        let t=document.getElementById("box")
        t.style.color = 'white'
      }
      if(data["weather"][0]["main"]=="Mist"){
        document.body.style.backgroundImage = "url('images/fog.jpg')"
        let t=document.getElementById("box")
        t.style.color = 'black'
      }
      if(data["weather"][0]["main"]=="Fog"){
        document.body.style.backgroundImage = "url('images/fog.jpg')"
        let t=document.getElementById("box")
        t.style.color = 'black'
      }
      
    }
    else
    alert("This city only exists in your imagination!!")
  })
}

let loader=document.getElementById("preloader");
function hide(){
  loader.style.display="none";
}
setInterval(hide, 700);
