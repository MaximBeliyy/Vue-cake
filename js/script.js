new Vue ({
    el: '.sample',
    data: {
        layers: [],
        layresTypes: {
            biscuit: {
                price1sm: 50,
                label: 'Бисквит'
            },
            beze: {
                price1sm: 100,
                label: 'Безе'
            },
            curd: {
                price1sm: 60,
                label: 'Творожный'
            }
        },
        defaultLayerType: 'biscuit',
        defaultHeight: 4
    },
    computed: {
        price(){
            let sum = 0;

            this.layers.forEach((layer) => {
                sum += layer.height * this.layresTypes[layer.type].price1sm;
            });

            return sum;
        },
        hasLayers(){
            return this.layers.length > 0;
        }
    },
    methods: {
        addLayer(){
            this.layers.push ({
                type: this.defaultLayerType,
                height: this.defaultHeight
            });
        },
        changeHeight(i, dh){
            this.layers[i].height += dh;
        },
        deleteLayer(i){
            this.layers.splice(i, 1);
        }
    }
})





