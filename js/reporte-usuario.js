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

                        <style>
                            .invoice-box {
                                max-width: 800px;
                                margin: auto;
                                padding: 30px;
                                border: 1px solid #eee;
                                box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
                                font-size: 16px;
                                line-height: 24px;
                                font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                                color: #555;
                            }

                            .invoice-box table {
                                width: 100%;
                                line-height: inherit;
                                text-align: left;
                            }

                            .invoice-box table td {
                                padding: 5px;
                                vertical-align: top;
                            }

                            .invoice-box table tr td:nth-child(2) {
                                text-align: right;
                            }

                            .invoice-box table tr.top table td {
                                padding-bottom: 20px;
                            }

                            .invoice-box table tr.top table td.title {
                                font-size: 45px;
                                line-height: 45px;
                                color: #333;
                            }

                            .invoice-box table tr.information table td {
                                padding-bottom: 40px;
                            }

                            .invoice-box table tr.heading td {
                                background: #eee;
                                border-bottom: 1px solid #ddd;
                                font-weight: bold;
                            }

                            .invoice-box table tr.details td {
                                padding-bottom: 20px;
                            }

                            .invoice-box table tr.item td {
                                border-bottom: 1px solid #eee;
                            }

                            .invoice-box table tr.item.last td {
                                border-bottom: none;
                            }

                            .invoice-box table tr.total td:nth-child(2) {
                                border-top: 2px solid #eee;
                                font-weight: bold;
                            }

                            @media only screen and (max-width: 600px) {
                                .invoice-box table tr.top table td {
                                    width: 100%;
                                    display: block;
                                    text-align: center;
                                }

                                .invoice-box table tr.information table td {
                                    width: 100%;
                                    display: block;
                                    text-align: center;
                                }
                            }

                            /** RTL **/
                            .invoice-box.rtl {
                                direction: rtl;
                                font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                            }

                            .invoice-box.rtl table {
                                text-align: right;
                            }

                            .invoice-box.rtl table tr td:nth-child(2) {
                                text-align: left;
                            }
                        </style>
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
            
                               /*  html2pdf(plantilla, {
                                    filename:     'myfile.pdf',
                                    image:        { type: 'jpeg', quality: 0.98 },
                                    html2canvas:  { scale: 2, logging: true, dpi: 192, letterRendering: true },
                                    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
                                  }); */

                                  var opt = {
                                    filename:     'myfile.pdf',
                                    image:        { type: 'jpeg', quality: 0.98 },
                                    jsPDF:        {orientation: 'L' }
                                  };

                                html2pdf().set(opt).from(plantilla).save();

                                /*  html2pdf().from(plantilla).save(); */
                    
            })
}
