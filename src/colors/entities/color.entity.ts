import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'whitepoint' })
export class Color {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'palette_id' })
    paletteId: string;

    @Column()
    hex: string;

    @Column()
    name: string;

    @Column({ name: 'user_id' })
    userId: string;
}
