
### 错误小结
``` 
1、在 updateTask中 不能用for of去改变状态，需要通过for in 获取index 去改变状态 
2、 在taskList 中遍历显示task key绑定不能用index而要用任务的id，不然添加新任务会错位
3、 v-model最好不要绑定计算属性，如果绑定计算属性还要给计算属性设置set方法
4、 mapState是放在 计算属性里，使用对象的方式 需要用一个函数返回对应的state里的属性
5、 Vuex中map等函数映射的名字不能和组件里定义的名字重复
6、 input输入框中单选框的type是checkbox 不是 checkBox ，不然v-model 改变，watch监听回去改变的值不对。
```

