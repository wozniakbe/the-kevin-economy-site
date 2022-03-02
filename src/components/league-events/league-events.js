import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import { leagueEventHeader, leagueEventData } from './league-events.module.css';

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
                    <th className={ leagueEventHeader }>
                        Date
                    </th>
                    <th className={ leagueEventHeader }>
                        Event
                    </th>
                </tr>
            </thead>
            <tbody>
                { data.allGoogleLeagueCalendar2022Sheet.nodes.map((item) => (
                    <tr key={ item.date }>
                        <td className={ leagueEventData }>{ item.date }</td>
                        <td className={ leagueEventData }>{ item.event }</td>
                    </tr>
                )) }
            </tbody>
        </table>
    );
};

export default LeagueEvents
