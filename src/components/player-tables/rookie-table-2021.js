import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import SortableTable from '../sortable-table/sortable-table';

const RookieTable2021 = () => {
    const data = useStaticQuery(graphql`
    query {
        allGoogle2021RookiesDraftedSheet {
            nodes {
                id
                player
                pOS
                team
                franchise
                produced
                salary
                returned
                rOI
            }
        }
    }
  `)
    return (
        <SortableTable data={data.allGoogle2021RookiesDraftedSheet.nodes} />
    );
};

export default RookieTable2021
