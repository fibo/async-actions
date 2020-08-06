declare module 'async-actions' {
  interface AsyncActionStages {
    REQUEST: string;
    SUCCESS: string;
    FAILURE: string;
  }

  export default function asynActions(string): AsyncActionStages;
}
