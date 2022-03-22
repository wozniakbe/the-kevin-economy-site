import * as React from 'react'
import { Link } from 'gatsby'
import {
    customFooter,
    footerP,
    footerHr,
    footerTextDiv
} from './footer.module.css'

const Footer = () => {
    return (
        <footer className={ customFooter }>
            <hr className={ footerHr } />
            <div className={ footerTextDiv }>
                <p className={ footerP }><em>"The Kevin" Economist 2021-2022</em></p>
                <Link to="/"><p className={ footerP }><em>Home</em></p></Link>
            </div>
        </footer>
    )
}

export default Footer