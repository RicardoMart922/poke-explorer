import '../styles/Card.css';
import { useEffect, useState } from 'react';

function Card({ banner, content }) {
  const [selectedTab, setSelectedTab] = useState("stats");
  const [element, setElement] = useState(null);

  const [statistic, abilities] = content;

  const stats = Array.isArray(statistic)
    ? statistic.map((item) => (
        <span key={item.stat.name}>
          <strong>{item.stat.name}:</strong> {item.base_stat}
        </span>
      ))
    : null;

  const abilityList = Array.isArray(abilities)
    ? abilities.map((ability, index) => (
        <span key={index}>
          <strong>Ability:</strong> {ability.ability.name}
        </span>
      ))
    : null;

  useEffect(() => {
    if (stats) {
      setElement(
        <div className="pokemon-card">
          <div className="body-card">
            <div className="img-card">{banner}</div>
            <div className="content-card">
              <div className="menu-card">
                <button onClick={() => setSelectedTab("stats")}>Statistics</button>
                <button onClick={() => setSelectedTab("abilities")}>Abilities</button>
              </div>
              <div className="list-attributes">
                {selectedTab === "stats" ? stats : abilityList}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }, [content, selectedTab, stats, abilityList, banner]);

  return <>{element}</>;
}

export default Card;
