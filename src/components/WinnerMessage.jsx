export const WinnerMessage = ({ winner, resetGame }) => {
  if (winner === undefined || winner === null) {
    return null;
  }

  const winnerText = winner === false ? 'No body wins' : `Wins ${winner}`;

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <footer>
          <button onClick={resetGame}>New game</button>
        </footer>
      </div>
    </section>
  );
};