import * as task from './type'
export default {
    [task.ADD_TASK]: function (state, payload) {
        const { task } = payload;
        state.tasks.unshift(task);
    },
    [task.UPDATE_TASK]: function (state, payload) {
        const { id, finish } = payload;
        for (let index in state.tasks) {
            if (state.tasks[index].id === id) {
                state.tasks[index].isFinished = finish
                break
            }
        }
    },
    [task.DELETE_TASK]: function (state, payload) {
        const { id } = payload;
        for (let index in state.tasks) {
            if (state.tasks[index].id === id) {
                state.tasks.splice(index, 1)
                break
            }
        }

    },
    [task.SHOW_INDEX]: function (state, payload) {
        state.showIndex = payload.index;
    }
}