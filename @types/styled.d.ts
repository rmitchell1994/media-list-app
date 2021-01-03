import "styled-components";
import { Colours } from "../contracts/themes/colours";

declare module "styled-components" {
  export interface DefaultTheme {
    colours: Colours;
  }
}
