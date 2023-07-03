import { Alert } from "../component/Alert/Alert";
import { Typography } from "../component/Typography/Typography";
import avatarImage from "../assets/image1.jpg";

export const AlertDoc = () => {
  return (
    <>
      <section className="doc-container">
        <Typography variant="h4" component="h1">
          Alert.
        </Typography>
        <Typography variant="sub-title" component="h1" className="mb-8">
          The alert offers four
          <code className="code">severity</code>
          levels that set a distinctive icon and color.
        </Typography>
        <code className="code">error</code>
        <code className="code">warring</code>
        <code className="code">info</code>
        <code className="code">success</code>
        <div className="doc-display-container-col flex-col mb-30">
          <Alert severity="error">This is an error alert — check it out!</Alert>
          <Alert severity="info">This is an info alert — check it out!</Alert>
          <Alert severity="success">
            This is an success alert — check it out!
          </Alert>
          <Alert severity="warring">
            This is an warring alert — check it out!
          </Alert>
        </div>
      </section>
    </>
  );
};
