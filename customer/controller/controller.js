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
                    <button class='btn btn-danger' onclick ='btnAdd()'>Add To Cart</button>
                    </div>
            </div>
        </div>
        `;
    });
    document.getElementById('product-list').innerHTML = content;
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
