export class AddCommand implements FomoCommand {
  constructor() {}
  execute(item: string): void {
    console.log(`Adding ${item} to the reading list`);
  }
}
