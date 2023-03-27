import express, {Application} from "express";
import {fileOperation, readFile, writeFile} from "./utils";
import bodyParse from 'body-parser'
import {ITodoData} from "../js/typings";

const app: Application = express()
app.use(bodyParse.urlencoded({extended: true}))
app.use(bodyParse.json())
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-methods', 'POST,GET,PUT,DELETE,OPTIONS')
    next()
})
app.get('/todolist', function (req, res) {
    const todoList: string = fileOperation('todo.json') as string
    res.send(todoList)
})
app.post('/toggle', function (req, res) {
    const id: number = parseInt(req.body.id)
    fileOperation('todo.json', function (todoList: ITodoData[]) {
        return todoList.map((todo: ITodoData) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
    })
    res.send({
        msg: 'ok'
    })
})
app.post('/remove', function (req, res) {
    const id: number = parseInt(req.body.id)
    fileOperation('todo.json', function (todoList: ITodoData[]) {
        return todoList.filter((todo: ITodoData) => todo.id !== id)
    })
    res.send({
        msg: 'ok',
        statusCode: 200
    })
})
app.post('/add', function (req, res) {
    const todoData: ITodoData = JSON.parse((req.body.todoData))
    fileOperation('todo.json', function (todoList: ITodoData[]) {
        const isInData = todoList.find((isT: ITodoData) => todoData.content === isT.content)
        if (isInData) {
            res.send({
                msg: 'no ok',
                statusCode: 100
            })
            return
        }
        todoList.push(todoData)
        return todoList
    })
    res.send({
        msg: 'ok',
        statusCode: 200
    })
})
app.listen(8088, function () {
    console.log(`打开了express`)
    console.log(`监听了8088`)
})