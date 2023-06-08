const api = new Api();


const fetchProduct = () => {
    let promise = api.callApi('product', 'GET', null);
    promise
        .then(function (res) {
            // layThongTin(res.data)
            renderProduct(res.data)

            label(res.data)




        })
        .catch(function () {

        });
};
fetchProduct();




function selectBrand() {
    let promise = api.callApi('product', 'GET', null);
    promise
        .then(function (res) {

            typeBrand(res.data)


        })
        .catch(function () {

        });
}



const cartList = {
    arr: [],

    timViTri: function (id) {
        let index = this.arr.findIndex((item) => item.id === id);
        return index;
    }
};

function btnIncrease(id) {
    let index = cartList.timViTri(id);
    if (index == ! -1) {
        cartList.arr[index].quantity++;
        changeQuantity(cartList.arr[index].quantity, index)
    }
}
function btnDecrease(id) {
    let index = cartList.timViTri(id);

    if (index == ! -1) {
        cartList.arr[index].quantity--;
        changeQuantity(cartList.arr[index].quantity, index)
        if (cartList.arr[index].quantity === 0) {
            cartList.arr.splice(index, 1);
            renderTable(cartList.arr)
            console.log(cartList.arr)
        }

    }
}


function btnAdd(id) {
    console.log(cartList.arr)
    let promise = api.callApi('product', 'GET', null);
    promise
        .then(function (res) {
            res.data.forEach(product => {
                if (id == product.id) {

                    addToCart(product);
                    renderTable(cartList.arr);
                    

                }
            });
        })
        .catch(function () {

        });



}
