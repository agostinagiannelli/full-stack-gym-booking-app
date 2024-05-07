export enum Training {
    crossfit = 'Crossfit',
    yoga = 'Yoga',
    pilates = 'Pilates',
    calisthenics = 'Calisthenics',
    boxing = 'Boxing'
};

export interface ITraining {
    id: number,
    name: Training,
    description: string
};