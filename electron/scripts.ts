import { ipcRenderer, contextBridge } from "electron";

let indexBridge = {
  runWindowsScript: async () => {
    await ipcRenderer.invoke("runWindowsScript");
  },
};

contextBridge.exposeInMainWorld("indexBridge", indexBridge);
