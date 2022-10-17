export const selectResource = (state, type) => state.resource[type];

export const selectResources = (state) => state.resource;

export const selectStatus = (state) => state.resource.status;
