import { computed } from "vue";

export function usePropsWrapper(props, emit, name) {
  return computed({
    get: () => props[name],
    set: (value) => emit(`update:${name}`, value),
  });
}
