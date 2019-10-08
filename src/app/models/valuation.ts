export enum ValuationType {
    Cash = 1,
    Asset = 2
}

export interface Valuation {
    id: number;
    value: string;
    type: ValuationType;
}
