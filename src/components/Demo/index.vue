<template>
    <div>
        Demo子组件
        <slot :data="arr"></slot>
    </div>
</template>

<script>
export default {
    name: "Demo",
    data() {
        return {
            arr: ['吃饭','睡觉','打豆豆'],
        };
    },
};
</script>

<style scoped>
div {
    background-color: skyblue;
}
</style>