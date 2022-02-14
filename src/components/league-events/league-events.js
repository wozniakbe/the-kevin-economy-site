import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
// import './styles.css';

const LeagueEvents = (props) => {
    const data = useStaticQuery(graphql`
    query {
        allGoogleLeagueCalendar2022Sheet {
          nodes {
            date
            event
          }
        }
      }
  `)
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Date
                    </th>
                    <th>
                        Event
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.allGoogleLeagueCalendar2022Sheet.nodes.map((item) => (
                    <tr key={item.date}>
                        <td>{item.date}</td>
                        <td>{item.event}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default LeagueEvents
