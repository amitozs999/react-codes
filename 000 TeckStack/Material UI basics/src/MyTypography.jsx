import "./styles.css";
import { Typography } from "@mui/material";
export default function MyTypography() {
  return (
    <>
      {/* wrapped by h4 tag and aligned in center */}
      <Typography color="red" variant="h4" align="center">
        I am h4 default variant.
      </Typography>

      {/* wrapped by h5 tag and have margin on top=5 */}
      <Typography variant="h5" sx={{ mt: 5 }}>
        I am h5 default variant.
      </Typography>

      {/* subtitle1 is wrapped by h6 tag */}
      <Typography variant="subtitle1">
        I am subtitle1 default variant.
      </Typography>

      {/* subtitle2 is bold version of subtitle1 
        and by default, wrapped by p h6 
          but due to component prop="h6", 
        now it is wrapped by "p" */}
      <Typography variant="subtitle2" component="p">
        I am subtitle2 default variant.
      </Typography>

      {/* wrapped by p tag */}
      <Typography variant="body1">I am body1 default variant.</Typography>

      {/* wrapped by p tag but with smaller 
        size compared to body1 variant */}
      <Typography variant="body2">I am body2 default variant.</Typography>

      {/* wrapped by span ,all in caps and bold*/}
      <Typography variant="button" display="block" gutterBottom>
        Button text
      </Typography>

      {/* wrapped by span and monospace*/}
      <Typography variant="caption" display="block" gutterBottom>
        Caption text
      </Typography>

      {/* wrapped by span and all in caps */}
      <Typography variant="overline" display="block" gutterBottom>
        Overline text
      </Typography>
    </>
  );
}
