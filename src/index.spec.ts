import communities from ".";

describe("communities array", () => {
  it("contain all Spain's autonomous communities", () => {
    expect(communities.length).toBe(19);
  });

  it("check first community name to be Andalucía", () => {
    expect(communities[0].name).toBe("Andalucía");
  });

  it("check first community code to be 01", () => {
    expect(communities[0].code).toBe("01");
  });

  it("check last community name to be Melilla", () => {
    expect(communities[18].name).toBe("Melilla");
  });

  it("check last community code to be 19", () => {
    expect(communities[18].code).toBe("19");
  });
});
