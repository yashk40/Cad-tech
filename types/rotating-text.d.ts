import * as React from "react";

export interface RotatingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  texts: string[];
  transition?: any;
  initial?: any;
  animate?: any;
  exit?: any;
  animatePresenceMode?: string;
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number | string;
  loop?: boolean;
  auto?: boolean;
  splitBy?: "characters" | "words" | "lines" | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

declare const RotatingText: React.ForwardRefExoticComponent<
  RotatingTextProps & React.RefAttributes<any>
>;

export default RotatingText;


