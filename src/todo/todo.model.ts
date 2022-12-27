import { execSync } from 'child_process';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Todo extends Model {

    @Column
    todo: string;

    @Column({defaultValue: 2})
    priority: number;

    
}