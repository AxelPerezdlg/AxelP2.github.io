if(navigator.serviceWorker && 'localhost' != location.protocol){
    navigator.serviceWorker.register('/sw.js');
  
}else{
    navigator.serviceWorker.register('https://axelperezdlg.github.io/AxelP2.github.io/AxelP2.github.io/sw.js');
}