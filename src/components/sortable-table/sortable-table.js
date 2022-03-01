import React from 'react';
import './styles.module.css';

// credit: https://www.smashingmagazine.com/2020/03/sortable-tables-react/
const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                var floatA = parseFloat(a[sortConfig.key]);
                var floatB = parseFloat(b[sortConfig.key]);
                if (floatA && floatB) {
                    if (floatA < floatB) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (floatA > floatB) {
                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }
                    return 0;
                }
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const SortableTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.data);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('player')}
                            className={getClassNamesFor('player')}
                        >
                            Player
                        </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('pos')}
                            className={getClassNamesFor('pos')}
                        >
                            POS
                        </button>
                    </th>
                    {/* <th>
                        <button
                            type="button"
                            onClick={() => requestSort('team')}
                            className={getClassNamesFor('team')}
                        >
                            Team
                        </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('franchise')}
                            className={getClassNamesFor('franchise')}
                        >
                            Franchise
                        </button>
                    </th> */}
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('salary')}
                            className={getClassNamesFor('salary')}
                        >
                            Salary
                        </button>
                    </th>
                    {/* <th>
                        <button
                            type="button"
                            onClick={() => requestSort('produced')}
                            className={getClassNamesFor('produced')}
                        >
                            Produced
                        </button>
                    </th> */}
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('returned')}
                            className={getClassNamesFor('returned')}
                        >
                            Return
                        </button>
                    </th>
                    {/* <th>
                        <button
                            type="button"
                            onClick={() => requestSort('roi')}
                            className={getClassNamesFor('roi')}
                        >
                            ROI
                        </button>
                    </th> */}
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.player}</td>
                        <td>{item.pos}</td>
                        {/* <td>{item.team}</td>
                        <td>{item.franchise}</td> */}
                        <td>${item.salary}</td>
                        {/* <td>${item.produced}</td> */}
                        <td>${item.returned}</td>
                        {/* <td>{item.roi}%</td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SortableTable
