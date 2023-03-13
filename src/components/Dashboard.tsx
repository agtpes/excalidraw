import React from "react";
import { ActionManager } from "../actions/manager";
import { NonDeletedExcalidrawElement } from "../element/types";
import { t } from "../i18n";
import { AppState, BinaryFiles, ExportOpts } from "../types";
import { Dialog } from "./Dialog";

export const DashboardDialog = ({
  elements,
  appState,
  files,
  actionManager,
  exportOpts,
  canvas,
  setAppState,
}: {
  elements: readonly NonDeletedExcalidrawElement[];
  appState: AppState;
  files: BinaryFiles;
  actionManager: ActionManager;
  exportOpts: ExportOpts;
  canvas: HTMLCanvasElement | null;
  setAppState: React.Component<any, AppState>["setState"];
}) => {
  const handleClose = React.useCallback(() => {
    setAppState({ openDialog: null });
  }, [setAppState]);

  return (
    <>
      {appState.openDialog === "dashBoard" && (
        <Dialog onCloseRequest={handleClose} title={"Dashboard"}>
          List of all notes...
        </Dialog>
      )}
    </>
  );
};
