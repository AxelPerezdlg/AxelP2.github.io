if(navigator.serviceWorker){

    let URLactual = window.location;
    if(URLactual.toString().includes('127.0.0.1')){
        navigator.serviceWorker.register('/sw.js');
    }else{
        navigator.serviceWorker.register('/AxelP2.github.io/sw.js');
    }
}

