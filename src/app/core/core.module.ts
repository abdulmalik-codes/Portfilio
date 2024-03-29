import { NgModule } from "@angular/core";
import { CORE_STANDALONE_COMPONENTS } from "./components";

@NgModule({
  imports: [
      ...CORE_STANDALONE_COMPONENTS
  ],
  exports: [
      ...CORE_STANDALONE_COMPONENTS
  ]
})
export class CoreModule { }
