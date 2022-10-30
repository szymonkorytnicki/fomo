export class ListCommand implements FomoCommand {
  constructor() {}
  execute(): void {
    console.log("Listing all items in the reading list");
  }
}
