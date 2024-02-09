export const iconContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
};

export const iconBox = {
  position: "relative",
  width: "45px",
  height: "45px",
  backgroundColor: "hsl(0deg 0% 85% / 10%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  overflow: "hidden",
  border: "1px solid hsl(0deg 0% 100% / 50%)",
  margin: "0 2.5px 15px",
  "& .overlay": {
    position: "absolute",
    backgroundColor: "black",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    width: "0px",
    height: "0px",
    zIndex: 110,
    transition: "all 0.3s ease-in-out",
    borderRadius: "50%",
  },
  "& .icon": {
    color: "white",
    width: "17px",
    height: "17px",
    zIndex: 111,
    transition: "all 0.3s ease-in-out",
  },
  "&:hover": {
    "& .overlay": {
      backgroundColor: "#FFFFFF",
      width: "100%",
      height: "100%",
    },
    "& .icon": {
      color: "black",
    },
  },
};

export const ItemStyle = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  overflow: "hidden",
  borderRadius: "15px",
  textAlign: "center",
  "&::before": {
    content: '""',
    width: "100%",
    height: "0%",
    position: "absolute",
    top: 0,
    left: 0,
    background: "linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%)",
    transition: "1s ease-in-out all",
    overflow: "hidden",
    zIndex: 1,
  },
  "&:hover": {
    "&::before": {
      height: "100%",
      opacity: "0.7",
    },
  },
  "&:hover .icon": {
    right: "8px",
  },
};
