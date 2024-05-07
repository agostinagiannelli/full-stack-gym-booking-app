import { Training } from '../interfaces/ITraining';

export const findTrainingId = (training: string): number => {
    const trainingId = Object.values(Training).findIndex(name => name === training);
    if (trainingId === -1) throw "Training not found"
    return trainingId;
};