import { process } from "../apiLoader";
import jsonData from "./resources/O60941.json";
import diseasesJson from "./resources/diseases.json";
import dataJson from "./resources/data.json";

describe("interaction-viewer apiLoader", () => {
  it("should process the data", () => {
    const { data, diseases } = process(jsonData);
    // subcellulartreeMenu: TypeError: Converting circular structure to JSON
    // console.log(JSON.stringify(data));
    expect(diseases).toEqual(diseasesJson);
    expect(data).toEqual(dataJson);
  });
});
