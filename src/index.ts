import { Command } from "commander";
import { AddCommand } from "./commands/AddCommand";
import { ListCommand } from "./commands/ListCommand";
import { ReadCommand } from "./commands/ReadCommand";

const program = new Command();

program.name("fomo").description("CLI to manage reading list").version("0.8.0");

program
  .command("add")
  .description("add an item to the reading list")
  .argument("<string>", "item to add")
  .action(new AddCommand().execute)
  .command("list")
  .description("list all items in the reading list")
  .action(new ListCommand().execute)
  .command("read")
  .description("read an item from the reading list")
  .action(new ReadCommand().execute);

program.parse();
