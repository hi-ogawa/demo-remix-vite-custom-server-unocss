import React from "react";

// pass critical css for dev ssr to prevent FOUC
// TODO: the initial <style> should be removed after hot css update.
//       but this is less problematic for tailwind/unocss style since
//       utility based css doesn't usually lead to conflict style.
export const CriticalCssContext = React.createContext("");

export function CriticalCss() {
  const value = React.useContext(CriticalCssContext);
  return (
    <style
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
}
