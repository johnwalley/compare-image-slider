import { action } from "@storybook/addon-actions";
import Component from "./button.svelte";

export default {
  title: "Component",
  component: Component
};

export const Text = () => ({
  Component: Component,
  props: { text: "Hello Button" },
  on: { click: action("clicked") }
});

export const Emoji = () => ({
  Component: Component,
  props: {
    text: "😀 😎 👍 💯"
  },
  on: { click: action("clicked") }
});
