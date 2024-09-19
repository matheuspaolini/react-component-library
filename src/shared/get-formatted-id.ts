export type GetFormattedIdParams = {
  value: string;
};

export function getFormattedId(params: GetFormattedIdParams) {
  return params.value.concat('-id');
}
