export default {
    tasks(state) {
        return state.tasks
    },
    unFinishiedCount(state, getters) {
        let count = 0;
        getters.tasks.forEach(item => {
            if (!item.isFinished) {
                count++;
            }
        });
        return count;
    },
    showTasks(state) {
        return state.tasks.filter(item => {
            switch (state.showIndex) {
                case 0:
                    return true;
                case 1:
                    return !item.isFinished;
                case 2:
                    return item.isFinished;
            }
        })
    }
}