let plantilla = "";
var d = new Date();
var total = 0
var pac_name = ""

function getPedido() {
            
    fetch('https://backend-ipc1-202010055.herokuapp.com/pedido',{
        method: 'GET',
        })
        .then(res => res.json())
        .catch(err =>{
            console.log("Ha ocurrido un error");
            alert("Ha ocurrido un error")
        })
        .then(response =>{
            console.log(response)
            for(var i in response){
                pac_name = response[i].Paciente
                break;
            }



            plantilla += `<!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8" />
                    <title>A simple, clean, and responsive HTML invoice template</title>
            
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
                            <tr class="top">
                                <td colspan="2">
                                    <table>
                                        <tr>
                                            <td class="title">
                                                <h1 style="font-size: 60px;" >UHospital</h1>
                                            </td>
            
                                            <td>
                                                Creada el: ${d.getDate()}/${parseInt(d.getMonth())+1}/${d.getFullYear()}
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
                                                UHospital, Inc.<br />
                                                13 Av 5-51 Z-2<br />
                                                Ciudad de Guatemala
                                            </td>
            
                                            <td>
                                                Cliente:<br />
                                                ${pac_name}
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
            

                            <tr class="heading">
                                <td>Medicina</td>
                                <td>Precio</td>
                                <td>Cantidad</td>
                                <td>Subtotal</td>
                            </tr>`

                            for (var i in response){ 
                                plantilla +=`
                                <tr class="item">
                                    <td>${response[i].Nombre}</td>
                                    <td>Q${response[i].Precio}</td>
                                    <td>${response[i].Cantidad}</td>
                                    <td>Q${response[i].Cantidad * response[i].Precio}</td>
                                </tr>
                                `
                                total += (response[i].Cantidad * response[i].Precio);
                            }

                            
                        plantilla +=`
            
                            <tr class="otal">
                                <td></td>
            
                                <td>Total: Q${total}</td>
                            </tr>
                        </table>
                    </div>
                </body>
            </html>`
        })
        html2pdf().from(plantilla).save();
}