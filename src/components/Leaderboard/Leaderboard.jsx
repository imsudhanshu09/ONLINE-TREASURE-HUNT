import React, {useEffect} from 'react';
import './Leaderboard.css'; // Import CSS for styling

const Leaderboard = ({ data }) => {
  useEffect(() => {
    // Create stars dynamically
    const container = document.querySelector('.background');
    const numStars = 100; // Adjust number of stars as needed
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}%`; // Randomize star position vertically
      star.style.left = `${Math.random() * 100}%`; // Randomize star position horizontally
      container.appendChild(star);
    }
  }, []);

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
      <div className="background"></div>
    </div>
  );
};

export default Leaderboard;
