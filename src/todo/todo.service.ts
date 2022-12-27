import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {

    constructor(@InjectModel(Todo) private todoModel: typeof Todo) {

    }

    public createTodo(todo: string, prio: number): Promise<any> {
        return this.todoModel.create({todo: todo, priority: prio}); 
    }

    public getTodo(id: string): Promise<Todo> {
        return this.todoModel.findOne({
            where: {
                id
            }
        });
    }

    public async getTodos(): Promise<Todo[]> {
        return this.todoModel.findAll();
    }

    public getAmount(): Promise<number> {
        return this.todoModel.count();
    }

    public async deleteTodo(obj: Todo) {
        const todo = await this.todoModel.findOne(obj.id);
        await todo.destroy();
    }

    public async deleteTodoById(id: any) {
        const todo = await this.todoModel.findOne(id);
        await todo.destroy();
    }
}
