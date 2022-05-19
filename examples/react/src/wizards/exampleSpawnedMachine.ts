import { createWizard } from "@upsolve/wizards";
import { getWizardMap, ID_EXAMPLE_SPAWNED_MACHINE } from "./wizardMap";
import { wizardModelLoaders } from "./wizardModels";

export const machineMapping = createWizard({
  config: {
    id: ID_EXAMPLE_SPAWNED_MACHINE,
    initial: "editor",
    label: "Example Spawned Machine Editor",
    exitTo: "/",
    progressBar: true,
    sectionsBar: [],
    version: 1,
  },
  machineMap: getWizardMap(),
  schema: {
    states: {
      hobbyId: null,
    },
    machineModels: [wizardModelLoaders.Hobby()],
  },
  serializations: {},
  states: {
    editor: {
      content: (ctx) => [
        { type: "h2", text: "Hobby" },
        {
          type: "input",
          inputType: "text",
          label: "Description",
          assign: { path: "description" },
          validations: ["required"],
        },
        {
          type: "input",
          inputType: "date",
          label: "When did you start?",
          assign: { path: "startedAt" },
          validations: ["required"],
        },
        { type: "button", buttonType: "submit", text: "Save", event: "SAVE" },
      ],
      on: {},
    },
  },
});
