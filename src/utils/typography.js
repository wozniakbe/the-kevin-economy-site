import Typography from "typography";
import oceanTheme from 'typography-theme-ocean-beach';

oceanTheme.scaleRatio = 3;
oceanTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'h1,h2,h3,h4,h5, hr': {
      marginBottom: rhythm(1/2),
      marginTop: rhythm(1/2),
    }
  })
  

const typography = new Typography(
    oceanTheme
);

export default typography;
