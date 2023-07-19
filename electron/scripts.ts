import { ipcRenderer, contextBridge } from "electron";

let indexBridge = {
  runWindowsScript: async () => {
    await ipcRenderer.invoke("runWindowsScript");
  },
  runLinuxScript: async () => {
    await ipcRenderer.invoke("runLinuxScript");
  },
};

contextBridge.exposeInMainWorld("indexBridge", indexBridge);
