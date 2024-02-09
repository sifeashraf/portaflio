import { Box, styled } from "@mui/material";
const TabBox = styled(Box)({
  padding: "10px 15px",
  fontSize: "23px",
  flex: "1",
  textAlign: "center",
  position: "relative",
  "&:hover": { cursor: "pointer" },
  "&::before": {
    content: '""',
    position: "absolute",
    width: 0,
    height: "100%",
    background: "linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%)",
    top: 0,
    left: 0,
    zIndex: -1,
    transition: "0.3s ease-in-out",
  },
});
const TabBar = styled(Box)({
  display: "flex",
  width: "70%",
  margin: "0 auto 50px",
  justifyContent: "center",
  border: "1px solid #b8b8b8",
  borderRadius: "40px",
  overflow: "hidden",
});
export default function ProjectCardtab({ tabclickhandler, tabscount }) {
  let tabs = [];
  for (let i = 1; i <= tabscount; i++) {
    tabs.push(
      <TabBox
        className="tab-box"
        onClick={(e) => tabclickhandler(e, i * 6 - 6, i * 6)}
        key={i}
      >
        tab {i}
      </TabBox>
    );
  }
  return <TabBar className="tabs-bar">{tabs}</TabBar>;
}
