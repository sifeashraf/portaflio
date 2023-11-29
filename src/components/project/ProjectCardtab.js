export default function ProjectCardtab({ tabclickhandler, tabscount }) {
  let tabs = [];
  for (let i = 1; i <= tabscount; i++) {
    tabs.push(
      <div className="tab-box" onClick={(e) => tabclickhandler(e, i * 6 - 6, i * 6)} key={i}>
        tab {i}
      </div>
    );
  }
  return <div className="tabs-bar">{tabs}</div>;
}
