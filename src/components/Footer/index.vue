<template>
    <div class="todo-footer">
        <label>
            <input
                type="checkbox"
                v-model="isAll"
            />
        </label>
        <span> <span>已完成{{done}}</span> / 全部{{todos.length}} </span>
        <button class="btn btn-danger" style="display: block" @click="handleClear">
            清除已完成任务
        </button>
    </div>
</template>

<script>
export default {
    name: "Footer",
    props: ['todos'],
    data() {
        return {};
    },
    methods: {
        handleClear() {
            this.$bus.$emit('clearDone');
        }
    },
    computed: {
        isAll: {
            get() {
                return this.todos.every(item => item.done == true);
            },
            set(val) {
                this.$bus.$emit('checkAll', val);
            }
        },
        done() {
            return this.todos.reduce((pre, item) => {
                if (item.done == true) {
                    return ++pre;
                } else {
                    return pre;
                }
            },0)
        }
    }
};
</script>

<style>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>