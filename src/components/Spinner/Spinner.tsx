import {Spin} from 'antd';
import {useAppSelector} from 'common/Hooks';
import styles from 'components/Spinner/Spinner.module.scss';
import React, {FC} from 'react';
import {LoadingOutlined} from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{fontSize: 40}} spin />;

/**
 * Спиннер загрузки при запросе.
 */
export const Spinner: FC = () => {
    const {isLoading} = useAppSelector((state) => state.routes);

    return (
        <>
            {isLoading && (
                <div className={styles.spinnerContainer}>
                    <div className={styles.text}>Рассчитываем маршрут...</div>
                    <Spin size="default" className={styles.spinner} indicator={antIcon} />
                </div>
            )}
        </>
    );
};
