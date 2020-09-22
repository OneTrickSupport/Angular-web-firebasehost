
export class Lagklass {
  constructor(private namn?: string, private land?: string, private ranking?: number, private spelare1?: string,
              private spelare2?: string, private spelare3?: string, private spelare4?: string, private spelare5?: string) {}
  get Namn(): string {
    return this.namn;
  }

  set Namn(value: string) {
    this.namn = value;
  }

  get Land(): string {
    return this.land;
  }

  set Land(value: string) {
    this.land = value;
  }

  get Ranking(): number {
    return this.ranking;
  }

  set Ranking(value: number) {
    this.ranking = value;
  }

  get Spelare1(): string {
    return this.spelare1;
  }

  set Spelare1(value: string) {
    this.spelare1 = value;
  }

  get Spelare2(): string {
    return this.spelare1;
  }

  set Spelare2(value: string) {
    this.spelare1 = value;
  }

  get Spelare3(): string {
    return this.spelare1;
  }

  set Spelare3(value: string) {
    this.spelare1 = value;
  }

  get Spelare4(): string {
    return this.spelare1;
  }

  set Spelare4(value: string) {
    this.spelare1 = value;
  }
  get Spelare5(): string {
    return this.spelare1;
  }

  set Spelare5(value: string) {
    this.spelare1 = value;
  }
}
