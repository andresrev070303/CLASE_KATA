import puntuacion from "./puntaje.js";

describe("Puntaje", () => {
  it("Deberia devolver Love-Love si el puntaje es 0-0", () => {
    expect(puntuacion(0, 0)).toEqual("Love-Love");
  });
  it("Deberia devolver 15-0 si el puntaje es 1-0", () => {
    expect(puntuacion(1, 0)).toEqual("15-0");
  });
});


