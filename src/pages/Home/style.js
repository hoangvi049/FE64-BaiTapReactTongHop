import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles((theme) => {
  return {
    bgDark: {
      backgroundColor: "#212121",
      minHeight: "100vh",
    },
    title: {
      fontSize: 40,
      marginTop: 20,
      fontStyle: "italic",
      color: "#ffffff",
      alignItems: "center",
      //   //nếu màn hình dưới 576px
      //   [theme.breakpoints.down("md")]: {
      //     //style
      //     fontSize: theme.typography.h4.fontSize,
      //   },
      //   [theme.breakpoints.down("sm")]: {
      //     //style
      //     fontSize: theme.typography.h5.fontSize,
      //   },
      //   [theme.breakpoints.down("xs")]: {
      //     //style
      //     fontSize: theme.typography.h6.fontSize,
      //   },
    },

    // btnDetail: {
    //   backgroundColor: theme.palette.c1.dark,
    //   color: theme.palette.common.white,
    //   "&:hover": {
    //     backgroundColor: theme.palette.c1.light,
    //   },
    // },
  };
});
export default useStyle;
