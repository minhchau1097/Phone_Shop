const api = new Api();
const getLocal = () => {
    if (localStorage.getItem('Item')) {


        var dataString = localStorage.getItem('Item');

        cartList.arr = JSON.parse(dataString);
        totalQuantity(cartList.arr);
        renderTable(cartList.arr);
    }
}

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
        let index = this.arr.findIndex((item) => item.id == id);
        return index;
    }
};
getLocal();
function btnIncrease(id) {
    let index = cartList.timViTri(id);
    cartList.arr[index].quantity++;
    changeQuantity(cartList.arr[index].quantity, index)
    renderCart(cartList.arr)
    totalQuantity(cartList.arr);
    setLocal();
}
function btnDecrease(id) {
    let index = cartList.timViTri(id);
    cartList.arr[index].quantity--;
    changeQuantity(cartList.arr[index].quantity, index)
    renderCart(cartList.arr)
    if (cartList.arr[index].quantity === 0) {
        cartList.arr.splice(index, 1);
        renderCart(cartList.arr)
        renderTable(cartList.arr)
    }
    totalQuantity(cartList.arr);
    setLocal();

}


function btnAdd(id) {

    let promise = api.callApi('product', 'GET', null);
    promise
        .then(function (res) {
            res.data.forEach(product => {
                if (id == product.id) {
                    let item = layThongTin(product);
                    console.log(item)
                    addToCart(item);
                    renderTable(cartList.arr);
                    renderCart(cartList.arr);
                    totalQuantity(cartList.arr);
                    setLocal();


                }
            });
        })
        .catch(function () {

        });



}

const btnPurchase = domId('btnPurchase').addEventListener('click', () => {
    cartList.arr= [];
   
    renderTable(cartList.arr);
    totalQuantity(cartList.arr);
    renderCart(cartList.arr);
    setLocal();
})

function btnDelete(id){
    let index = cartList.timViTri(id);
    cartList.arr.splice(index, 1)
    renderTable(cartList.arr);
    renderCart(cartList.arr);
    totalQuantity(cartList.arr);
    setLocal();

}

const setLocal = () => {
    var dataString = JSON.stringify(cartList.arr);

    localStorage.setItem('Item', dataString);
}

