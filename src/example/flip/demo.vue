<template>
    <main id="app">
        <h1>a FLIP demo of vue3</h1>
        <section>
            <ul>
                <ol @click="setCurrent('Blues')">
                    Blues
                    <div id="Blues" class="line" v-if="current == 'Blues'"></div>
                </ol>
                <ol @click="setCurrent('Rock')">
                    Rock
                    <div id="Rock" class="line" v-if="current == 'Rock'"></div>
                </ol>
                <ol @click="setCurrent('Jazz')">
                    Jazz
                    <div id="Jazz" class="line" v-if="current == 'Jazz'"></div>
                </ol>
            </ul>
        </section>
    </main>
</template>
                               
<script>
import { ref, nextTick } from "vue";
export default {
    name: "App",
    setup() {
        const current = ref("Blues");
        const setCurrent = async (v) => {
            let oldElm = document.getElementById(current.value);
            let first = oldElm.getBoundingClientRect();
            current.value = v;
            //NOTICE: After this, dom was changed.
            await nextTick();
            let newElm = document.getElementById(current.value);
            let last = newElm.getBoundingClientRect();
            const invert = first.top - last.top;
            newElm.animate(
                [
                    { transform: `translateY(${invert}px)` },
                    { transform: "translateY(0)" },
                ],
                {
                    duration: 300,
                    easing: "cubic-bezier(0,0,0.32,1)",
                }
            );
        };
        return { current, setCurrent };
    },
};
</script>
                               
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    margin-top: 60px;
}

ul {
    color: rgb(14 165 233);
}

ol {
    padding: 0.5rem;
    width: 5rem;
    background-color: rgb(14 165 233/0.1);
    position: relative;
    cursor: pointer;
}

.line {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0.5rem;
    background-color: rgb(14 165 233);
}
</style>   
