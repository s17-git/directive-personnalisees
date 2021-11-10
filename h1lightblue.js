const RootComponent = {

}

const app = Vue.createApp(RootComponent)

    app.directive('h1lightblue',{
        beforeMount(el, binding) {
            el.innerHTML ="<h1>" + binding.value + "</h1>";
            el.style.backgroundColor = 'lightblue'
        }
    })

const vm = app.mount("#app");