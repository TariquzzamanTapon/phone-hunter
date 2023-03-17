const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.data);

    // function deacalare here
    displayPhones(data.data);
}






const displayPhones = (phones) => {
    // console.log(phones);

    const phoneContainer = document.getElementById('card-container');
    phoneContainer.innerText = '';


    // no phone found 
    const noFound = document.getElementById('text-not-found');
    if (phones.length == 0) {
        noFound.classList.remove('d-none');
    }
    else {
        noFound.classList.add('d-none');
    }

    for (const phone of phones) {
        // console.log(phone);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="col">
                <div class="card p-2 h-100">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus adipisci labore saepe molestias ipsam. Eaque quas voluptate iste numquam mollitia.</p>
                        
                        <button class ="btn btn-primary" onclick = "showDetails('${phone.slug}') data-bs-toggle="modal" data-bs-target="#exampleModal">hello </button>
                        
                        <button onclick ="showDetails('${phone.slug}') type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>

                    </div>
                </div>
            </div>
        `;
        phoneContainer.appendChild(div);
    }
    spinLoader(false);
}



document.getElementById('find').addEventListener('click', function () {
    const inputFeild = document.getElementById('input-feild').value;
    loadPhones(inputFeild);
    spinLoader(true);
})

const spinLoader = (isLoading) => {
    const toggle = document.getElementById('toggle');
    if (isLoading) {
        toggle.classList.remove('d-none')
    } else {
        toggle.classList.add('d-none');
    }
}



const showDetails = async id => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    modalShow(data.data);
}

const modalShow = async (data) => {
    console.log(data);
}
// function call is here 
loadPhones("iphone");