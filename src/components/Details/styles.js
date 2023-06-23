import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
    income: {
        borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
      },
      expense: {
        borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
      },
}));

//makeStyles allows us to write css in form of JS.
//This is returing a hook that we can import in other file and can use the css classes.