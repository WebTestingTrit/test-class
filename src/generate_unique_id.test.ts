import { IdGenerator } from "./generate_unique_id";
describe("The IdGenerator class", () => {
  it("should be an instance of IdGenerator", () => {
    const idGenerator = new IdGenerator();
    expect(idGenerator).toBeInstanceOf(IdGenerator);
  });
});
