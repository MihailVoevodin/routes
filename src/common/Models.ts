export interface IRoute {
    key: number;
    name: string;
    points: IPoint[];
}

export interface IPoint {
    key: number;
    name: string;
    text: string;
}

export interface IRouteResponse {
    code: string;
    routes: IRoutes[];
    waypoints: IWaypoints[];
}

interface IRoutes {
    geometry: IRoutesGeometry;
    legs: RoutesLegsType[];
    weight_name: string;
    weight: number;
    duration: number;
    distance: number;
}

interface IRoutesGeometry {
    coordinates: number[];
    type: string;
}
type RoutesLegsType = {
    steps: number[];
    summary: string;
    weight: number;
    duration: number;
    distance: number;
};

interface IWaypoints {
    hint: string;
    distance: number;
    name: string;
    location: number[];
}
