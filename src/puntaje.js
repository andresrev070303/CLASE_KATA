function obtenerScore(score1, score2) {
  if ( score1 === 1 && score2 === 0) {
    return "15-0";
  }
  else return "Love-Love";
}

export default obtenerScore;
