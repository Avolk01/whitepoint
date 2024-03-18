import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'whitepoint' })
export class Palette {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ name: 'user_id' })
    userId: string;
}
