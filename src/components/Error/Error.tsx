import {useAppSelector} from 'common/Hooks';
import styles from 'components/Error/Error.module.scss';
import React, {FC} from 'react';

/**
 * Компонент отображения ошибки.
 */
export const ErrorComponent: FC = () => {
    const {isError, errorMessage} = useAppSelector((state) => state.routes);

    return (
        <>
            {isError && (
                <div className={styles.errorContainer}>
                    <div>Произошла ошибка построения маршрута</div>
                    <div>{errorMessage}</div>
                </div>
            )}
        </>
    );
};
