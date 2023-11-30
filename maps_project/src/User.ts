import { faker } from "@faker-js/faker";
import { Markable } from "./CustomMap";

export class User implements Markable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = "red";

  constructor() {
    this.name = faker.person.firstName("female");

    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `<div>
              <h1> User Name : ${this.name} </h1>
            </div>`;
  }
}
