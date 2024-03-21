import { usePage } from "@inertiajs/react";

export default function useProps(propName:string, defaultValue = null)
{
  const { props } = usePage();
  if(props && propName in props)
  {
    return props[propName];
  }
  return defaultValue;
}