export interface IHitPoints {
    max: number;
    current: number;
    temporary: number;
}

export class HitPoints implements IHitPoints {
    max: number;
    current: number;
    temporary: number;
}