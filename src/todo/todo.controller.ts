import { Controller, Delete, Get, Post } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { get } from 'http';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
    constructor(private todoService: TodoService) {

    }

    @Get()
    getAll(): Promise<Todo[]> {
        return this.todoService.getTodos();
    }

    @Get('id/:id')
    getById(@Param('id') id: string): Promise<Todo> {
        return this.todoService.getTodo(id);
    }

    @Get('/count')
    getAmount(): Promise<number> {
        return this.todoService.getAmount();
    }

    @Post()
    addTodo(@Body() todo: Todo): Promise<any> {
        return this.todoService.createTodo(todo.todo, todo.priority);
    }

    @Post('/:name')
    addTodoName(@Param('name') name: string): Promise<any> {
        return this.todoService.createTodo(name, 2);
    }

    @Delete()
    deleteTodo(@Body() todo: Todo): Promise<any> {
        return this.todoService.deleteTodo(todo.id);
    }

    @Delete('/:id')
    deleteTodoById(@Param('id') id: string): Promise<any> {
        return this.todoService.deleteTodoById(id);
    }
}
