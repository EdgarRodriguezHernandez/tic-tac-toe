
export const WinnerMesage = ({ winner, resetGame }) => {
  if (!winner) {
    return null; // No renderizar el componente si no hay un ganador
  }

  const winnerText = winner === false ? 'No body wins' : 'Wins ' + winner;

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