import {useAppSelector} from 'common/Hooks';
import {IRoute} from 'common/Models';
import {FC} from "react";
import {Table} from "antd";
import type { ColumnsType } from "antd/es/table";
import React from 'react';

export const TableComponent: FC = () => {

    const {routes} = useAppSelector(state => state.routes)
    console.log(routes);

    const columns: ColumnsType<IRoute> = [
            {
                title: 'Маршрут',
                dataIndex: 'name',
                render: (text) => <span>{text}</span>
            },
            {
                title: 'Точка 1',
                dataIndex: 'name',
                render: (_, {points}: any) => <span>{points[0].text.split(',').join(', ')}</span>
            },
            {
                title: 'Точка 2',
                dataIndex: 'name',
                render: (_, {points}: any) => <span>{points[1].text.split(',').join(', ')}</span>
            },
            {
                title: 'Точка 3',
                dataIndex: 'name',
                render: (_, {points}: any) => <span>{points[2].text.split(',').join(', ')}</span>
            },
        ]

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: IRoute[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    }

    return (
        <Table className="Table" rowSelection={{
            type: 'radio',
            ...rowSelection,
        }} columns={columns} dataSource={routes} pagination={false} />
    )

}
