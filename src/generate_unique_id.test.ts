import { describe } from "node:test";
import { IdGenerator } from "./generate_unique_id";

describe("The IdGenerator class", () => {
  it("should be an instance of IdGenerator", () => {
    const idGenerator = new IdGenerator();
    expect(idGenerator).toBeInstanceOf(IdGenerator);
  });

  // scenario: default instance when generates an id
  describe("given default instance when generates an id", () => {
    let idGenerator: IdGenerator;
    beforeEach(() => {
      // Arrange
      idGenerator = new IdGenerator();
    });
    // should be a string
    it("should be a string", () => {
      // Act
      const generatedId = idGenerator.generate();
      // Assert
      expect(typeof generatedId).toBe("string");
    });
    // should be an hexadecimal
    it("should be an hexadecimal", () => {
      const generatedId = idGenerator.generate();
      expect(generatedId).toMatch(/^[0-9a-f]+$/i);
    });
    // should be of length 14
    it("should be of length 14", () => {
      const generatedId = idGenerator.generate();
      expect(generatedId).toHaveLength(14);
    });
  });
  // scenario: custom length instance when generates an id
  describe("given custom length instance when generates an id", () => {
    it("should be of length 15", () => {
      const idGenerator = new IdGenerator(15);
      const generatedId = idGenerator.generate();
      expect(generatedId).toHaveLength(15);
    });
    it("should be of length 12", () => {
      const idGenerator = new IdGenerator(12);
      const generatedId = idGenerator.generate();
      expect(generatedId).toHaveLength(12);
    });
  });
  // scenario: default instance when called multiple times
  describe("given default instance when called multiple times", () => {
    let idGenerator: IdGenerator;
    beforeEach(() => {
      idGenerator = new IdGenerator();
    });
    it("should generate 5 unique identifiers", () => {
      const uniqueIds = new Set<string>();
      for (let i = 0; i < 5; i++) {
        const generatedId = idGenerator.generate();
        expect(uniqueIds).not.toContain(generatedId);
        uniqueIds.add(generatedId);
      }
    });
    it("should generate 5000 unique identifiers", () => {
      const uniqueIds = new Set<string>();
      for (let i = 0; i < 5000; i++) {
        const generatedId = idGenerator.generate();
        expect(uniqueIds).not.toContain(generatedId);
        uniqueIds.add(generatedId);
      }
    });
  });
  describe("given short length instance when called multiple times", () => {
    let idGenerator: IdGenerator;
    beforeEach(() => {
      idGenerator = new IdGenerator(12);
    });
    it("should generate 5 unique identifiers", () => {
      const uniqueIds = new Set<string>();
      for (let i = 0; i < 5; i++) {
        const generatedId = idGenerator.generate();
        expect(uniqueIds).not.toContain(generatedId);
        uniqueIds.add(generatedId);
      }
    });
    it("should generate 5000 unique identifiers", () => {
      const uniqueIds = new Set<string>();
      for (let i = 0; i < 5000; i++) {
        const generatedId = idGenerator.generate();
        expect(uniqueIds).not.toContain(generatedId);
        uniqueIds.add(generatedId);
      }
    });
  });
});
