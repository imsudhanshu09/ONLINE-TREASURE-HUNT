import React from 'react';
import './Leaderboard.css'; // Import CSS for styling

const Leaderboard = ({ data }) => {
  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Time Stamp</th>
            <th>Questions Answered</th>
          </tr>
        </thead>
        <tbody>
          {data.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.Semester}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
