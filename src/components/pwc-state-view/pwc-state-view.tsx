import { Component, Prop, h } from "@stencil/core";
import placeholder from "../../assets/meditation.svg";

@Component({
  tag: "pwc-state-view",
  styleUrl: "pwc-state-view.scss",
  shadow: false
})
export class PWCStateView {
  /**
   * Main Image Source
   */
  @Prop() source: any = placeholder;

  @Prop() title: string = "Time to Chill";

  @Prop() subtitle: string =
    "It's time for relaxation and chill. Release the stress and get a better day and a full peaceful for the night. Let us guide you in this adventure";

  render() {
    return (
      <div class="pwc-container">
        <img class="pwc-image-style" src={this.source} />
        <div class="text-container">
          <span class="pwc-title-style">{this.title}</span>
          <span class="pwc-subtitle-style">{this.subtitle}</span>
        </div>
      </div>
    );
  }
}
