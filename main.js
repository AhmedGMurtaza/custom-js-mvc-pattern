(function(){

    // Model
    let data = {
        lastId:0,
        pizzas:[]
    }

    // Controller
    let controller = {
        addPizza:function(){
            var thisID = ++data.lastId;
            data.pizzas.push({
                id:thisID,
                visible:true
            }) 
            // update the view
            view.render();
        },
        removePizza:function(pizza){
            var selectedPizza = data.pizzas[pizza.id-1];
            selectedPizza.visible = false;
            view.render();
        },
        getVisiblePizzas:function(){
            var visiblePizzas = data.pizzas.filter(funcion(pizza){
                return pizza.visible;
            })
        },
        init: function(){
            // controller to view init
            view.init();
        }
    }


    // View
    let view = {
        // we call init to setup/initial view
        init:function(){
            var addPizzBtn = document.querySelector('.add-pizza');
            addPizzaBtn.addEventListener('click',function(){
                controller.addPizza();
            })

            // get elements from html for using in the render function
            this.pizzaList = document.querySelector('.pizzaList');
            this.pizzaTemplate = document.querySelector('script[data-template]="pizza"').innerHTML;

            // delegated event to listen for removal clicks

            this.render();
        },

        // render update our view 
        render:function(){}
    }

    // initialize app by default
    view.init();


})