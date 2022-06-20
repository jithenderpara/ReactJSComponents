import "./Tabs.css";
function Tabs(props) {
  console.log(props);
  const { isNumber, items, active } = props;
  const renderTabItems = (items, isNumber, active) =>
    items.map((tab, index) => {
      return isNumber ? (
        <li
          className={
            index === active
              ? "Tabs_tabs-list_item Tabs_tabs-list_item-active"
              : "Tabs_tabs-list_item"
          }
        >
          <button onClick={(e) => alert()}>
            <span className="Tabs-list_items-steps">{index + 1}</span>
            <div className="Tabs-list_items-dec">
              <label>{tab.text}</label>
              <small>{tab.heading}</small>
            </div>
          </button>
        </li>
      ) : (
        <li>
          <button onClick={(e) => alert()}>
            <label>{tab.text}</label>
            <small>{tab.heading}</small>
          </button>
        </li>
      );
    });
  return (
    <div className="Tabs">
      <h1>Tabs</h1>
      <ul className="tabs-list">{renderTabItems(items, isNumber, active)}</ul>
    </div>
  );
}

export default Tabs;
