export class ReadCommand implements FomoCommand {
  constructor() {}
  execute(): void {
    console.log(`Reading from the reading list`);
  }
}
