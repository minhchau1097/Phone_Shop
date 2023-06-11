const domId = (id) => document.getElementById(id);


let renderProduct = (arrProduct) => {
    let content = '';
    arrProduct.forEach(function (product, index) {
        content += `
        <div class='col-12 col-sm-6 col-lg-3 '>
        <div class='card p-4'>
                <img class='card-img-top' src="${product.img}" alt="${product.type}" />
                <div class="card-body">
        
                <h3 class='text-center'>${product.name}</h3>
                <p class='text-center'>${product.price}</p>
                </div> 

                <label>${product.type}</label>
                <p>${product.desc}</p>
                
                <div class='foot'>
                <h3>Specifications</h3>
                <p>Screen: ${product.screen}</p>
                <p>Back camera: ${product.backCamera}</p>
                <p>Front camera: ${product.frontCamera}</p>
                </div>
                <div class='foot-btn'>
                    <button class='btn btn-danger' data-toggle="modal" data-target="#exampleModal" onclick ='btnAdd(${product.id})'>Add To Cart</button>
                    </div>
            </div>
        </div>
        `;
    });
    domId('product-list').innerHTML = content;
}


let label = (arrProduct) => {
    for (let i = 0; i < arrProduct.length; i++) {
        let item = arrProduct[i]
        if (item.type === 'Samsung') {
            document.getElementsByTagName('label')[i].style.width = '100px'
        } else {
            document.getElementsByTagName('label')[i].style.width = '80px'
        }
    };
}

function typeBrand(arrProduct) {
    let newArr = [];
    let type = document.getElementById('mySelect').value;
    arrProduct.forEach(function (product, index) {
        if (type === 'Apple' && product.type === 'Iphone') {
            newArr.push(product);
        } else if (type === 'Samsung' && product.type === 'Samsung') {
            newArr.push(product);
        } else if (type === 'All') {
            newArr.push(product);

        }
        return newArr;
    });
    renderProduct(newArr);
    label(newArr);
}


let renderTable = (arr,) => {
    let content = '';
    arr.forEach((product) => {



        content += `
        <tr>
        <td>
        <img class='w-100' src="${product.img}" alt="${product.type}" />
        </td>
        <td>${product.name}</td>
        <td> 
        <div>
        <button onclick = 'btnDecrease("${product.id}")'> <i class="fa-regular fa-circle-left"></i></button>
        <span class='quantity'>${product.quantity}</span>
        <button onclick = 'btnIncrease("${product.id}")'><i class="fa-regular fa-circle-right"></i></button>
        </td>
        </div>
        <td>${product.price}</td>
        <td>
        <button onclick = 'btnDelete(${product.id})'><i class="fa-solid fa-trash"></i></button>
        </td>
        
        </tr>
        
        `;


    });
    domId('table-list').innerHTML = content;
};
const changeQuantity = (total, index) => {
    return document.getElementsByClassName('quantity')[index].innerHTML = total;
}

const addToCart = (product) => {
    let cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        quantity: 1
    };

    let isProductInCart = false;
    for (let i = 0; i < cartList.arr.length; i++) {
        if (cartList.arr[i].id === cartItem.id) {
            cartList.arr[i].quantity++;
            isProductInCart = true;
            break;
        }
    }

    if (!isProductInCart) {
        cartList.arr.push(cartItem);
    }


}

const renderCart = (arr) => {
    let totalPrice = 0;
    arr.forEach((product) => {
        totalPrice += product.price * product.quantity;
    })



    document.getElementsByClassName('total-price')[0].innerHTML = `Total: ${totalPrice}`;
}


const layThongTin = (arr) => {
    const product = new Product(arr.id, arr.name, arr.price, arr.screen, arr.backCamera, arr.frontCamera, arr.img, arr.desc, arr.type)

    return product;
}

const totalQuantity = (arr) => {
    let total = 0;
arr.forEach((item)=>{
    total+= item.quantity;
    
})
document.getElementsByClassName('content-number')[0].innerHTML = total;
}
