import React from 'react';
import "../styles/Child.css";

const ColourSelector = (props) => {
  // console.log(props);
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button className={"btn-"+config.key} onClick={() => selectNextBackground({background: background})}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
