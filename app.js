fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(data =>{
      function start(){
        document.getElementById('org').innerHTML=`${data.org}`;
        
        document.getElementById('timezone').innerHTML=` ${data.timezone}`;
        
        
        document.getElementById('population').innerHTML=`${data.country_population}`;
        
        
        document.getElementById('capital').innerHTML=` ${data.country_capital}`;
          
          document.getElementById('currency').innerHTML=`${data.currency_name}`;
        
        
        document.getElementById('languages').innerHTML=`${data.languages}`;
        
        
        document.getElementById('code').innerHTML=`${data.country_calling_code}`;
        
        document.getElementById('version').innerHTML=`${data.version}`;
        
        document.getElementById('area').innerHTML=`${data.country_area}`;
        
        
        document.getElementById('latitude').innerHTML=`${data.latitude}`;
        
        
        document.getElementById('longitude').innerHTML=`${data.longitude}`;
        
        
        


      }
      start();
      
    })
    
    .catch(erreur =>console.error(alert("une erreur s'est produit lors de là connexion au serveur veuillez patienter ou contactez roblox new Ai..!⚠️")));