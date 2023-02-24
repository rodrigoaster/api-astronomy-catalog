import { Entity } from "../core/entity";

type GalaxyProps = {
  name: string;
  scale_lightyear: number;
  distanceEarth?: number;
  shape: string;
  age: number;
  composition: string;
}

export class Galaxy extends Entity<GalaxyProps> {
  private constructor(props: GalaxyProps, id?: string) {
    super(props, id)
  }

  static create(props: GalaxyProps, id?: string) {
    const galaxy = new Galaxy(props, id)

    return galaxy
  }
}