export namespace GetFormattedId {
  export type Params = {
    value: string;
  };

  export type Result = string | Error;
}

export function getFormattedId(params: GetFormattedId.Params): GetFormattedId.Result {
  if (params === undefined) {
    throw new Error('Params cannot be undefined.');
  }

  if (typeof params.value !== 'string') {
    throw new Error('Value must be a string.');
  }

  return params.value.concat('-id');
}
