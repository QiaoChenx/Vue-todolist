<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <Header @addTodo="addTodo"></Header>
            <List :todos="todos"></List>
            <Footer :todos="todos" v-show="todos.length"></Footer>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";
import List from "@/components/List";
import Footer from "@/components/Footer";
export default {
    name: "App",
    data() {
        return {
            todos: JSON.parse(localStorage.getItem("todos")) || [],
        };
    },
    components: {
        Header,
        List,
        Footer,
    },
    methods: {
        addTodo(obj) {
            this.todos.push(obj);
        },
    },
    mounted() {
        this.$bus.$on("checkTodo", (id) => {
            this.todos.forEach((item) => {
                if (item.id === id) {
                    item.done = !item.done;
                }
            });
        });
        this.$bus.$on("deleteTodo", (obj) => {
            if (confirm(`确定要删除${obj.title}吗？`)) {
                let index = this.todos.indexOf(obj);
                this.todos.splice(index, 1);
            } else {
                return false;
            }
        });
        this.$bus.$on("checkAll", (check) => {
            this.todos.forEach((item) => {
                item.done = check;
            });
        });
        this.$bus.$on("clearDone", () => {
            this.todos = this.todos.filter((item) => item.done !== true);
        });
        this.$bus.$on("updateTodo", (id, val) => {
            this.todos.find((item) => {
                if (item.id == id) {
                    item.title = val;
                }
            });
        });
    },
    watch: {
        todos: {
            deep: true,
            handler(val) {
                localStorage.setItem("todos", JSON.stringify(val));
            },
        },
    },

};
</script>

<style>
/*base*/
body {
    background: #fff;
}

.btn {
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>