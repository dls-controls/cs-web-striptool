import PropTypes, { InferProps } from "prop-types";
import { PV } from "./pv";

export type ExcludeNulls<T> = {
  [P in keyof T]: Exclude<T[P], null>;
};
export type InferWidgetProps<T> = ExcludeNulls<InferProps<T>>;

export const StringProp = PropTypes.string.isRequired;
export const StringPropOpt = PropTypes.string;

export const StringArrayProp = PropTypes.arrayOf(StringProp).isRequired;
export const StringArrayPropOpt = PropTypes.arrayOf(StringProp);

export const IntProp = PropTypes.number.isRequired;
export const IntPropOpt = PropTypes.number;

export const FloatProp = PropTypes.number.isRequired;
export const FloatPropOpt = PropTypes.number;

export const BoolProp = PropTypes.bool.isRequired;
export const BoolPropOpt = PropTypes.bool;

export const PvProp = PropTypes.instanceOf(PV).isRequired;
export const PvPropOpt = PropTypes.instanceOf(PV);

export const PvArrayProp = PropTypes.arrayOf(PvProp).isRequired;
export const PvArrayPropOpt = PropTypes.arrayOf(PvProp);

export const CurvePropOpt = PropTypes.shape({
  name: StringPropOpt,
  units: StringPropOpt,
  comment: StringPropOpt,
  precision: FloatPropOpt,
  min: FloatPropOpt,
  max: FloatPropOpt,
  scale: BoolPropOpt,
  plotStatus: BoolPropOpt
});

export const CurveProp = CurvePropOpt.isRequired;

export const PvTypePropOpt = PropTypes.shape({
  double: BoolPropOpt,
  string: BoolPropOpt,
  base64Array: BoolPropOpt,
  stringArray: BoolPropOpt,
  display: BoolPropOpt,
  timestamp: BoolPropOpt
});

export const PvTypeProp = PvTypePropOpt.isRequired;

export const PvTypeArrayProp = PropTypes.arrayOf(PvTypeProp).isRequired;
export const PvTypeArrayPropOpt = PropTypes.arrayOf(PvTypeProp);

export const StringOrNumPropOpt = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]);
export const StringOrNumProp = StringOrNumPropOpt.isRequired;