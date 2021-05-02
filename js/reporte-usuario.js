const ruta = 'https://backend-ipc1-202010055.herokuapp.com/Users';
let plantilla = "";

function generar_reporte(){
    fetch('https://backend-ipc1-202010055.herokuapp.com/Users',{
        method: 'GET',
        })
        .then(res => res.json())
        .catch(err =>{
        console.log("Ha ocurrido un error");
        alert("Ha ocurrido un error")
        })
        .then(response =>{
            console.log(response)
 
            plantilla = `
                <!DOCTYPE html>
                <html>
                    <head>
                        <meta charset="utf-8" />
                        <title>A simple, clean, and responsive HTML invoice template</title>
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

                    </head>

                    <body>
                        <div class="invoice-box">
                            <table cellpadding="0" cellspacing="0">
                                

                                <section class="blog spad">
                                    
                                    <div style="margin-right: 90px; margin-left: 90px;">
                                        
                                        <table class="table table-bordered" id="tabla_pacientes">
                                            <thead class="table-primary">
                                            <tr >
                                                <th scope="col">No.</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Apellido</th>
                                                <th scope="col">Cumpleaños</th>
                                                <th scope="col">Sexo</th>
                                                <th scope="col">Username</th>
                                                <th scope="col">Contraseña</th>
                                                <th scope="col">Telefono</th>
                                            </tr>
                                            </thead>
                                            <tbody class="table table-hover" id="detalles">`
                                            
                                            for(var i in response){
                                                plantilla += `
                                                    <tr class="table-light ">
                                                        <th scope="row">${parseInt(i)+1}</th>
                                                        <td>${response[i].Nombre}</td>
                                                        <td>${response[i].Apellido}</td>
                                                        <td>${response[i].Cumpleaños} </td>
                                                        <td>${response[i].Sexo} </td>
                                                        <td>${response[i].User_name} </td>
                                                        <td>${response[i].User_pass} </td>
                                                        <td>${response[i].Telefono} </td>
                                                    </tr>
                                                `
                                            }
   
                            plantilla +=`                           
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                </tr>
                            </table>
                        </div>
                    </body>
                </html>
                                `
            
                                html2pdf(plantilla, {
                                    filename:     'myfile.pdf',
                                    image:        { type: 'jpeg', quality: 0.98 },
                                  });
                    
            })
}
