const api = new Api();

const fetchProduct = () => {
    let promise = api.callApi('product', 'GET',null);
    promise
    .then(function(res){
        renderProduct(res.data)
        label(res.data)
        selectBrand(res.data)
        function selectBrand(){

        }
        console.log(res.data)
    })
    .catch(function(){

    });
};
fetchProduct();

function selectBrand(){
    let promise = api.callApi('product', 'GET',null);
    promise
    .then(function(res){
        
        typeBrand(res.data)
        
        
    })
    .catch(function(){

    });
}