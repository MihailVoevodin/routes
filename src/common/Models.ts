/**
 * Модель стейта маршрута.
 *
 * @param key Ключ маршрута.
 * @param name Имя маршрута.
 * @param points Точки пути маршрута.
 */
export interface IRoute {
    key: number;
    name: string;
    points: IPoint[];
}

/**
 * Модель стейта точки.
 *
 * @param key Ключ точки.
 * @param name Имя точки.
 * @param points Координаты точки.
 */
export interface IPoint {
    key: number;
    name: string;
    text: string;
}
