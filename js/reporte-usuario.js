const ruta = 'https://backend-ipc1-202010055.herokuapp.com/Users';
let plantilla = "";
var d = new Date();

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
                            hr.new4 {
                                border: 1px solid rgb(255, 255, 255);
                                width: 50%;
                            }
                        </style>
                    </head>

                    <body>
                        <div class="invoice-box">
                            <table cellpadding="0" cellspacing="0">
                                
                            <tr class="top">
                            <td colspan="2">
                                <table>
                                    <tr>
                                        <td class="title">
                                            <img src="https://iconape.com/wp-content/png_logo_vector/lorem-ipsum-logo.png" style="width: 100%; max-width: 300px" />
                                        </td>
        
                                        <td>
                                            Invoice #: 123<br />
                                            Created: January 1, 2015<br />
                                            Due: February 1, 2015
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
        
                        <tr class="information">
                            <td colspan="2">
                                <table>
                                    <tr>
                                        <td>
                                            Sparksuite, Inc.<br />
                                            12345 Sunny Road<br />
                                            Sunnyville, CA 12345
                                        </td>
        
                                        <td>
                                            Acme Corp.<br />
                                            John Doe<br />
                                            john@example.com
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                                        
                                        <table class="table table-bordered" id="tabla_pacientes" style="width:80%; text-align: center;">
                                            <thead class="table-primary">
                                            <tr >
                                                <th scope="col">No.</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Apellido</th>
                                                <th scope="col">Cumpleaños</th>
                                                <th scope="col">Sexo</th>
                                                <th scope="col">Username</th>

                                            </tr>
                                            </thead>
                                            <tbody class="table table-hover" id="detalles">`
                                            
                                            for(var i in response){
                                                plantilla += `
                                                    <tr class="table-light ">
                                                        <th scope="row">${parseInt(i)+1}</th>
                                                        <td style="text-align: center;">${response[i].Nombre}</td>
                                                        <td style="text-align: center;">${response[i].Apellido}</td>
                                                        <td style="text-align: center;">${response[i].Cumpleaños} </td>
                                                        <td style="text-align: center;">${response[i].Sexo} </td>
                                                        <td style="text-align: center;">${response[i].User_name} </td>

                                                    </tr>
                                                `
                                            }
   
                            plantilla +=`                           
                                            </tbody>
                                        </table>


                                </tr>
                            </table>
                        </div>
                    </body>
                </html>
                                `
            
                         /*       html2pdf(plantilla, {
                                    filename:     'myfile.pdf',
                                    image:        { type: 'jpeg', quality: 0.98 },
                                    html2canvas:  { scale: 2, logging: true, dpi: 192, letterRendering: true },
                                    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
                                  });
 */
                                html2pdf().from(plantilla).save();
                    
            })
}
