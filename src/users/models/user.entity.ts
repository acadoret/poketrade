import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    userName: string

    @Column({length: 100})
    email: string

    @Column({length: 30, nullable: true})
    fistName: string

    @Column({length: 30, nullable: true})
    lastName: string

    @Column()
    password: string

}