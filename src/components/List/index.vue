<template>
    <ul class="todo-main">
        <transition-group name="todo">
            <Item
                v-for="(todo, index) of todos"
                :key="todo.id"
                :todo="todo"
            ></Item>
        </transition-group>
    </ul>
</template>

<script>
import Item from "./Item";
export default {
    name: "List",
    props: ["todos"],
    components: {
        Item,
    },
};
</script>

<style>
@keyframes todo {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}

.todo-enter-active {
    animation: todo .2s linear;
}

.todo-leave-active {
    animation: todo .2s linear reverse;
}
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>