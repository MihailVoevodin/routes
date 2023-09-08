export interface IRoute {
    key: number;
    name: string;
    points: IPoint[];
}

interface IPoint {
    key: number;
    name: string;
    text: string;
}
