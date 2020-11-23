function activateModal(a){
    const modal = document.querySelector(a)

    if(modal.classList.contains("active_modal")){
        modal.classList.remove("active_modal")
    }else{
    modal.classList.add("active_modal")
    }
}

function test(a, event){
    var name = document.getElementById('name-form').value
    var age = document.getElementById('age-form').value
    var localidad = document.getElementById('localidad-form').value
    var barrio = document.getElementById('barrio-form').value
    var address = document.getElementById('address-form').value
    activateModal(a)
    var nameC = document.getElementById('name_client')
    var ageC = document.getElementById('age_client')
    var localidadC = document.getElementById('upz_client')
    var barrioC = document.getElementById('location_client')
    var addressC = document.getElementById('address_client')
    
    nameC.innerHTML = name;
    ageC.innerHTML = age;
    localidadC.innerHTML = localidad;
    barrioC.innerHTML = barrio;
    addressC.innerHTML = address;
    event.preventDefault()
}

function tendero(a, event){
    var name = document.getElementById('name-form').value
    var phone = document.getElementById('numero-form').value
    var email = document.getElementById('correo-form').value
    var address = document.getElementById('address-form').value
    activateModal(a)
    var nameC = document.getElementById('n-tendero')
    var phoneC = document.getElementById('t-tendero')
    var emailC = document.getElementById('c-tendero')
    var addressC = document.getElementById('d-tendero')
    
    
    nameC.innerHTML = name;
    phoneC.innerHTML = phone;
    emailC.innerHTML = email;
    addressC.innerHTML = address;
    event.preventDefault()
}