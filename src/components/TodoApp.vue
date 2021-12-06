<template>
    <div class="container">
        <div class="d-flex">
            <input v-model="newTask" type="text" placeholder="Enter task" class="form-control">
            <button class="btn btn-warning rounded-0" @click="addTodo">SUBMIT</button>
        </div>
        <table class="table table-bordered mt-5">
            <thead>
            <tr>
                <th scope="col">Task</th>
                <th scope="col">Status</th>
                <th scope="col" class="text-center">#</th>
                <th scope="col" class="text-center">#</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(task,index) in tasks" :key="index">
                <td>
                    <span :class="{finished: task.status === 'finished'}">
                        {{task.name}}
                    </span>
                </td>
                <td style="width: 120px">
                    <span class="pointer" @click="changeStatus(index)"
                        :class="{
                        'text-danger' : task.status === 'to-do',
                        'text-warning' : task.status === 'in-progress',
                        'text-success' : task.status === 'in-progress'}"
                    >
                        {{task.status}}
                    </span>
                </td>
                <td style="width: 100px" @click="editTodo(index)">
                    <span class="fa fa-pen"></span>
                </td>
                <td style="width: 100px" @click="delTodo(task.id)">
                    <span class="fa fa-trash"></span>
                </td>
            </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            avaluateTodoStatus:['to-do','in-progress','finished'],
            editedTask:null,
            newTask:'',
            tasks:[
                {name: 'Make todo', status:'to-do'},
                {name: 'Make App', status:'in-progress'},
            ]
        }
    },
    methods:{
        addTodo(){
            if(this.newTask.length === 0 )return

            if(this.editedTask === null){
                this.tasks.push({ name: this.newTask , status: 'to-do'})
                this.newTask = ''
            }else {
                this.tasks[this.editedTask].name= this.newTask;
                this.newTask = ''
                this.editedTask = null
            }
        },
        delTodo(id){
            const newArr = this.tasks.filter((el) => el.id != id)
            this.tasks = newArr
        },
        editTodo(index){
            this.newTask = this.tasks[index].name
            this.editedTask = index
        },
        changeStatus(index){
            let newIndex = this.avaluateTodoStatus.indexOf(this.tasks[index].status)
            if(++newIndex >2) newIndex = 0;
            this.tasks[index].status = this.avaluateTodoStatus[newIndex]
        }
    }
}
</script>

<style scoped>
.form-input input{
    width: 400px;
    height: 30px;
}
.form-input button{
    height: 35px;
}
.pointer{
    cursor: pointer;
}
.finished{
    text-decoration: line-through;
}
</style>
