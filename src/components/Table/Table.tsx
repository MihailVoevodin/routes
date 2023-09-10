import {Table} from 'antd';
import 'components/Table/Table.module.scss';
import type {ColumnsType} from 'antd/es/table';
import {concatCoordinates, markersArray} from 'common/Helpers';
import {useAppSelector, useAppDispatch} from 'common/Hooks';
import {IRoute} from 'common/Models';
import styles from 'components/Table/Table.module.scss';
import {FC} from 'react';
import React from 'react';
import {getPolylines, setMarkers} from 'store/routesSlice';

/**
 * Компонент отображения таблицы с маршрутами.
 */
export const TableComponent: FC = () => {
    const {routes} = useAppSelector((state) => state.routes);
    const dispatch = useAppDispatch();

    const columns: ColumnsType<IRoute> = [
        {
            title: 'Маршрут',
            dataIndex: 'name',
            render: (text) => <span>{text}</span>,
        },
        {
            title: 'Точка 1',
            dataIndex: 'name',
            render: (_, {points}: any) => <span>{points[0].text.split(',').join(', ')}</span>,
        },
        {
            title: 'Точка 2',
            dataIndex: 'name',
            render: (_, {points}: any) => <span>{points[1].text.split(',').join(', ')}</span>,
        },
        {
            title: 'Точка 3',
            dataIndex: 'name',
            render: (_, {points}: any) => <span>{points[2].text.split(',').join(', ')}</span>,
        },
    ];

    const rowSelection = {
        onChange: (_selectedRowKeys: React.Key[], selectedRows: IRoute[]) => {
            dispatch(setMarkers(markersArray(selectedRows[0].points)));
            dispatch(getPolylines(concatCoordinates(selectedRows[0].points)));
        },
    };

    return (
        <Table
            className={styles.Table}
            rowSelection={{
                type: 'radio',
                ...rowSelection,
            }}
            columns={columns}
            dataSource={routes}
            pagination={false}
        />
    );
};
