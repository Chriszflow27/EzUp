function redireccionar() 
            {
            setTimeout("location.href='cliente.html'", 2000);}

function showAlert() {
    Swal.fire({
        title: 'Estas seguro de enviar Reporte?',
        text: "Recuerda que el booster recibirá un llamado para justificar!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo enviar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Enviado!',
            'Tu reporte fue enviado con exito!',
            'success'
          )
          redireccionar()
        }
      })
}

function redireccionar2() 
            {
            setTimeout("location.href='misservicios.html'", 2000);}

function showAlert2() {
    Swal.fire({
        title: 'Desea confirma el pago?',
        text: "Recuerda que el pago se realizara automaticamente!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo pagar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Realizado!',
            'Tu pago fue realizado con exito!',
            'success'
          )
          redireccionar2()
        }
      })
}