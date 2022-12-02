<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck" />
            <span v-show="!todo.isShow">{{ todo.title }}</span>
            <input type="text" :value="todo.title" v-show="todo.isShow" ref="inp" @blur="handleBlur($event.target.value)"/>
        </label>
        <button class="btn btn-danger" @click="handleDelete">删除</button>
        <button class="btn btn-edit" @click="handleEdit">编辑</button>
    </li>
</template>

<script>
export default {
    name: "Item",
    props: ["todo"],
    methods: {
        handleCheck() {
            this.$bus.$emit("checkTodo", this.todo.id);
        },
        handleDelete() {
            this.$bus.$emit("deleteTodo", this.todo);
        },
        handleEdit() {
            if (this.todo.hasOwnProperty('isShow')) {
                this.todo.isShow = true;
            } else {
                this.$set(this.todo, "isShow", true);
            }
            this.$nextTick(() => {
                this.$refs.inp.focus();
            })
        },
        handleBlur(val) {
            this.todo.isShow = false;
            if (val.trim()) {
                this.$bus.$emit('updateTodo', this.todo.id, val.trim());
            } else {
                alert('数据不能为空!');
            }
        }
    },
};
</script>

<style>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

.btn-edit {
    display: none;
    margin: 3px 5px 0 0;
    float: right;
    color: #fff;
    background-color: skyblue;
    border: 1px solid lightblue;
}

.btn-edit:hover {
    color: #fff;
    background-color: lightblue;
}

.btn-danger {
    display: none;
    float: right;
    margin-top: 3px;
}

li:hover button {
    display: block;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
</style>