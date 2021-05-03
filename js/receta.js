

var plantilla =``


function generarReceta(){
    var fecha = document.querySelector('#fecha').value
    var paciente = document.querySelector('#paciente').value
    var padecimiento = document.querySelector('#padecimiento').value
    var descripcion = document.querySelector('#descripcion').value
    var doctor = localStorage.getItem('logged_user')

    var objeto = {
        'paciente':paciente,
        'fecha': fecha,
        'padecimiento': padecimiento,
        'descripcion': descripcion,
        'doctor': doctor
    }

    fetch('https://backend-ipc1-202010055.herokuapp.com/receta/' + padecimiento  ,{
        method: 'POST',
        body: JSON.stringify(objeto),
        headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',}})
    .then(res => res.json())
    .catch(err =>{
        console.log("Ha ocurrido un error");
        alert("Ha ocurrido un error")
     })
    .then(response =>{
        console.log(response.Mensaje)
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
                    <div class="invoice-box" style="margin-bottom:-30px">
                        <table cellpadding="0" cellspacing="0">
                            <tr class="top">
                                <td colspan="4">
                                    <table>
                                        <tr>
                                            <td class="title">
                                                <h1 style="font-size: 60px;" >UHospital</h1>
                                            </td>
            
                                            <td>
                                                Creada el: ${fecha}
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
            
                            <tr class="information">
                                <td colspan="4">
                                    <table>
                                        <tr>
                                            <td>
                                                UHospital, Inc.<br />
                                                13 Av 5-51 Z-2<br />
                                                Ciudad de Guatemala
                                            </td>
            
                                            <td >

                                                Doctor:<br />
                                                ${response.Doctor}<br />
                                                Paciente:<br />
                                                ${paciente}
                                                
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
    
                        </table>
                    </div>

                                

                                <h1 style="text-align: center;">Receta Medica</h1>
                                <p>&nbsp;</p>
                                
                                <h4 style="text-align: center;">Padecimiento:</h4>
                                <table style="height: 40px; width: 49.1196%; border-collapse: collapse; margin-left: auto; margin-right: auto;" border="1">
                                    <tbody>
                                        <tr>
                                            <td style="width: 100%; font-size: 20px; style="text-align: center;">${padecimiento}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>&nbsp;</p>
                            

                                <h4 style="text-align: center;">Descripcion</h4>
                                    <table style="height: 100px; width: 49.1196%; border-collapse: collapse; margin-left: auto; margin-right: auto;" border="1">
                                        <tbody>
                                        <tr style="height: 18px;">
                                            <td style="width: 100%; height: 18px; font-size: 20px; style="text-align: center;">${descripcion}</td>
                                        </tr>
                                    </tbody>
                                </table>
                </body>

        `
        html2pdf().from(plantilla).save("receta.pdf");
        document.querySelector('#fecha').value = ""
        document.querySelector('#paciente').value = ""
        document.querySelector('#padecimiento').value = ""
        document.querySelector('#descripcion').value = ""
     })


    
}