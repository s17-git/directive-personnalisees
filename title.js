
        const RootComponent = {

        }

        const app = Vue.createApp(RootComponent)

            app.directive('title',{
                beforeMount(el, binding) {
                    el.innerHTML = `<h${binding.arg}> binding ${binding.value} </h${binding.arg}>`;
                    el.style.backgroundColor = 'lightblue'
                }
            })

        const vm = app.mount("#app");