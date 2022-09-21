self.addEventListener('install', (event) => {
    console.log('SW: Intall');
});

self.addEventListener('fetch', (event) => {




    // const respuesta = fetch(event.request.url).then((resp) =>{
    //     console.log(resp);
    //     if (resp.ok) {
    //         return resp;
    //     } else {
    //         return fetch('images/reyna.jpg')   
    //     }
    // }).catch((err)=>{
    //     console.log('SW error: ', err);
    // });

  
    // event.respondWith(respuesta);




    if (event.request.url.includes('style.css')) {
            console.log(event.request.url);


            const response = new Response(
                `    
                body{
                    color: red;
                    background-color: black;
                }`,
                {
                    headers:{
                        'Content-type':'text/css',
                    },
                }

            );


            event.respondWith(response);
       }else if(event.request.url.includes('reyna.jpg')){
            event.respondWith(fetch('images/neon.jpg'));
       }

});